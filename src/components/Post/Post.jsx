import {
  CheckOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import InputOption from "../InputOption/InputOption";
import { forwardRef, useState } from "react";
import { getPostLike, toggleLike } from "../../services/post/post";
import { useSelector } from "react-redux";

import "./Post.css";

const Post = forwardRef(
  ({ name, description, message, photoUrl, postId }, ref) => {
    const { user } = useSelector((state) => state.user);

    const [likeNumbers, setLikeNumbers] = useState(0);

    const handleClickLike = (e) => {
      toggleLike(postId, user.uid);
      getPostLike(postId).then((data) => {
        const likesArray = data.data().likes;
        console.log(777, likesArray)
        setLikeNumbers(likesArray.length);
      });
    };
    return (
      <div className="post" ref={ref}>
        <div className="post__header">
          <Avatar src={photoUrl} />
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post__body">
          <p>{message}</p>
        </div>
        <div className="post__likes">
          <span>{likeNumbers}</span>
        </div>
        <div className="post__bottom">
          <InputOption
            Icon={ThumbUpAltOutlined}
            title="Like"
            color="gray"
            likeNumbers={likeNumbers}
            onClick={handleClickLike}
          />
          <InputOption Icon={CheckOutlined} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlined} title="Share" color="gray" />
          <InputOption Icon={SendOutlined} title="Send" color="gray" />
        </div>
      </div>
    );
  }
);

export default Post;
