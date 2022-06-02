import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ closeDrop, showDrop, children }) => {
  return (
    <>
      <Backdrop closeBackDrop={closeDrop} showBackDrop={showDrop} />
      <div>{children}</div>
    </>
  );
};

export default Modal;
