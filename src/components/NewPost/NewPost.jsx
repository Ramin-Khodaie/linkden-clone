import { Avatar, Button, IconButton, TextField } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CelebrationIcon from "@mui/icons-material/Celebration";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PollIcon from "@mui/icons-material/Poll";
import PublicIcon from "@mui/icons-material/Public";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { forwardRef, useEffect, useState } from "react";
import CustomIconButton from "../CustomIconButton/CustomIconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./NewPost.css";
import { publishPost } from "../../services/post/post";
import { serverTimestamp } from "firebase/firestore/lite";
import useNotify from "../../common/notify/useNotify";

const NewPost = ({
  user,
  onChangeComponent,
  closeModal,
  newpost,
  onChange,
}) => {
  const [showHashtag, setShowHashtag] = useState(false);
  const notify = useNotify();
  const renderComponent = (componenName) => {
    onChangeComponent(componenName);
  };

  useEffect(() => {
    console.log(22, "useeffect");
    setTimeout(() => {
      setShowHashtag(true);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    console.log(e)
    if (onChange) {
      onChange({...newpost, [e.target.name]: e.target.value});
    }
  };

  const handleChangeHashtag = (e) => {
    onChange({ ...newpost, [e.target.name]: newpost.body + e.target.value });
  };
  const handleSendPost = () => {
    const newPost = {
      post: { ...newpost },
      name: user.displayName,
      description: "front-end developer",
      photoUrl: user.photoUrl,
      likes: [],
      timestamp: serverTimestamp(),
    };
    publishPost(newPost).then((data) => {
      if (data) {
        notify("post added successfuly", "success");        
        onChange({...newpost, body: ""});
      }
    });
    closeModal();
  };
  return (
    <div className="newpost">
      <div className="newpost__header">
        <h4>Create a post</h4>
        <IconButton onClick={closeModal}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="newpost__body">
        <div className="newpost__creatorinfo">
          <Avatar src={user.photoUrl} className="newpost__avatar">
            {user.displayName[0]}
          </Avatar>
          <div className="newpost__creatorinfo-displayname">
            <p>{user.displayName}</p>
            <Button
              disableRipple
              size="small"
              className="WhoSee-btn"
              onClick={() => renderComponent("WhoCanSee")}
              startIcon={<PublicIcon />}
              endIcon={<ArrowDropDownIcon />}
            >
              {newpost.whoSee}
            </Button>
          </div>
        </div>
        <TextField
          type="text"
          variant="standard"
          InputProps={{
            disableUnderline: true,
            className: "newpost__body-input",
            placeholder: "What do you want to talk about?",
          }}
          className="newpost__body-textfield"
          name="body"
          value={newpost.body}
          onChange={handleChange}
        ></TextField>
        <Button
          variant="outlined"
          className="newpost__body-hashtag"
          value="#"
          name="body"
          onClick={handleChangeHashtag}
          style={{
            opacity: `${!showHashtag ? "0" : "1"}`,
            visibility: `${!showHashtag ? "hidden" : "visible"}`,
          }}
        >
          Add hahstag
        </Button>
      </div>
      <div className="newpost__footer">
        <div className="newpost__footer-icons">
          <CustomIconButton
            Icon={InsertPhotoIcon}
            size="small"
            tooltip="Add a photo"
          />
          <CustomIconButton
            Icon={YouTubeIcon}
            size="small"
            tooltip="Add a video"
          />
          <CustomIconButton
            Icon={AssignmentIcon}
            size="small"
            tooltip="Add a document"
          />
          <CustomIconButton
            Icon={BusinessCenterIcon}
            size="small"
            tooltip="Share that you're hiring"
          />
          <CustomIconButton
            Icon={CelebrationIcon}
            size="small"
            tooltip="Celebrate an occasion"
          />
          <CustomIconButton
            Icon={PollIcon}
            size="small"
            tooltip="Create a pool"
          />
          <CustomIconButton
            Icon={MoreHorizIcon}
            size="small"
            tooltip="Add to your post"
            handleClick={() => renderComponent("AddtoNewPost")}
          />
        </div>
        <div className="newpost__footer-btns">
          <Button
            startIcon={
              <CommentOutlinedIcon size="small" style={{ padding: "3px" }} />
            }
            className="newpost__footer-anybtn"
            onClick={() => renderComponent("WhoCanComment")}
          >
            Anyone
          </Button>
          <Button
            disabled={!newpost.body}
            className={`newpost__footer-postbtn ${
              !newpost.body ? "newpost__footer-postbtn-disable" : ""
            }`}
            onClick={handleSendPost}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};
export default NewPost;
