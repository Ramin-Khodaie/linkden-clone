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
import "./WhoCanSeeGroup.css";
import { useRef, useState } from "react";

const WhoCanSeeGroup = ({ closeModel, componentChange, onChange, newpost }) => {
  const [state, setState] = useState(newpost.whoSee);

  const [selectedValue, setSelectedValue] = useState(newpost.whoSee ? newpost.whoSee : "");
  const jsRef = useRef(null);
  const frontendDevelopersRef = useRef(null);
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSave = (e) => {
    if (onChange) {
      onChange({ ...newpost, whoSee: state });
    }
  };
  const handleChangeRef = (ref) => {
    switch (ref) {
      case "js":
        if (jsRef.current !== null) {
          jsRef.current.click();
          setState("javascriptDevelopers");
        }
        break;
      case "frontend":
        if (frontendDevelopersRef.current !== null) {
          frontendDevelopersRef.current.click();
          setState("frontendDevelopers");
        }
        break;

      default:
        break;
    }
  };
  return (
    <div className="WhoSeeGroup">
      <div className="WhoSeeGroup__header">
        <Typography variant="h6">Select a group</Typography>
        <IconButton onClick={closeModel}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="WhoSeeGroup__body">
        <List className="WhoSee__body-list" disablePadding>
          <ListItem
            disablePadding
            secondaryAction={
              <Radio
                inputRef={jsRef}
                checked={selectedValue === "javascriptDevelopers"}
                onChange={handleChange}
                value="javascriptDevelopers"
                name="whoSee"
                size="medium"
                color="success"
              />
            }
          >
            <ListItemButton
              disableRipple
              onClick={() => handleChangeRef("js")}
            >
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText primary="Javascript Devalopers" font />
            </ListItemButton>
          </ListItem>
        </List>
        <List className="WhoSee__body-list" disablePadding>
          <ListItem
            disablePadding
            secondaryAction={
              <Radio
                inputRef={frontendDevelopersRef}
                checked={selectedValue === "frontendDevelopers"}
                onChange={handleChange}
                value="frontendDevelopers"
                name="whoSee"
                size="medium"
                color="success"
              />
            }
          >
            <ListItemButton
              disableRipple
              onClick={() => handleChangeRef("frontend")}
            >
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText primary="FrontEnd Developers" font />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <div className="WhoSeeGroup__footer">
        <Button
          className="WhoSee__footer-btn"
          variant="outlined"
          onClick={() => componentChange("WhoCanSee")}
        >
          Back
        </Button>
        <Button
          variant="contained"
          disabled={selectedValue === "anyone"}
          className={`WhoSeeGroup__footer-savebtn ${
            selectedValue === "anyone"
              ? "WhoSeeGroup__footer-savebtn-disable"
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

export default WhoCanSeeGroup;
