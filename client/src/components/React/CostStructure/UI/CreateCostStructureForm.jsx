import { useForm } from "react-hook-form";
import Button from "../../UI/Button";
import { groupIngredients } from "../../../../service/helpers";
import { pushData } from "../../../../service/fetchData";
import { useQueryClient } from "@tanstack/react-query";
import InputError from "../../UI/InputError";
import { useState } from "react";
import { CirclePlus, Minus, Plus } from "lucide-react";
import { createStructure } from "../../../../API/costStructure";

const CreateCostStructureForm = ({ setShowModal }) => {
  let [addFields, setAddFields] = useState(1);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const elements = [...Array(addFields).keys()];

  const onSubmit = async (data) => {
    const { product_name, product_description, ...ingredients } = data;

    const response = await createStructure({
      name: product_name,
      description: product_description,
      items: groupIngredients(ingredients),
    });

    //Mark the cost_structures query as stale (outdated) to refetch them
    //And make the new cost structure be fetched inmediatly after being created
    await queryClient.invalidateQueries({ queryKey: ["cost_structures"] });

    if (response.status === 200) setShowModal(false);
    // console.log({
    //   product_name,
    //   product_description,
    //   ingredients: groupIngredients(ingredients),
    // });
  };

  const handleChangeInput = (e) => {
    let { name, value } = e.target;

    value = value.replace(/[^0-9.]/g, "");

    // Prevent more than one dot
    const parts = value.split(".");
    if (parts.length > 2) {
      value = parts[0] + "." + parts.slice(1).join("");
    }

    setValue(name, value);
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
        />
        {errors.product_name && (
          <InputError error={errors.product_name.message} />
        )}
        <span className="text-teal-400 text-sm font-bold">Descripcion</span>
        <input
          type="text"
          {...register("product_description", { required: "Campo Requerido" })}
          className="border-2 border-gray-800 hover:bg-gray-800 -mt-4"
        />
        {errors.product_description && (
          <InputError error={errors.product_description.message} />
        )}
      </div>

      <div className="grid grid-cols-3 !border-t-2 [&_>*]:py-2 [&_>*]:not-last:border-r [&_>*]:border-gray-800 [&_>*]:bg-gray-900 text-teal-400 text-center text-sm font-bold w-full">
        <h1>Ingrediente</h1>
        <h1>Cantidad</h1>
        <h1>Precio</h1>
      </div>
      {elements.map((e) => (
        <div
          className="grid grid-cols-3 [&_input]:not-last:border-r [&_input:hover]:bg-gray-800 [&_input]:text-center"
          key={e}
        >
          <input
            type="text"
            {...register(`ingredient${e + 1}`)}
            placeholder="nombre"
          />
          <input
            type="text"
            name="quantity"
            {...register(`ingredient${e + 1}_quantity`)}
            placeholder="0"
            onChange={handleChangeInput}
          />
          <input
            type="text"
            name="price"
            {...register(`ingredient${e + 1}_price`)}
            placeholder="0"
            onChange={handleChangeInput}
          />
        </div>
      ))}
      <div className="flex justify-center items-center mt-4 mx-auto w-[90%] !border-0 gap-4 ">
        <Button
          title="Crear"
          className="w-2/3 !h-auto"
          submit
          icon={<CirclePlus />}
        />
        <div className="flex flex-wrap gap-2 w-max justify-center">
          <h1 className="w-full text-center text-sm">Ingredientes:</h1>
          <Button
            title=""
            className="w-max border-green-900 !text-green-900 hover:!bg-green-800 hover:!text-gray-950 !p-1"
            icon={<Plus />}
            onClick={() => setAddFields((prev) => prev + 1)}
          />
          <Button
            title=""
            className="w-max border-red-900 !text-red-900 hover:!bg-red-800 hover:!text-gray-950 !p-1"
            icon={<Minus />}
            onClick={() => setAddFields((prev) => (prev > 1 ? prev - 1 : 1))}
          />
        </div>
      </div>
    </form>
  );
};

export default CreateCostStructureForm;
