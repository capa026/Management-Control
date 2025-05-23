import { Icon } from "@iconify-icon/react";

const PAYMENT_STATUSES = {
  UNPAID: { style: "text-yellow-900 bg-yellow-100", text: "CxC" },
  PAID: { style: "text-green-900 bg-green-100", text: "Pagada" },
};

const ThWithIcon = ({ icon, title, onClick }) => {
  return (
    <th>
      <div className="flex justify-center items-center gap-1">
        {title}
        <div
          onClick={onClick}
          className="text-white cursor-pointer hover:text-gray-400 active:text-gray-400 flex"
        >
          <Icon icon={icon} width={20} />
        </div>
      </div>
    </th>
  );
};

const InvoicesTable = ({ data }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-800 max-w-[1200px] mx-auto text-xs bg-gray-900/30">
      <table className="min-w-[500px] w-full  divide-y divide-gray-800 text-center">
        <thead className="sticky top-0 z-10 bg-gray-900">
          <tr className="[&_th]:py-2 [&_th]:text-teal-400 [&_th]:font-medium ">
            <th>FACTURA</th>
            <th>CLIENTE</th>
            <ThWithIcon title="MONTO" icon="mynaui:filter" />
            <ThWithIcon title="FECHA" icon="mynaui:calendar" />
            <th>ESTADO</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800 [&_>*]:cursor-pointer [&_>*:hover]:bg-gray-800 [&_>*:active]:bg-gray-800">
          {data.map((invoice) => (
            <tr key={invoice.id} className="[&_td]:py-4 text-gray-400">
              <td className="font-bold !text-white">#-{invoice.id}</td>
              <td>{invoice.client || "-"}</td>
              <td>{invoice.total_price.toFixed(2)} $</td>
              <td>{invoice.date}</td>
              <td>
                <span
                  className={`rounded-lg px-2 py-1 ${
                    PAYMENT_STATUSES[invoice.status].style
                  }`}
                >
                  {PAYMENT_STATUSES[invoice.status].text}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default InvoicesTable;
