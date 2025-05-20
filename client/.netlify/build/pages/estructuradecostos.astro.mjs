import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BVR7uCjW.mjs';
import { A as AnimateShow, $ as $$Layout, a as $$PageHeader } from '../chunks/Layout_n1L-rNPc.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { QueryClient, QueryClientProvider, useQueryClient, useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { XCircle, TriangleAlert, AlertTriangle, FilePenLine, Trash2, Plus, Minus, Ban, CirclePlus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Icon as Icon$1 } from '@iconify-icon/react';
import lodash from 'lodash';
import { create } from 'zustand';
export { renderers } from '../renderers.mjs';

const queryClient = new QueryClient();
function ReactQueryProvider({ children }) {
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children });
}

const Loader = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center justify-center", children: [
    /* @__PURE__ */ jsx("div", { className: "border-6 border-gray-400 rounded-full border-r-cyan-500 aspect-square w-8 animate-spin" }),
    "Cargando..."
  ] });
};

const CostCard = ({ data, setSelectedElement, setShowModal }) => {
  const { name, description, items } = data;
  const totalPrice = items.reduce(
    (acc, itm) => acc + itm.quantity / 1e3 * itm.price,
    0
  );
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex flex-col border border-gray-700 rounded-xl w-64 h-80 bg-radial from-gray-800 to-gray-900 shadow-md\r\n  hover:from-gray-800/50 hover:to-gray-900/50 transition-colors duration-200 cursor-pointer",
      onClick: () => {
        setSelectedElement(data);
        setShowModal(true);
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "bg-gray-900 px-4 py-3 rounded-t-xl border-b border-gray-700", children: /* @__PURE__ */ jsx("h1", { className: "text-white font-medium truncate", children: name }) }),
        /* @__PURE__ */ jsx("div", { className: "px-3 py-2 flex-1 overflow-y-auto", children: items.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-x-2 mb-1 text-teal-400 text-xs font-medium", children: [
            /* @__PURE__ */ jsx("span", { children: "Ingrediente" }),
            /* @__PURE__ */ jsx("span", { className: "text-right", children: "Cantidad" }),
            /* @__PURE__ */ jsx("span", { className: "text-right", children: "Precio" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-1", children: items.map((itm, i) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-x-2 text-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-200 truncate", children: itm.name }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-right", children: itm.quantity }),
            /* @__PURE__ */ jsxs("span", { className: "text-emerald-400 text-right", children: [
              itm.price,
              "$"
            ] })
          ] }, i)) })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col text-sm text-gray-700 h-full text-center", children: [
          /* @__PURE__ */ jsx(
            Icon,
            {
              icon: "tabler:file-x",
              className: "h-[90%] aspect-square m-auto"
            }
          ),
          "No hay descripcion..."
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center bg-gray-900 px-3 py-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-white text-sm", children: "Costo total:" }),
            /* @__PURE__ */ jsxs("span", { className: "text-teal-300 font-medium", children: [
              "$",
              totalPrice.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "text-xs text-gray-400 truncate px-4 py-1 border-t border-gray-600",
              title: description,
              children: description || /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Sin descripcion..." })
            }
          )
        ] })
      ]
    }
  );
};

const Window = ({ close, children, title }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col rounded-md border border-gray-800 w-[80%] md:w-[60%] lg:w-1/2 overflow-y-auto h-max max-h-[90dvh] bg-gray-950 shadow-lg", children: [
    /* @__PURE__ */ jsxs("h1", { className: "sticky top-0 left-0 bg-gray-900 border-b border-gray-800 flex justify-between items-center p-2 text-sm ", children: [
      title,
      " ",
      /* @__PURE__ */ jsx(
        XCircle,
        {
          className: "cursor-pointer text-teal-400 hover:text-teal-600",
          onClick: () => close(false)
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-4 ", children })
  ] });
};

const Modal = ({ showModal, setShowModal, children, title, className }) => {
  return /* @__PURE__ */ jsx(
    AnimateShow,
    {
      condition: showModal,
      className: `fixed inset-0 bg-black/20 z-50 flex items-center justify-center backdrop-blur-sm ${className}`,
      children: /* @__PURE__ */ jsx(Window, { title, close: setShowModal, children })
    }
  );
};

const Button = ({
  icon,
  className,
  onClick,
  title,
  submit,
  disabled = false
}) => {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick,
      type: submit ? "submit" : "button",
      className: `flex items-center justify-center gap-2 cursor-pointer px-4 py-2 rounded-md !border border-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white transition-all duration-300 
      disabled:border-gray-900 disabled:cursor-not-allowed disabled:text-gray-800 disabled:hover:bg-gray-950 disabled:hover:text-gray-900
      ${className}`,
      disabled,
      children: [
        icon || !disabled ? icon : /* @__PURE__ */ jsx(Icon$1, { icon: "line-md:loading-twotone-loop" }),
        disabled ? "Cargando" : title
      ]
    }
  );
};

