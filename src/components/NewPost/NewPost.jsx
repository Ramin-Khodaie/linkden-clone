import { Avatar, Button, IconButton, Typography } from "@mui/material";
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

import "./NewPost.css";

const NewPost = forwardRef(({ user, onChangeComponent }, ref) => {
  const newPost = {
    body: "",
    whoSee: "anyone",
    hashtag: [],
    photo: [],
    video: "",
    doc: "",
    celebrate: { title: "", photo: "" },
  };
  console.log(5544, " alsoo here");
  const [state, setState] = useState(newPost);
  const [showHashtag, setShowHashtag] = useState(false);

  const renderComponent = (componenName) => {
    console.log(5544, componenName);
    onChangeComponent(componenName);
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };
  useEffect(() => {
    setTimeout(() => {
      setShowHashtag(true);
    }, 1000);
  }, []);

  return (
    <div className="newpost" ref={ref}>
      <div className="newpost__header">
        <h4>Create a post</h4>
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
              {state.whoSee}
            </Button>
          </div>
        </div>
      </div>
      <div className="newpost__body">
        <input
          placeholder="What do you want to talk about?"
          type="text"
          name="body"
          value={state.body}
          onChange={handleChangeInput}
        />
        {showHashtag && (
          <Button variant="outlined" className="newpost__body-hashtag">
            Add hahstag
          </Button>
        )}
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
            disabled={!state.body}
            className={`newpost__footer-postbtn ${
              !state.body ? "newpost__footer-postbtn-disable" : ""
            }`}
            onClick={() => console.log("sfjkldfjskdjf")}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
});
export default NewPost;
