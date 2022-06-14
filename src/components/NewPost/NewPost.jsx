import { Avatar, Button, IconButton, Typography } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CelebrationIcon from "@mui/icons-material/Celebration";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PollIcon from "@mui/icons-material/Poll";
import { forwardRef, useState } from "react";
import CustomIconButton from "../CustomIconButton/CustomIconButton";

import "./NewPost.css";

const NewPost = forwardRef(({ user, onChangeComponent }, ref) => {
  const newPost = {
    body: "",
  };
  const [state, setState] = useState(newPost);
  const showAddtoPost = () => {
    onChangeComponent();
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };
  console.log(666, state);
  return (
    <div className="newpost" ref={ref}>
      <div className="newpost__header">
        <h4>Create a post</h4>
        <div className="newpost__creatorinfo">
          <Avatar src={user.photoUrl} className="newpost__avatar">
            {user.displayName[0]}
          </Avatar>
          <p>{user.displayName}</p>
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
        <Typography variant="body1" className="newpost__body-hashtag">
          Add hahstag
        </Typography>
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
            handleClick={showAddtoPost}
          />
        </div>
        <div className="newpost__footer-btns">
          <Button
            startIcon={
              <CommentOutlinedIcon size="small" style={{ padding: "3px" }} />
            }
            className="newpost__footer-anybtn"
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