const groupIngredients = (ingredients) => {
  // 1. Get the keys of the object
  const keys = Object.keys(ingredients);

  const indices = [
    // 4. Remove duplicates by spreading the Set
    ...new Set(
      // 2. Loop the keys and get the index of each field
      keys
        .map((key) => {
          const match = key.match(/^ingredient(\d+)(?:_quantity|_price)?$/);
          return match ? parseInt(match[1], 10) : null;
        })
        // 3. Remove null indices
        .filter((index) => index !== null)
    ),
  ];

  //5. Sort from liwest to highest
  indices.sort((a, b) => a - b);

  return indices
    .map((i) => ({
      name: ingredients[`ingredient${i}`] || "",
      quantity: ingredients[`ingredient${i}_quantity`] || "",
      price: parseFloat(ingredients[`ingredient${i}_price`]).toFixed(2) || "",
    })) // 6. Remove empty fields and keeps only the ones that are fully filled
    .filter(
      (item) =>
        item.name.trim() !== "" &&
        item.quantity.trim() !== "" &&
        item.price.trim() !== ""
    );
};

/*
This is my proposal for turning the objects into an array grouping by 3
Object.keys(ingredients)
        .map(
          (key, i) =>
            i % 3 === 0 && {
              name: Object.values(ingredients)[i],
              cantidad: Object.values(ingredients)[i + 1],
              precio: Object.values(ingredients)[i + 2],
            }
        )
        .filter((object) => object !== false)
*/

const mergeArrayOfIngredients = (columnsArray, ingredientsArray) => {
  // Verify the difference between two array of objects
  // The lodash library have very usefull methods for this

  const lengthDiff = columnsArray.length < ingredientsArray.length;
  const dataDiff = lodash.take(ingredientsArray, columnsArray.length);

  // If the array that tracks the edited columns have no columns
  // Return The original array, meaning the user deleted all of them
  if (columnsArray.length <= 0) return columnsArray;

  // If there is a length difference, we need to figure out that difference
  // The dataDiff variable return that difference
  // The lodash _.take method, return N elements from the position 0 of the array
  // The length of the columnsArray is used here because we already know that ther is a length diff
  // So we take advantage of that to "take" that amount of element
  // The objective here is to "merge" the arrays in one, so we can return both, edited columns in case there were some
  // And deleted columns
  if (lengthDiff) {
    return dataDiff;
  }

  // If none of the above conditions were met, return the ingredientsArray
  // This means, there were data updated, but no column deletion
  return ingredientsArray;
};

const AcceptPrompt = ({
  setShowModal,
  showModal,
  handlePrompt,
  title = "Accept prompt"
}) => {
  return /* @__PURE__ */ jsx(
    Modal,
    {
      setShowModal,
      showModal,
      title,
      className: "!z-[100]",
      children: /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-5 [&_>*]:!w-[20%] [&_>*]:!p-5", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            title: "SI",
            onClick: () => {
              handlePrompt();
              setShowModal(false);
            },
            className: "border-green-900 !text-green-600 hover:!bg-green-800 hover:!text-green-300"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            title: "NO",
            onClick: () => {
              setShowModal(false);
            },
            className: "border-red-900 !text-red-600 hover:!bg-red-800 hover:!text-red-300"
          }
        )
      ] })
    }
  );
};

const InputError = ({ error }) => {
  return /* @__PURE__ */ jsxs("span", { className: "text-xs text-red-700 -mt-3 pl-2 flex items-center gap-1", children: [
    /* @__PURE__ */ jsx(TriangleAlert, { size: 16 }),
    error
  ] });
};

