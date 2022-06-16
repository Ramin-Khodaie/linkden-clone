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
import { useRef } from "react";
import { useState } from "react";
import './WhoSeePost.css'

const WhoSeePost = ({ backToNewPost, closeModel }) => {
  const [selectedValue, setSelectedValue] = useState("anyone");
  
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
  const handleChangeAnyonRef = () => {
    if (anyoneRef.current !== null) {
      anyoneRef.current.click();
    }
  };
  const handleChangeAnyoneTwitterRef = () => {
    if (anyoneplustwitterRef.current !== null) {
      anyoneplustwitterRef.current.click();
    }
  };
  const hadleChangeConnections = () =>{
    if(connectionsRef.current !== null){
        connectionsRef.current.click()
    }
  }
  const handleChangeGroup = () =>{
    if(groupRef.current !== null){
        groupRef.current.click()
    }
  }
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
                name="anyone-radio"
                size="medium"
                color="success"
              />
            }
          >
            <ListItemButton disableRipple onClick={handleChangeAnyonRef}>
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
                name="anyonetwitter-radio"
                size="medium"
                color="success"
              />
            }
          >
            <ListItemButton
              disableRipple
              onClick={handleChangeAnyoneTwitterRef}
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
                name="connections-radio"
                size="medium"
                color="success"
              />
            }
          >
            <ListItemButton
              disableRipple
              onClick={hadleChangeConnections}
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
                checked={selectedValue === "group"}
                onChange={handleChange}
                value="group"
                name="group-radio"
                size="medium"
                color="success"
              />
            }
          >
            <ListItemButton
              disableRipple
              onClick={handleChangeGroup}
            >
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText
                primary="Group members"
                font
                secondary="Select a group you're in"
              />
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
            disabled={selectedValue === "anyone"}
            className={`WhoSee__footer-savebtn ${
              selectedValue === "anyone"
                ? "WhoSee__footer-savebtn-disable"
                : ""
            }`}
          onClick={() => console.log("sfjkldfjskdjf")}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default WhoSeePost;