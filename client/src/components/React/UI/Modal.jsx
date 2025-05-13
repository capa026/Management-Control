import AnimateShow from "./AnimateShow";
import Window from "./Window";

const Modal = ({ showModal, setShowModal, children, title, className }) => {
  return (
    <AnimateShow
      condition={showModal}
      className={`fixed inset-0 bg-black/20 z-50 flex items-center justify-center backdrop-blur-sm ${className}`}
    >
      <Window title={title} close={setShowModal}>
        {children}
      </Window>
    </AnimateShow>
  );
};

export default Modal;