const pushData = async (route, data) => {
  const response = await fetch(route, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

const putData = async (route, data) => {
  const response = await fetch(route, {
    body: JSON.stringify(data),
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

const deleteData = async (route, data) => {
  const response = await fetch(route, {
    body: JSON.stringify(data),
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

const BACKEND_URL = "http://localhost:8000/api/costStructure";
const getAll = async () => {
  try {
    const response = await fetch(BACKEND_URL + "/getAll");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const deleteById = async (id) => {
  try {
    const response = await deleteData(BACKEND_URL + "/deleteById", id);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const createStructure = async (data) => {
  try {
    const response = await pushData(BACKEND_URL + "/createStructure", data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const updateStructure = async (data) => {
  try {
    const response = await putData(BACKEND_URL + "/updateStructure", data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const useUpdateCostStructureStore = create((set) => ({
  loading: false,
  error: null,
  status: null,
  updateStructure: async (data) => {
    set({ loading: true });
    const response = await updateStructure(data);
    set({ status: response.status });
  },
  resetStatus: () => set({ status: null, loading: false }),
}));

const EditForm = ({ data, setShowModal }) => {
  const updateStructure2 = useUpdateCostStructureStore(
    (state) => state.updateStructure
  );
  const loading = useUpdateCostStructureStore((state) => state.loading);
  useUpdateCostStructureStore((state) => state.error);
  const { status, resetStatus } = useUpdateCostStructureStore((state) => state);
  const { name, description, items, id } = data;
  const [prompt, setPrompt] = useState(false);
  const [currentItems, setCurrentItems] = useState(items);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();
  const queryClient = useQueryClient();
  const onSubmit = async (data2) => {
    const { product_name, product_description, ...ingredients } = data2;
    const same = product_name == name && product_description == description && lodash.isEqual(groupIngredients(ingredients), currentItems);
    if (same) return;
    await updateStructure2({
      name: product_name,
      description: product_description,
      // Helper function to group each ingredient field by name and turn it into an orderder object array
      items: mergeArrayOfIngredients(
        currentItems,
        groupIngredients(ingredients)
      ),
      id
    });
  };
  useEffect(() => {
    if (!status) return;
    const updateEditControlls = async () => {
      if (status === 200) {
        await setShowModal(false);
        await queryClient.invalidateQueries({ queryKey: ["cost_structures"] });
      }
    };
    updateEditControlls();
    resetStatus();
  }, [status]);
  const handleChangeInput = (e) => {
    let { name: name2, value } = e.target;
    value = value.replace(/[^0-9.]/g, "");
    const parts = value.split(".");
    if (parts.length > 2) {
      value = parts[0] + "." + parts.slice(1).join("");
    }
    setValue(name2, value);
  };
  const handlePrompt = () => handleDelete();
  const handleDelete = async () => {
    const response = await deleteById({
      id
    });
    await queryClient.invalidateQueries({ queryKey: ["cost_structures"] });
    if (response.status === 200) setShowModal(false);
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      autoComplete: "off",
      onSubmit: handleSubmit(onSubmit),
      className: "[&_input]:font-light [&_input]:border-gray-800 [&_input]:outline-0 [&_input]:p-2 [&_input]:text-sm\r\n      [&_>*]:not-first:border-2 [&_>*]:border-gray-800 [&_>*]:not-first:border-t-0 grid grid-cols-1",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col mb-4 gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-teal-400 text-sm font-bold", children: "Nombre del Producto" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              ...register("product_name", { required: "Campo Requerido" }),
              className: "border-2 border-gray-800 hover:bg-gray-800 -mt-4",
              defaultValue: name
            }
          ),
          errors.product_name && /* @__PURE__ */ jsx(InputError, { error: errors.product_name.message }),
          /* @__PURE__ */ jsx("span", { className: "text-teal-400 text-sm font-bold", children: "Descripcion" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              ...register("product_description", { required: "Campo Requerido" }),
              className: "border-2 border-gray-800 hover:bg-gray-800 -mt-4",
              defaultValue: description
            }
          ),
          errors.product_description && /* @__PURE__ */ jsx(InputError, { error: errors.product_description.message })
        ] }),
        currentItems.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "!border-t-2 [&_>*]:not-last:border-b", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 !border-b-0 [&_>*]:py-2 [&_>*]:not-last:border-r [&_>*]:border-gray-800 [&_>*]:bg-gray-900 text-teal-400 text-center text-sm font-bold w-full", children: [
            /* @__PURE__ */ jsx("h1", { children: "Ingrediente" }),
            /* @__PURE__ */ jsx("h1", { children: "Cantidad" }),
            /* @__PURE__ */ jsx("h1", { children: "Precio" })
          ] }),
          currentItems.map((e, i) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative grid grid-cols-3 [&_input]:not-last:border-r [&_input:hover]:bg-gray-800 [&_input]:text-center border-gray-800",
              children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    ...register(`ingredient${i + 1}`, { required: true }),
                    placeholder: "nombre",
                    defaultValue: e.name
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    name: "quantity",
                    ...register(`ingredient${i + 1}_quantity`, { required: true }),
                    placeholder: "0",
                    onChange: handleChangeInput,
                    defaultValue: e.quantity
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    name: "price",
                    ...register(`ingredient${i + 1}_price`, { required: true }),
                    placeholder: "0",
                    onChange: handleChangeInput,
                    defaultValue: e.price,
                    className: "!border-r-0"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 left-0 w-max text-xs text-red-800", children: (errors[`ingredient${i + 1}`] || errors[`ingredient${i + 1}_quantity`] || errors[`ingredient${i + 1}_price`]) && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { size: 12 }),
                  " No pueden haber campos vacios"
                ] }) })
              ]
            },
            i
          ))
        ] }) : /* @__PURE__ */ jsx("h1", { className: "!border-0 py-4 text-gray-500", children: "No hay ingredientes..." }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center mt-4 mx-auto w-[90%] !border-0 gap-4", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              title: "Modificar",
              className: "w-2/3",
              submit: true,
              icon: /* @__PURE__ */ jsx(FilePenLine, {}),
              disabled: loading
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              title: "",
              className: "w-max border-red-900 !text-red-900 hover:!bg-red-800 hover:!text-gray-950",
              icon: /* @__PURE__ */ jsx(Trash2, {}),
              onClick: () => {
                setPrompt(true);
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 w-max justify-center", children: [
            /* @__PURE__ */ jsx("h1", { className: "w-full text-center text-sm", children: "Ingredientes:" }),
            /* @__PURE__ */ jsx(
              Button,
              {
                title: "",
                className: "w-max border-green-900 !text-green-900 hover:!bg-green-800 hover:!text-gray-950 !p-1",
                icon: /* @__PURE__ */ jsx(Plus, {}),
                onClick: () => setCurrentItems((prev) => [
                  ...prev,
                  { name: "", price: "", quantity: "" }
                ])
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                title: "",
                className: "w-max border-red-900 !text-red-900 hover:!bg-red-800 hover:!text-gray-950 !p-1",
                icon: /* @__PURE__ */ jsx(Minus, {}),
                onClick: () => setCurrentItems((prev) => prev.slice(0, -1))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          AcceptPrompt,
          {
            setShowModal: setPrompt,
            showModal: prompt,
            handlePrompt,
            title: "Seguro que desea eliminar el elemento?"
          }
        )
      ]
    }
  );
};

