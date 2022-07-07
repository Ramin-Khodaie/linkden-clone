import "./Backdrop.css";

const Backdrop = ({ showBackDrop, closeBackDrop }) => {
  if (showBackDrop) {
    return <div className="backdrop" onClick={closeBackDrop}></div>;
  } else {
    return null;
  }
};

export default Backdrop;
