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
import FlipMove from "react-flip-move";
import "./Feed.css";
import { Skeleton } from "@mui/material";
import Modal from "../Modal/Modal";
import NewPost from "../NewPost/NewPost";
import AdditionalsToPost from "../AdditionalsToPost/AdditionalsToPost.jsx";

const Feed = () => {
  const [posts, setPosts] = useState(undefined);
  const [componentName, setComponentName] = useState(undefined);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef();
  const { user } = useSelector((state) => state.user);
  const handleChangeInput = (e) => {
    setMessage(e.target.value);
  };
  useEffect(() => {
    readPosts().then((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
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
      likes: [],
      timestamp: serverTimestamp(),
    };
    writePost(newPost);
    const emptyInput = "";
    setMessage(emptyInput);
  };

  const handleChangeComponent = () => {
    setShowModal(true);
    setComponentName(
      <AdditionalsToPost
        onChangeComponent={() =>
          setComponentName(
            <NewPost user={user} onChangeComponent={handleChangeComponent} />
          )
        }
      />
    );
  };
  const CreateNewPost = (e) => {
    setShowModal(true);
    setComponentName(
      <NewPost user={user} onChangeComponent={handleChangeComponent} />
    );
  };

  
  return (
    <div className="feed">
      {/* input form container */}
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateRounded />
          <form onClick={CreateNewPost}>
            <input
              disabled={true}
              type="text"
              placeholder="start a post"
              value={message}
              onChange={handleChangeInput}
              ref={inputRef}
            />
            <button>send</button>
          </form>
        </div>
        {showModal && (
          <Modal
            showDrop={showModal}
            closeDrop={() => setShowModal(false)}
            component={componentName}
          >
            {/* <NewPost user={user} /> */}
          </Modal>
        )}
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

      {posts === undefined &&
        [...Array(10)].map((arr) => (
          <Skeleton
            style={{
              backgroundColor: "white",
              height: "100px",
              borderRadius: "10px",
            }}
          ></Skeleton>
        ))}
      <FlipMove>
        {posts &&
          posts.map(
            ({ id, data: { name, description, message, photoUrl } }) => (
              <Post
                key={id}
                name={name}
                description={description}
                photoUrl={photoUrl}
                message={message}
                postId={id}
              />
            )
          )}
      </FlipMove>
    </div>
  );
};

export default Feed;
