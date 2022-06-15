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

const WhoComment = ({ backToNewPost, closeModal }) => {
  const [selectedValue, setSelectedValue] = useState("anyone");
  const radio1Ref = useRef(null);
  const radio2Ref = useRef(null);
  const radio3Ref = useRef(null);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const handleCloseModal = () => {
    closeModal();
  };
  const handleChangeRadio1Ref = () => {
    if (radio1Ref.current !== null) {
      radio1Ref.current.click();
    }
  };
  const handleChangeRadio2Ref = () => {
    if (radio2Ref.current !== null) {
      radio2Ref.current.click();
    }
  };
  const handleChangeRadio3Ref = () => {
    if (radio3Ref.current !== null) {
      radio3Ref.current.click();
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
                inputRef={radio1Ref}
                checked={selectedValue === "anyone"}
                onChange={handleChange}
                value="anyone"
                name="anyone-radio"
                size="medium"
                color="success"
              />
            }
          >
            <ListItemButton disableRipple onClick={handleChangeRadio1Ref}>
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
                inputRef={radio2Ref}
                checked={selectedValue === "conections_only"}
                onChange={handleChange}
                value="conections_only"
                name="conections_only-radio"
                size="medium"
                color="success"
              />
            }
          >
            <ListItemButton disableRipple onClick={handleChangeRadio2Ref}>
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
                inputRef={radio3Ref}
                checked={selectedValue === "no_one"}
                onChange={handleChange}
                value="no_one"
                name="no_one-radio"
                size="medium"
                color="success"
              />
            }
          >
            <ListItemButton disableRipple onClick={handleChangeRadio3Ref}>
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
          onClick={() => console.log("sfjkldfjskdjf")}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default WhoComment;
