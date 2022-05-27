import { useEffect, useState } from "react";
import {db} from '../../services/firebase'

export const usePost = (str) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection(str).onSnapshot((snapshot)=>setPost(snapshot.docs.map((doc)=>(
      {
        id: doc.id,
        data:doc.data()
      }
    ))))
  }, []);

  return post;
};
