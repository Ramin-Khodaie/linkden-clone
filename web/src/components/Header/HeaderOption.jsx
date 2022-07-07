import { Avatar } from "@mui/material";
import "./HeaderOption.css";
import {useMediaQuery} from '@mui/material'
import { useDispatch } from "react-redux";
import { toggleDropdown } from "../../features/dropdown/dropdownSlice";
import { logout } from "../../features/user/userSlice";

const HeaderOption = ({ Icon, title, user, handleClick}) => {
 

  const disableAvatar = useMediaQuery('(max-width:600px)')
 
  return (
    <div className="headerOption" onClick={handleClick}>
      {Icon && <Icon className="headerOption__icon" />}
      
      {user &&  (
        <Avatar
         
          className="headerOption__icon" 
          style={{display:disableAvatar ? "none" : ""}}   
          src={user?.photoUrl}
        >
          {user?.email[0]}
        </Avatar>
      )}

      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
