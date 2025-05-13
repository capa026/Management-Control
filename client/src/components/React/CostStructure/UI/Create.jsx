import { CirclePlus } from "lucide-react";
import { useState } from "react";
import Modal from "../../UI/Modal";
import CreateCostStructureForm from "./CreateCostStructureForm";
import ReactQueryProvider from "../../ReactQueryProvider";

const Create = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative">
      <div
        className="text-sm flex gap-2 items-center cursor-pointer select-none text-teal-400 hover:text-teal-600"
        onClick={() => setShowModal(true)}
      >
        Crear
        <CirclePlus size={28} />
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Crear estructura de costos"
      >
        <ReactQueryProvider>
          <CreateCostStructureForm setShowModal={setShowModal} />
        </ReactQueryProvider>
      </Modal>
    </div>
  );
};

export default Create;
