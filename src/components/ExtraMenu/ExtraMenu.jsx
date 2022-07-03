import { Avatar } from "@mui/material";
import HeaderOption from "../Header/HeaderOption";
import LogoutIcon from "@mui/icons-material/Logout";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "./ExtraMenu.css";
import { useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";
const ExtraMenu = ({ photoUrl, email }) => {

    const dispatch = useDispatch();
    const handleLogout = (e) => {
      dispatch(logout());
    };
  return (
    <div className="extramenu">
      <Avatar className="avatar" src={photoUrl}>
        {email[0]}
      </Avatar>
      <div style={{ margin: 0, display:"flex" }}>
        <HeaderOption Icon={BusinessCenterIcon} />
        <HeaderOption Icon={LogoutIcon} handleClick={handleLogout}/>
      </div>
    </div>
  );
};

export default ExtraMenu;
