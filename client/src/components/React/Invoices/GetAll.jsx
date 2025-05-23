import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Loader from "../UI/Loader";
import { getAll } from "../../../API/invoices";
import { Ban } from "lucide-react";
import InvoicesTable from "./UI/InvoicesTable";

const GetAll = () => {
  const [isClient, setIsClient] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["invoices"],
    queryFn: getAll,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loader />;
  }

  if (isLoading) return <Loader />;
  if (error) return <div>Error</div>;

  return (
    <>
      {data?.length > 0 ? (
        <InvoicesTable data={data} />
      ) : (
        <h1 className="flex justify-center items-center gap-4 text-2xl text-gray-600">
          <Ban className="text-red-900" size={32} />
          No hay datos para mostrar...
        </h1>
      )}
    </>
  );
};
export default GetAll;
