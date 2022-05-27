import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import "./Header.css";
import HeaderOption from "./HeaderOption";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="./linkdenIcon.svg" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Job" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQG4HE9lYFeN1w/profile-displayphoto-shrink_100_100/0/1587376025161?e=1658966400&v=beta&t=L-QmqDv75xTnMlvya3r81cLxT502oZ29lIWyaKbME7I"
          title="Me"
        />
      </div>
    </div>
  );
};

export default Header;
