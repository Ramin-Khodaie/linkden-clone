import {
  CheckOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
  ThumbUpAltRounded,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import InputOption from "../InputOption/InputOption";
import { forwardRef, useEffect, useState } from "react";
import { getPostLike, toggleLike } from "../../services/post/post";
import { useSelector } from "react-redux";

import "./Post.css";
import { calculatePostlife } from "../../utils/calculatePostlife";

const Post = forwardRef(
  ({ name, description, message, photoUrl, postId, likes, lifetime }, ref) => {
    const { user } = useSelector((state) => state.user);

    const [likeNumbers, setLikeNumbers] = useState(likes.length);
    const [togglelikeIcon, setTogglelikeIcon] = useState(false);

    const handleClickLike = (e) => {
      setTogglelikeIcon(!togglelikeIcon);
      //here we update likes array  inside of post object depends on user's id.
      toggleLike(postId, user.uid)
        .then(() =>
          getPostLike(postId).then((data) => {
            const likesArray = data.data().likes;
            setLikeNumbers(likesArray.length);
          })
        )
        .catch((error) => console.log(error));
    };

    useEffect(() => {
      if (user) {
        if (likes.includes(user.uid)) {
          setTogglelikeIcon(true);
        }
      }
      // const postliftime = calculatePostlife(lifetime);

      // console.log(postliftime);
    }, []);
    return (
      <div className="post" ref={ref}>
        <div className="post__header">
          <Avatar src={photoUrl} />
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
            {/* <p>{postliftime}</p> */}
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
            Icon={!togglelikeIcon ? ThumbUpAltOutlined : ThumbUpAltRounded}
            title="Like"
            color={!togglelikeIcon ? "gray" : "#0a66c2"}
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
