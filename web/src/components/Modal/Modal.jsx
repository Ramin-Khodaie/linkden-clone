import Backdrop from "../Backdrop/Backdrop";
import './Modal.css'
const Modal = (props) => {
  return (
    <>
      <Backdrop closeBackDrop={props.closeDrop} showBackDrop={props.showDrop} />
      <div className="Modal">{props.component}</div>
    </>
  );
};

export default Modal;
