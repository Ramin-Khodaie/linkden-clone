import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";
import "./HeaderOption.css";

const HeaderOption = ({ Icon, title, user }) => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    dispatch(logout());
  };

  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}

      {user && (
        <Avatar
          onClick={handleLogout}
          className="headerOption__icon"
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
