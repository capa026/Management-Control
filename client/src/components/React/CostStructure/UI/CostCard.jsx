import { useState } from "react";

const CostCard = ({ data, setSelectedElement, setShowModal }) => {
  const { name, description, items } = data;
  const totalPrice = items.reduce(
    (acc, itm) => acc + (itm.quantity / 1000) * itm.price,
    0
  );

  return (
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
  );
};

export default CostCard;
