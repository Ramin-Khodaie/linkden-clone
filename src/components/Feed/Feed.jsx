import {
  CreateRounded,
  ImageRounded,
  SubscriptionsRounded,
  EventNoteRounded,
  CalendarViewDayRounded,
} from "@mui/icons-material";
import { useState } from "react";
import InputOption from "../InputOption/InputOption";
import Post from "../Post/Post";
import {usePost} from '../Post/usePost'
import "./Feed.css";
const Feed = () => {
  const [posts, setPosts] = useState([]);

  const post = usePost("post")
  console.log(3322, post)

  const handleSendPost = (e) => {
      e.preventDefault()
  };
  return (
    <div className="feed">
      {/* input form container */}
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateRounded />
          <form>
            <input type="text" placeholder="start a post" />
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
      <Post />
    </div>
  );
};

export default Feed;
