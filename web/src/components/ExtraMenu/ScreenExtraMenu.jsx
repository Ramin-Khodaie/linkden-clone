import { Avatar, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/user/userSlice";
import "./ScreenExtraMenu.css";

const ScreenExtraMenu = () => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(logout());
  };
  const { user } = useSelector((state) => state.user);
  
  return (
    <div className="screen-extramenu">
      <div className="screen-header">
        {user && (
          <Avatar className="avatar" src={user?.photoUrl}>
            {user?.email[0]}
          </Avatar>
        )}
        <div className="header-title">
          <Typography variant="h6">{user?.displayName}</Typography>
          <Typography variant="body2">front-end developer</Typography>
        </div>
        <Button className="header-button" variant="outlined">
          view profile
        </Button>
      </div>
      <div className="screen-body">
        <Typography variant="h6">Account</Typography>
        <Typography
          variant="body2"
          color="gray"
          className="screen-body-options"
        >
          Settings and Privacy
        </Typography>
        <Typography
          variant="body2"
          color="gray"
          className="screen-body-options"
        >
          Help
        </Typography>
        <Typography variant="body" color="gray" className="screen-body-options">
          Languages
        </Typography>
      </div>
      <div className="screen-body">
        <Typography variant="h6">Manage</Typography>
        <Typography
          variant="body2"
          color="gray"
          className="screen-body-options"
        >
          post and Activity
        </Typography>
        <Typography
          variant="body2"
          color="gray"
          className="screen-body-options"
        >
          Jobs Posting Account
        </Typography>
      </div>
      <div className="screen-footer">
        <Button variant="outlined" onClick={handleSignOut}>
          <Typography
            variant="body2"
            color="gray"
            className="screen-body-options"
          >
            Sign out
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default ScreenExtraMenu;
