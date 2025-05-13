import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Loader from "../UI/Loader";
import CostCard from "./UI/CostCard";
import { Ban } from "lucide-react";
import Modal from "../UI/Modal";
import ReactQueryProvider from "../ReactQueryProvider";
import EditForm from "./UI/EditForm";
import { getAll } from "../../../API/costStructure";

const GetAll = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [showModal, setShowModal] = useState(false);
  // Prevent hydration mismatch by delaying render until client-side hydration
  const [isClient, setIsClient] = useState(false);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["cost_structures"],
    queryFn: () => getAll(),
    staleTime: 5 * 60 * 1000, // 5 minutes: Data is considered "fresh" for this period
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  //Refetch the data when it changes
  useEffect(() => {
    refetch();
  }, [refetch]);

  if (!isClient) {
    // Render nothing on the server to avoid mismatch
    return null;
  }

  if (isLoading) return <Loader />;
  if (error) return <div>Error</div>;

  return (
    <>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {data?.map((item) => (
            <CostCard
              data={item}
              key={item.id}
              setSelectedElement={setSelectedElement}
              setShowModal={setShowModal}
            />
          ))}
        </div>
      ) : (
        <h1 className="flex justify-center items-center gap-4 text-2xl text-gray-600">
          <Ban className="text-red-900" size={32} />
          No hay datos para mostrar...
        </h1>
      )}

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title={selectedElement?.name}
      >
        <ReactQueryProvider>
          <EditForm data={selectedElement} setShowModal={setShowModal} />
        </ReactQueryProvider>
      </Modal>
    </>
  );
};

export default GetAll;