const GetAll = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["cost_structures"],
    queryFn: () => getAll(),
    staleTime: 5 * 60 * 1e3
    // 5 minutes: Data is considered "fresh" for this period
  });
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    refetch();
  }, [refetch]);
  if (!isClient) {
    return null;
  }
  if (isLoading) return /* @__PURE__ */ jsx(Loader, {});
  if (error) return /* @__PURE__ */ jsx("div", { children: "Error" });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    data.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 place-items-center", children: data?.map((item) => /* @__PURE__ */ jsx(
      CostCard,
      {
        data: item,
        setSelectedElement,
        setShowModal
      },
      item.id
    )) }) : /* @__PURE__ */ jsxs("h1", { className: "flex justify-center items-center gap-4 text-2xl text-gray-600", children: [
      /* @__PURE__ */ jsx(Ban, { className: "text-red-900", size: 32 }),
      "No hay datos para mostrar..."
    ] }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        showModal,
        setShowModal,
        title: selectedElement?.name,
        children: /* @__PURE__ */ jsx(ReactQueryProvider, { children: /* @__PURE__ */ jsx(EditForm, { data: selectedElement, setShowModal }) })
      }
    )
  ] });
};

const CostStructure = () => {
  return /* @__PURE__ */ jsx(ReactQueryProvider, { children: /* @__PURE__ */ jsx(GetAll, {}) });
};

