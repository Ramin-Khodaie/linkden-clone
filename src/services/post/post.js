import { dialogContentTextClasses } from '@mui/material';
import { query } from 'firebase/database';
import { collection, getDocs, addDoc, orderBy, doc, runTransaction, getDoc } from 'firebase/firestore/lite';
import { doLikeUnlike } from '../../utils/doLikeUnlike';
import { db, } from '../firebase/firebase'



export const readPosts = async () => {

    try {

        const col = collection(db, "posts");
        const queryPost = query(col, orderBy("timestamp", "desc"));
        const snapshots = await getDocs(queryPost);
        return snapshots;
    } catch (error) {
        console.log(error)
    }

}

export const writePost = ({ name, description, message, timestamp, photoUrl, likes }) => {


    try {
        addDoc(collection(db, "posts"), {
            name: name, description: description, message: message, timestamp: timestamp, photoUrl: photoUrl, likes: likes
        }).then(() => console.log("post added successfuly"))
    } catch (error) {
        console.log(error)
    }
}

export const toggleLike = (postid, userid) => {

    try {
        const docRef = doc(db, "posts", postid)
        runTransaction(db, (transaction) => {
            return transaction.get(docRef).then((d) => {
                const newLike = doLikeUnlike(d.data().likes, userid)
                transaction.update(docRef, { likes: newLike })

            });
        })
    } catch (error) {
        console.log(error)
    }

}

export const getPostLike = async (postid) => {
    try {
        const docRef = doc(db, 'posts', postid)        
        const snapshots = await getDoc(docRef);
        if (snapshots.exists()) {
            return snapshots;
        }else{
            console.log("no such a doc.")
        }
    } catch (error) {
        console.log(error)
    }
}