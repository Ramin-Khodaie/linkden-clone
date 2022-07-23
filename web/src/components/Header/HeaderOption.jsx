import { Avatar } from "@mui/material";
import "./HeaderOption.css";
import { useMediaQuery } from "@mui/material";


const HeaderOption = ({ Icon, title, user, handleClick, ExtraIcon }) => {
  const disableAvatar = useMediaQuery("(max-width:600px)");

  return (
    <div className="headerOption" onClick={handleClick}>
      {Icon && <Icon className="headerOption__icon" />}

      {user && (
        <Avatar
          className="headerOption__icon"
          style={{ display: disableAvatar ? "none" : "" }}
          src={user?.photoUrl}
        >
          {user?.email[0]}
        </Avatar>
      )}
      <div style={{ display: "flex", alignItems:"center", height:"15px"}}>
        <h3 className="headerOption__title">{title}</h3>
        {ExtraIcon && <ExtraIcon className="extraIcon"/>}
      </div>

    </div>
  );
};

export default HeaderOption;
