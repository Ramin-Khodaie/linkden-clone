import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PublicIcon from "@mui/icons-material/Public";
import GroupIcon from "@mui/icons-material/Group";
import SpeakerNotesOffIcon from "@mui/icons-material/SpeakerNotesOff";

import "./WhoComment.css";
import { useRef, useState } from "react";

const WhoComment = ({ backToNewPost, closeModal, newpost, onChange }) => {
  const [selectedValue, setSelectedValue] = useState("anyone");
  const [state, setState] = useState(newpost.whoComment);

  const anyoneRef = useRef(null);
  const connectionRef = useRef(null);
  const nooneRef = useRef(null);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const handleCloseModal = () => {
    closeModal();
  };

  const handleSave = (e) => {
    if (onChange) {
      onChange({ ...newpost, whoComment: state });
    }
  };
  const handleChangeRef = (ref) => {
    switch (ref) {
      case "anyone":
        if (anyoneRef.current !== null) {
          anyoneRef.current.click();
          setState("anyone");
        }
        break;
      case "connection":
        if (connectionRef.current !== null) {
          connectionRef.current.click();
          setState("connections");
        }
        break;
      case "noOne":
        if (nooneRef.current !== null) {
          nooneRef.current.click();
          setState("noOne");
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="WhoComment">
      <div className="WhoComment__header">
        <Typography variant="h6">Who can comment on your post ?</Typography>
        <IconButton onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="WhoComment__body">
        <List className="WhoComment__body-list" disablePadding>
          <ListItem
            disablePadding
            secondaryAction={
              <Radio
                inputRef={anyoneRef}
                checked={selectedValue === "anyone"}
                onChange={handleChange}
                value="anyone"
                name="anyone-radio"
                size="medium"
                color="success"
              />
            }
          >
            <ListItemButton
              disableRipple
              onClick={() => handleChangeRef("anyone")}
            >
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText
                primary="Anyone"
                font
                secondary="Anyone can comment"
              />
            </ListItemButton>
          </ListItem>
        </List>
        <List disablePadding>
          <ListItem
            disablePadding
            secondaryAction={
              <Radio
                inputRef={connectionRef}
                checked={selectedValue === "conections_only"}
                onChange={handleChange}
                value="conections_only"
                name="conections_only-radio"
                size="medium"
                color="success"
              />
            }
          >
            <ListItemButton
              disableRipple
              onClick={() => handleChangeRef("connection")}
            >
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText
                primary="Connections only"
                font
                secondary="Connections who can view can also comment"
              />
            </ListItemButton>
          </ListItem>
        </List>
        <List disablePadding>
          <ListItem
            disablePadding
            secondaryAction={
              <Radio
                inputRef={nooneRef}
                checked={selectedValue === "no_one"}
                onChange={handleChange}
                value="no_one"
                name="no_one-radio"
                size="medium"
                color="success"
              />
            }
          >
            <ListItemButton
              disableRipple
              onClick={() => handleChangeRef("noOne")}
            >
              <ListItemIcon>
                <SpeakerNotesOffIcon />
              </ListItemIcon>
              <ListItemText
                primary="No one "
                font
                secondary="No one can comment"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <div className="WhoComment__footer">
        <Button
          className="WhoComment__footer-btn"
          variant="outlined"
          onClick={backToNewPost}
        >
          Back
        </Button>
        <Button
          variant="contained"
          disabled={selectedValue === "anyone"}
          className={`WhoComment__footer-savebtn ${
            selectedValue === "anyone"
              ? "WhoComment__footer-savebtn-disable"
              : ""
          }`}
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default WhoComment;
