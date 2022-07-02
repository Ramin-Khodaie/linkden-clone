import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { IconButton } from "@mui/material";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <React.Fragment>
      {user && (
        <div className="header">
          <div className="header__left">
            <img src="./linkdenIcon.svg" />

            <div className="header__search">
              <SearchIcon />
              <input type="text" />
            </div>
          </div>
          <div className="header__right">
          <HeaderOption Icon={SearchIcon} />
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Job" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notification" />
            {user && <HeaderOption user={user} title="Me" />}
           
          </div>
          <IconButton className="header__bar" >
              <MenuIcon className="header__bar-icon"/>
            </IconButton>
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;
