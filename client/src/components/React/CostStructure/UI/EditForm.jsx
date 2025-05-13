import { useForm } from "react-hook-form";
import Button from "../../UI/Button";
import { groupIngredients } from "../../../../service/helpers";
import { useQueryClient } from "@tanstack/react-query";
import { AlertTriangle, FilePenLine, Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import lodash from "lodash";
import AcceptPrompt from "../../UI/AcceptPrompt";
import InputError from "../../UI/InputError";
import { deleteById, updateStructure } from "../../../../API/costStructure";

/*
  There is an unexpected behavior when deleting and adding a column in the ingredients table
  if the starting table have [item1, item2, item3] and The Minus button is clicked
  The table will be now [item1, item2], but if now the Add button is clicked it will be back to [item1, item2, item3]
  instead of [item1, item2, { name: "", price: "", quantity: "" }]
  I couldn't figure it out why this happend, but is kind of usefull for avoiding accidental deletion of columns
*/

const EditForm = ({ data, setShowModal }) => {
  // Get the variable from the fetched data
  const { name, description, items, id } = data;

  // Control the confirm detetion prompt window
  const [prompt, setPrompt] = useState(false);

  // Initial items of the list
  // To help add and delete mor columns to ingredients table
  const [currentItems, setCurrentItems] = useState(items);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const onSubmit = async (data) => {
    const { product_name, product_description, ...ingredients } = data;

    // Check if the form data is the same than the initial data
    const same =
      product_name == name &&
      product_description == description &&
      lodash.isEqual(groupIngredients(ingredients), currentItems);

    // Prevent Editing if the data is the same
    if (same) return;

    const response = await updateStructure({
      name: product_name,
      description: product_description,
      // Helper function to group each ingredient field by name and turn it into an orderder object array
      items: groupIngredients(ingredients),
      id,
    });

    // Mark the cost_structures query as stale (outdated) to refetch them
    // And make the new cost structure be fetched inmediatly after being created
    await queryClient.invalidateQueries({ queryKey: ["cost_structures"] });

    if (response.status === 200) setShowModal(false);
  };

  const handleChangeInput = (e) => {
    let { name, value } = e.target;

    // Prevents for typing any character except for numbers and one dot
    value = value.replace(/[^0-9.]/g, "");

    // Prevent more than one dot
    const parts = value.split(".");
    if (parts.length > 2) {
      value = parts[0] + "." + parts.slice(1).join("");
    }

    setValue(name, value);
  };

  const handlePrompt = () => handleDelete();

  const handleDelete = async () => {
    const response = await deleteById({
      id,
    });

    await queryClient.invalidateQueries({ queryKey: ["cost_structures"] });

    if (response.status === 200) setShowModal(false);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="[&_input]:font-light [&_input]:border-gray-800 [&_input]:outline-0 [&_input]:p-2 [&_input]:text-sm
      [&_>*]:not-first:border-2 [&_>*]:border-gray-800 [&_>*]:not-first:border-t-0 grid grid-cols-1"
    >
      <div className="flex flex-col mb-4 gap-4">
        <span className="text-teal-400 text-sm font-bold">
          Nombre del Producto
        </span>
        <input
          type="text"
          {...register("product_name", { required: "Campo Requerido" })}
          className="border-2 border-gray-800 hover:bg-gray-800 -mt-4"
          defaultValue={name}
        />
        {errors.product_name && (
          <InputError error={errors.product_name.message} />
        )}
        <span className="text-teal-400 text-sm font-bold">Descripcion</span>
        <input
          type="text"
          {...register("product_description", { required: "Campo Requerido" })}
          className="border-2 border-gray-800 hover:bg-gray-800 -mt-4"
          defaultValue={description}
        />
        {errors.product_description && (
          <InputError error={errors.product_description.message} />
        )}
      </div>

      <div className="relative !border-t-2 [&_>*]:not-last:border-b">
        <div className="grid grid-cols-3 !border-b-0 [&_>*]:py-2 [&_>*]:not-last:border-r [&_>*]:border-gray-800 [&_>*]:bg-gray-900 text-teal-400 text-center text-sm font-bold w-full">
          <h1>Ingrediente</h1>
          <h1>Cantidad</h1>
          <h1>Precio</h1>
        </div>
        {currentItems.map((e, i) => (
          <div
            className="grid grid-cols-3 [&_input]:not-last:border-r [&_input:hover]:bg-gray-800 [&_input]:text-center border-gray-800"
            key={i}
          >
            <input
              type="text"
              {...register(`ingredient${i + 1}`, { required: true })}
              placeholder="nombre"
              defaultValue={e.name}
            />
            <input
              type="text"
              name="quantity"
              {...register(`ingredient${i + 1}_quantity`, { required: true })}
              placeholder="0"
              onChange={handleChangeInput}
              defaultValue={e.quantity}
            />
            <input
              type="text"
              name="price"
              {...register(`ingredient${i + 1}_price`, { required: true })}
              placeholder="0"
              onChange={handleChangeInput}
              defaultValue={e.price}
              className="!border-r-0"
            />
            <div className="absolute -bottom-4 left-0 w-max text-xs text-red-800">
              {(errors[`ingredient${i + 1}`] ||
                errors[`ingredient${i + 1}_quantity`] ||
                errors[`ingredient${i + 1}_price`]) && (
                <span className="flex items-center gap-1">
                  <AlertTriangle size={12} /> No pueden haber campos vacios
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 mx-auto w-[90%] !border-0 gap-4">
        <Button
          title="Modificar"
          className="w-2/3"
          submit
          icon={<FilePenLine />}
        />
        <Button
          title=""
          className="w-max border-red-900 !text-red-900 hover:!bg-red-800 hover:!text-gray-950"
          icon={<Trash2 />}
          onClick={() => {
            setPrompt(true);
          }}
        />
        <div className="flex flex-wrap gap-2 w-max justify-center">
          <h1 className="w-full text-center text-sm">Ingredientes:</h1>
          <Button
            title=""
            className="w-max border-green-900 !text-green-900 hover:!bg-green-800 hover:!text-gray-950 !p-1"
            icon={<Plus />}
            onClick={() =>
              setCurrentItems((prev) => [
                ...prev,
                { name: "", price: "", quantity: "" },
              ])
            }
          />
          <Button
            title=""
            className="w-max border-red-900 !text-red-900 hover:!bg-red-800 hover:!text-gray-950 !p-1"
            icon={<Minus />}
            onClick={() => setCurrentItems((prev) => prev.slice(0, -1))}
          />
        </div>
      </div>
      <AcceptPrompt
        setShowModal={setPrompt}
        showModal={prompt}
        handlePrompt={handlePrompt}
        title="Seguro que desea eliminar el elemento?"
      />
    </form>
  );
};

export default EditForm;
