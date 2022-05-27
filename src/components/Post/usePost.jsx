import { useEffect, useState } from "react";
import firebase from "../../services/firebase";

export const usePost = (str) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection(str)
      .onSnapshot((snapshot) => {
        console.log(snapshot);
      });
  }, []);

  return post;
};
