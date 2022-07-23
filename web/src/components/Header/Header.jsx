import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import { useSelector, useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { IconButton, useMediaQuery } from "@mui/material";
import MobileExtraMenu from "../ExtraMenu/MobileExtraMenu";
import Dropdown from "../DropDown/Dropdown";
import ScreenExtraMenu from "../ExtraMenu/ScreenExtraMenu";
import {
  toggleDropdown,
  toggleExtraMenuDropdown,
} from "../../features/dropdown/dropdownSlice";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const { user } = useSelector((state) => state.user);

  const disableSearch = useMediaQuery("(max-width:600px)");
  const { extraMenu } = useSelector((state) => state.dropdown);

  const dispatch = useDispatch();

  const handleToggledropdown = () => {
    dispatch(toggleDropdown());
  };

  const handleToggleExtraMenudropdown = () => {
    dispatch(toggleExtraMenuDropdown());
  };

  console.log(extraMenu)
  return (
    <React.Fragment>
      {user && (
        <div className="header">
          <div className="header__left">
            <img src="./linkdenIcon.svg" alt="linkedin" />

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
            {user && (
              <HeaderOption
                user={user}
                title="Me"
                ExtraIcon={ArrowDropDownIcon}
                handleClick={() => handleToggleExtraMenudropdown()}
              />
            )}
          </div>
          {extraMenu && (
            <Dropdown>
              <ScreenExtraMenu />
            </Dropdown>
          )}
          <div className="header__bar">
            <IconButton onClick={() => handleToggledropdown()}>
              <MenuIcon className="header__bar-icon" />
            </IconButton>

            <Dropdown>
              <MobileExtraMenu email={user.email} photoUrl={user.photoUrl} />
            </Dropdown>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;
