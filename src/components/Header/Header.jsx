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
import { IconButton, useMediaQuery } from "@mui/material";
import ExtraMenu from "../ExtraMenu/ExtraMenu";
import Dropdown from "../DropDown/Dropdown";
import { useState } from "react";

const Header = () => {
  const { user } = useSelector((state) => state.user);

  const disableSearch = useMediaQuery("(max-width:600px)");
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropDown = () => {
    setShowDropdown(!showDropdown);
  };

  console.log(showDropdown)
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
            {disableSearch && <HeaderOption Icon={SearchIcon} />}
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Job" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notification" />
            {user && <HeaderOption user={user} title="Me" />}
          </div>
          <div className="header__bar">
            <IconButton onClick={toggleDropDown}>
              <MenuIcon className="header__bar-icon" />
            </IconButton>
            {showDropdown && (
              <Dropdown>
                <ExtraMenu email={user.email} photoUrl={user.photoUrl}/>
              </Dropdown>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;
