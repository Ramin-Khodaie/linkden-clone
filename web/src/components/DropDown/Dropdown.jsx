import { useSelector } from "react-redux";
import "./Dropdown.css";

const Dropdown = ({ children }) => {
  const { miniDropdown, extraMenu } = useSelector((state) => state.dropdown);
  return (
    <div className={`dropdown ${miniDropdown || extraMenu ? "visibale" : ""} ${extraMenu ? "extramenudropdown" : ""}`}>
      {children}
    </div>
  );
};

export default Dropdown;
