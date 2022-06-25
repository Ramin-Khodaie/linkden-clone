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
import FlipMove from "react-flip-move";
import "./Feed.css";
import { Skeleton } from "@mui/material";
import Modal from "../Modal/Modal";
import NewPost from "../NewPost/NewPost";
import AdditionalsToPost from "../AdditionalsToPost/AdditionalsToPost.jsx";
import WhoComment from "../WhoComment/WhoComment";
import WhoSeePost from "../WhoSeePost/WhoSeePost";
import WhoCanSeeGroup from "../WhoSeePost/WhoCanSeeGroup";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../features/modal/modalSlice";

const Feed = () => {
  const newPost = {
    body: "",
    whoSee: "anyone",
    whoComment: "anyone",
    hashtag: [],
    photo: [],
    video: "",
    doc: "",
    celebrate: { title: "", photo: "" },
  };
  const [state, setState] = useState(newPost);
  const [posts, setPosts] = useState(undefined);

  const [component, setComponent] = useState(undefined);

  const dispatch = useDispatch()
  const {showModal} = useSelector(state=>state.modal)

  const inputRef = useRef();

  const { user } = useSelector((state) => state.user);
  const handleChangeInput = (p) => {
    setState(p);
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
    dispatch(toggleModal(true));

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
            componentChange={handleChangeComponent}
          />
        );
        break;
        case "WhoCanSee-group":
          setComponent(
            <WhoCanSeeGroup
            // backToWhoSee={handleBackGroup}
              closeModel={handleCloseModal}
              newpost={state}
              onChange={handleChangeInput}
              componentChange={handleChangeComponent}
            />
          );
          break;
      default:
        break;
    }
  };

  const handleCloseModal = () => {
    dispatch(toggleModal(false));
  };
  const CreateNewPost = (e) => {
    dispatch(toggleModal(true));
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
            closeDrop={() =>dispatch(toggleModal())}
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
            ({
              id,
              data: {
                post,
                name,
                description,
                message,
                photoUrl,
                likes,
                timestamp,
              },
            }) => (
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
