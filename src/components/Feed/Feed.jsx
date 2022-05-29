import {
  CreateRounded,
  ImageRounded,
  SubscriptionsRounded,
  EventNoteRounded,
  CalendarViewDayRounded,
} from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import InputOption from "../InputOption/InputOption";
import Post from "../Post/Post";
import { readPosts, writePost } from "../../services/post/post";
import { useSelector } from "react-redux";
import { serverTimestamp } from "firebase/firestore/lite";
import "./Feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  const inputRef = useRef();
  const {user} = useSelector((state)=>state.user)
  console.log(222, user)
  const handleChangeInput = (e) => {
    setMessage(e.target.value);
  };
  useEffect(() => {
    readPosts().then((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, [message]);
  const handleSendPost = (e) => {
    e.preventDefault();
    const newPost = {
      name: user.displayName,
      description: "front-end devaloper",
      message: message,
      photoUrl: user.photoUrl,
      timestamp: serverTimestamp(),
    };
    writePost(newPost);
    const emptyInput = "";
    setMessage(emptyInput);
  };
  return (
    <div className="feed">
      {/* input form container */}
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateRounded />
          <form onSubmit={handleSendPost}>
            <input
              type="text"
              placeholder="start a post"
              value={message}
              onChange={handleChangeInput}
              ref={inputRef}
            />
            <button onClick={handleSendPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageRounded} title="Photo" color="#70B5F9" />
          <InputOption
            Icon={SubscriptionsRounded}
            title="Video"
            color="#7fc15e"
          />
          <InputOption Icon={EventNoteRounded} title="event" color="#e7a33e" />
          <InputOption
            Icon={CalendarViewDayRounded}
            title="Write articles"
            color="#fc9295"
          />
        </div>
      </div>
      {/* posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          photoUrl={photoUrl}
          message={message}
        />
      ))}
    </div>
  );
};

export default Feed;
