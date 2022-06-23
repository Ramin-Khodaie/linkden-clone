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
import { readPosts } from "../../services/post/post";
import { useSelector } from "react-redux";

import FlipMove from "react-flip-move";
import "./Feed.css";
import { Skeleton } from "@mui/material";
import Modal from "../Modal/Modal";
import NewPost from "../NewPost/NewPost";
import AdditionalsToPost from "../AdditionalsToPost/AdditionalsToPost.jsx";
import WhoComment from "../WhoComment/WhoComment";
import WhoSeePost from "../WhoSeePost/WhoSeePost";

const Feed = () => {
  const newPost = {
    body: "",
    whoSee: "anyone",
    whoComment:"anyone",
    hashtag: [],
    photo: [],
    video: "",
    doc: "",
    celebrate: { title: "", photo: "" },
  };
  const [state, setState] = useState(newPost);
  const [posts, setPosts] = useState(undefined);
  
  const [component, setComponent] = useState(undefined);

  const [showModal, setShowModal] = useState(false);

  const inputRef = useRef();

  const { user } = useSelector((state) => state.user);
  const handleChangeInput = (field) => (e) => {
    console.log(44, e.target.value)
    setState({...state, [field]:e.target.value})
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
    
  }, [state.body === ""]);

 
  const handleBack = () => {
    setComponent(
      <NewPost
        newpost={state}
        user={user}
        onChangeComponent={handleChangeComponent}
        onChange={handleChangeInput}
      />
    );
  };
  const handleChangeComponent = (component) => {
    setShowModal(true);

    switch (component) {
      case "AddtoNewPost":
        setComponent(
          <AdditionalsToPost
            backToNewPost={handleBack}
            closeModal={handleCloseModal}
          />
        );
        break;
      case "WhoCanComment":
        setComponent(
          <WhoComment
            backToNewPost={handleBack}
            closeModal={handleCloseModal}
            newpost={state}
            onChange={handleChangeInput}
          />
        );
        break;
      case "WhoCanSee":
        setComponent(
          <WhoSeePost
            backToNewPost={handleBack}
            closeModel={handleCloseModal}
            newpost={state}
            onChange={handleChangeInput}
          />
        );
        break;
      default:
        break;
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const CreateNewPost = (e) => {
    setShowModal(true);
    setComponent(
      <NewPost
        newpost={state}
        user={user}
        onChangeComponent={handleChangeComponent}
        closeModal={handleCloseModal}
        onChange={handleChangeInput}
        
      />
    );
  };

  useEffect(() => {
    setComponent(
      <NewPost
        newpost={state}
        user={user}
        onChangeComponent={handleChangeComponent}
        closeModal={handleCloseModal}
        onChange={handleChangeInput}
      />
    );
  }, [state]);
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
              ref={inputRef}
            />
            <button>send</button>
          </form>
        </div>
        {showModal && (
          <Modal
            showDrop={showModal}
            closeDrop={() => setShowModal(false)}
            component={component}
          ></Modal>
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
            ({ id, data: {post, name, description, message, photoUrl, likes, timestamp } }) => (
              <Post
                key={id}
                name={name}
                description={description}
                photoUrl={photoUrl}
                message={post.body}
                postId={id}
                likes={likes}
                lifetime={timestamp}
              />
            )
          )}
      </FlipMove>
    </div>
  );
};

export default Feed;
