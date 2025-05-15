import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const CostCard = ({ data, setSelectedElement, setShowModal }) => {
  const { name, description, items } = data;
  const totalPrice = items.reduce(
    (acc, itm) => acc + (itm.quantity / 1000) * itm.price,
    0
  );

  return (
    <div
      className="flex flex-col border border-gray-700 rounded-xl w-64 h-80 bg-gray-800 shadow-md
  hover:bg-gray-700/80 transition-colors duration-200 cursor-pointer"
      onClick={() => {
        setSelectedElement(data);
        setShowModal(true);
      }}
    >
      <div className="bg-gray-900 px-4 py-3 rounded-t-xl border-b border-gray-700">
        <h1 className="text-white font-medium truncate">{name}</h1>
      </div>

      <div className="px-3 py-2 flex-1 overflow-y-auto">
        {items.length > 0 ? (
          <>
            <div className="grid grid-cols-3 gap-x-2 mb-1 text-teal-400 text-xs font-medium">
              <span>Ingrediente</span>
              <span className="text-right">Cantidad</span>
              <span className="text-right">Precio</span>
            </div>

            <div className="space-y-1">
              {items.map((itm, i) => (
                <div key={i} className="grid grid-cols-3 gap-x-2 text-sm">
                  <span className="text-gray-200 truncate">{itm.name}</span>
                  <span className="text-gray-400 text-right">
                    {itm.quantity}
                  </span>
                  <span className="text-emerald-400 text-right">
                    {itm.price}$
                  </span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col text-sm text-gray-700 h-full text-center">
            <Icon
              icon="tabler:file-x"
              className="h-[90%] aspect-square m-auto"
            />
            No hay descripcion...
          </div>
        )}
      </div>

      <div className="border-t border-gray-600">
        <div className="flex justify-between items-center bg-gray-900 px-3 py-1">
          <span className="text-white text-sm">Costo total:</span>
          <span className="text-teal-300 font-medium">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <div
          className="text-xs text-gray-400 truncate px-4 py-1 border-t border-gray-600"
          title={description}
        >
          {description || (
            <span className="text-gray-500">Sin descripcion...</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CostCard;

/*
<div
      className="flex flex-col border border-gray-800 rounded-lg w-56 shadow-md bg-linear-to-br from-gray-800 to-gray-900
      hover:from-gray-700 hover:to-gray-800 transition-colors duration-300 aspect-square cursor-pointer
      active:from-gray-700 active:to-gray-800
    "
      onClick={() => {
        setSelectedElement(data);
        setShowModal(true);
      }}
    >
      <h1 className="bg-teal-600 px-2 rounded-tl-lg rounded-tr-lg font-medium text-white">
        {name}
      </h1>
      <div className="grid mt-2 grid-cols-3 text-center [&_>*]:not-last:border-r border-t border-t-gray-800 [&_>*]:border-b [&_>*]:border-gray-800 text-teal-500 ">
        <h1>Nombre</h1>
        <h1>Cantidad</h1>
        <h1>Precio</h1>
      </div>
      {items.map((itm, i) => (
        <div
          key={i}
          className="grid grid-cols-3 text-center [&_>*]:not-last:border-r [&_>*]:not-last:border-gray-800 border-b text-gray-400 border-gray-800 font-extralight text-sm
            [&_>*]:truncate [&_>*]:px-1
          "
        >
          <h1 className="!text-white">{itm.name}</h1>
          <h1>{itm.quantity}</h1>
          <h1>{itm.price}$</h1>
        </div>
      ))}
      <div className="mb-2 px-2 flex justify-between border-b border-gray-800">
        <h1 className="border-r border-gray-800 pr-2 text-gray-400 font">
          Costo Total
        </h1>
        <h2 className="text-center flex-1 text-teal-500">
          {totalPrice.toFixed(2)}$
        </h2>
      </div>
      <div className="mt-auto px-2">
        <h1 className="text-white">Descripcion:</h1>
        <h2 className="p-1 text-gray-500 text-sm truncate ">{description}</h2>
      </div>
    </div>
*/