const CreateCostStructureForm = ({ setShowModal }) => {
  let [addFields, setAddFields] = useState(1);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();
  const queryClient = useQueryClient();
  const elements = [...Array(addFields).keys()];
  const onSubmit = async (data) => {
    const { product_name, product_description, ...ingredients } = data;
    const response = await createStructure({
      name: product_name,
      description: product_description,
      items: groupIngredients(ingredients)
    });
    await queryClient.invalidateQueries({ queryKey: ["cost_structures"] });
    if (response.status === 200) setShowModal(false);
  };
  const handleChangeInput = (e) => {
    let { name, value } = e.target;
    value = value.replace(/[^0-9.]/g, "");
    const parts = value.split(".");
    if (parts.length > 2) {
      value = parts[0] + "." + parts.slice(1).join("");
    }
    setValue(name, value);
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      autoComplete: "off",
      onSubmit: handleSubmit(onSubmit),
      className: "[&_input]:font-light [&_input]:border-gray-800 [&_input]:outline-0 [&_input]:p-2 [&_input]:text-sm\r\n      [&_>*]:not-first:border-2 [&_>*]:border-gray-800 [&_>*]:not-first:border-t-0 grid grid-cols-1",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col mb-4 gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-teal-400 text-sm font-bold", children: "Nombre del Producto" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              ...register("product_name", { required: "Campo Requerido" }),
              className: "border-2 border-gray-800 hover:bg-gray-800 -mt-4"
            }
          ),
          errors.product_name && /* @__PURE__ */ jsx(InputError, { error: errors.product_name.message }),
          /* @__PURE__ */ jsx("span", { className: "text-teal-400 text-sm font-bold", children: "Descripcion" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              ...register("product_description", { required: "Campo Requerido" }),
              className: "border-2 border-gray-800 hover:bg-gray-800 -mt-4"
            }
          ),
          errors.product_description && /* @__PURE__ */ jsx(InputError, { error: errors.product_description.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 !border-t-2 [&_>*]:py-2 [&_>*]:not-last:border-r [&_>*]:border-gray-800 [&_>*]:bg-gray-900 text-teal-400 text-center text-sm font-bold w-full", children: [
          /* @__PURE__ */ jsx("h1", { children: "Ingrediente" }),
          /* @__PURE__ */ jsx("h1", { children: "Cantidad" }),
          /* @__PURE__ */ jsx("h1", { children: "Precio" })
        ] }),
        elements.map((e) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "grid grid-cols-3 [&_input]:not-last:border-r [&_input:hover]:bg-gray-800 [&_input]:text-center",
            children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  ...register(`ingredient${e + 1}`),
                  placeholder: "nombre"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "quantity",
                  ...register(`ingredient${e + 1}_quantity`),
                  placeholder: "0",
                  onChange: handleChangeInput
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "price",
                  ...register(`ingredient${e + 1}_price`),
                  placeholder: "0",
                  onChange: handleChangeInput
                }
              )
            ]
          },
          e
        )),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center mt-4 mx-auto w-[90%] !border-0 gap-4 ", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              title: "Crear",
              className: "w-2/3 !h-auto",
              submit: true,
              icon: /* @__PURE__ */ jsx(CirclePlus, {})
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 w-max justify-center", children: [
            /* @__PURE__ */ jsx("h1", { className: "w-full text-center text-sm", children: "Ingredientes:" }),
            /* @__PURE__ */ jsx(
              Button,
              {
                title: "",
                className: "w-max border-green-900 !text-green-900 hover:!bg-green-800 hover:!text-gray-950 !p-1",
                icon: /* @__PURE__ */ jsx(Plus, {}),
                onClick: () => setAddFields((prev) => prev + 1)
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                title: "",
                className: "w-max border-red-900 !text-red-900 hover:!bg-red-800 hover:!text-gray-950 !p-1",
                icon: /* @__PURE__ */ jsx(Minus, {}),
                onClick: () => setAddFields((prev) => prev > 1 ? prev - 1 : 1)
              }
            )
          ] })
        ] })
      ]
    }
  );
};

const Create = () => {
  const [showModal, setShowModal] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "text-sm flex gap-2 items-center cursor-pointer select-none text-teal-400 hover:text-teal-600",
        onClick: () => setShowModal(true),
        children: [
          "Crear",
          /* @__PURE__ */ jsx(CirclePlus, { size: 28 })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      Modal,
      {
        showModal,
        setShowModal,
        title: "Crear estructura de costos",
        children: /* @__PURE__ */ jsx(ReactQueryProvider, { children: /* @__PURE__ */ jsx(CreateCostStructureForm, { setShowModal }) })
      }
    )
  ] });
};

const $$EstructuraDeCostos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Estructura de costos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Estructura de costos", "iconName": "clipboard" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Create", Create, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Projects/managementApp/client/src/components/React/CostStructure/UI/Create", "client:component-export": "default" })} ` })} ${maybeRenderHead()}<div class="p-6"> ${renderComponent($$result2, "CostStructure", CostStructure, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Projects/managementApp/client/src/components/React/CostStructure/CostStructure", "client:component-export": "default" })} </div> ` })}`;
}, "D:/Projects/managementApp/client/src/pages/EstructuraDeCostos.astro", void 0);

const $$file = "D:/Projects/managementApp/client/src/pages/EstructuraDeCostos.astro";
const $$url = "/EstructuraDeCostos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EstructuraDeCostos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
