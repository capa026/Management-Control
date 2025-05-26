const PAYMENT_STATUSES = {
  UNPAID: { style: "text-yellow-900 bg-yellow-100", text: "Cuenta por cobrar" },
  PAID: { style: "text-green-900 bg-green-100", text: "Pagada" },
};

const InvoiceEdit = ({ data, setShowModal }) => {
  return (
    <div className="min-w-[500px] border rounded-lg bg-gray-800/30  border-gray-800 p-2">
      <div className="flex flex-col overflow-x-auto space-y-5">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-lg">Comprobante</h1>
            <h3 className="text-gray-400">#{data.id}</h3>
          </div>
          <div className="text-right">
            <h1 className="font-bold text-lg">Nombre del Negocio</h1>
            <h3 className="text-gray-400">
              456 Innovation Drive, Silicon Valley
            </h3>
            <h3 className="text-gray-400">0424 - 5556666</h3>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <h1>
              <span className="font-bold">Cliente: </span>
              <span className="text-gray-400">
                {data.client ? data.client : "-"}
              </span>
            </h1>
            <h1>
              <span className="font-bold">Estado: </span>
              <span className="text-gray-400">
                {PAYMENT_STATUSES[data.status].text}
              </span>
            </h1>
          </div>
          <h1>
            <span className="font-bold">Fecha: </span>
            <span className="text-gray-400">{data.date}</span>
          </h1>
        </div>

        <table className="w-full text-left">
          <thead className="bg-gray-900">
            <tr className="[&_>*]:py-3 [&_>*]:px-2">
              <th>Item</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.items.items.map((item, i) => (
              <tr key={i} className="[&_>*]:py-1 [&_>*]:px-2">
                <td>{item.name}</td>
                <td className="text-gray-400">{item.qty}</td>
                <td className="text-gray-400">{item.price}$</td>
                <td className="text-gray-400">{item.price * item.qty}$</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h1 className="text-right text-xl">
          <span className="font-bold">Total: </span>
          <span className="text-gray-400">{data.total_price}$</span>
        </h1>

        <div>
          <h1 className="font-bold">Notas: </h1>
          <h1 className="text-gray-400">{data.notes}</h1>
        </div>
      </div>
    </div>
  );
};
export default InvoiceEdit;
