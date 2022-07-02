import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PublicIcon from "@mui/icons-material/Public";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React, { useRef } from "react";
import { useState } from "react";
import "./WhoSeePost.css";

const WhoSeePost = ({
  backToNewPost,
  closeModel,
  newpost,
  onChange,
  componentChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(newpost.whoSee);
  const [state, setState] = useState(
    newpost.whoSee ? newpost.whoSee : "anyone"
  );

  const anyoneRef = useRef(null);
  const anyoneplustwitterRef = useRef(null);
  const connectionsRef = useRef(null);
  const groupRef = useRef(null);

  const handleCloseModal = () => {
    closeModel();
  };
  const handleChange = (e) => {
    
    setSelectedValue(e.target.value);
    
  };

  const handleSave = (e) => {
    if (onChange) {
      onChange({ ...newpost, whoSee: selectedValue });
    }
  };

  console.log(newpost);

  const handleChangeRef = (ref) => {
    switch (ref) {
      case "anyone":
        if (anyoneRef.current !== null) {
          anyoneRef.current.click();
          // setState("anyone");
          if (onChange) {
            onChange({ ...newpost, whoSee: selectedValue });
          }
        }
        break;
      case "anyonetwitter":
        if (anyoneplustwitterRef.current !== null) {
          anyoneplustwitterRef.current.click();
          // setState("anyonetwitter");
          // if (onChange) {
          //   onChange({ ...newpost, whoSee: state });
          // }
        }
        break;
      case "connections":
        if (connectionsRef.current !== null) {
          connectionsRef.current.click();
          // setState("connections");
          // if (onChange) {
          //   onChange({ ...newpost, whoSee: state });
          // }
        }
        break;
      case "group":
        if (groupRef.current !== null) {
          groupRef.current.click();
          // setState("group");
          // if (onChange) {
          //   onChange({ ...newpost, whoSee: state });
          // }
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="WhoSee">
      <div className="WhoSee__header">
        <Typography variant="h6">Who can comment on your post ?</Typography>
        <IconButton onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="WhoSee__body">
        <List className="WhoSee__body-list" disablePadding>
          <ListItem
            disablePadding
            secondaryAction={
              <Radio
                inputRef={anyoneRef}
                checked={selectedValue === "anyone"}
                onChange={handleChange}
                value="anyone"
                name="whoSee"
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
                secondary="Anyone on or off linkden"
              />
            </ListItemButton>
          </ListItem>
        </List>
        <List className="WhoSee__body-list" disablePadding>
          <ListItem
            disablePadding
            secondaryAction={
              <Radio
                inputRef={anyoneplustwitterRef}
                checked={selectedValue === "anyonetwitter"}
                onChange={handleChange}
                value="anyonetwitter"
                name="whoSee"
                size="medium"
                color="success"
              />
            }
          >
            <ListItemButton
              disableRipple
              onClick={() => handleChangeRef("anyonetwitter")}
            >
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText
                primary="Anyone + twitter"
                font
                secondary="Anyone on or off linkden;post to twitter"
              />
            </ListItemButton>
          </ListItem>
        </List>
        <List className="WhoSee__body-list" disablePadding>
          <ListItem
            disablePadding
            secondaryAction={
              <Radio
                inputRef={connectionsRef}
                checked={selectedValue === "connections"}
                onChange={handleChange}
                value="connections"
                name="whoSee"
                size="medium"
                color="success"
              />
            }
          >
            <ListItemButton
              disableRipple
              onClick={() => handleChangeRef("connections")}
            >
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText
                primary="Connections only"
                font
                secondary="Connectons on linkden"
              />
            </ListItemButton>
          </ListItem>
        </List>
        <List className="WhoSee__body-list" disablePadding>
          <ListItem
            disablePadding
            secondaryAction={
              <Radio
                inputRef={groupRef}
                checked={
                  newpost.whoSee === "javascriptDevelopers" ||
                  newpost.whoSee === "frontendDevelopers"
                }
                onChange={handleChange}
                value="group"
                name="whoSee"
                size="medium"
                color="success"
              />
            }
          >
            <ListItemButton
              disableRipple
              onClick={() => componentChange("WhoCanSee-group")}
            >
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText
                style={{ maxWidth: "max-content" }}
                primary={`group members `}
                font
                secondary="Select a group you're in"
              />
              <KeyboardArrowRightIcon />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <div className="WhoSee__footer">
        <Button
          className="WhoSee__footer-btn"
          variant="outlined"
          onClick={backToNewPost}
        >
          Back
        </Button>
        <Button
          variant="contained"
          disabled={selectedValue === newpost.whoSee}
          className={`WhoSee__footer-savebtn ${
            selectedValue === newpost.whoSee
              ? "WhoSee__footer-savebtn-disable"
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

export default WhoSeePost;
