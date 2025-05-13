import Button from "./Button";
import Modal from "./Modal";

const AcceptPrompt = ({
  setShowModal,
  showModal,
  handlePrompt,
  title = "Accept prompt",
}) => {
  return (
    <Modal
      setShowModal={setShowModal}
      showModal={showModal}
      title={title}
      className={"!z-[100]"}
    >
      <div className="flex justify-center items-center gap-5 [&_>*]:!w-[20%] [&_>*]:!p-5">
        <Button
          title="SI"
          onClick={() => {
            handlePrompt();
            setShowModal(false);
          }}
          className="border-green-900 !text-green-600 hover:!bg-green-800 hover:!text-green-300"
        />
        <Button
          title="NO"
          onClick={() => {
            setShowModal(false);
          }}
          className="border-red-900 !text-red-600 hover:!bg-red-800 hover:!text-red-300"
        />
      </div>
    </Modal>
  );
};

export default AcceptPrompt;
