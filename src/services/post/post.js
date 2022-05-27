import { set, ref } from 'firebase/database';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { db, auth } from '../firebase/firebase'



export const readPosts = async () => {
    const col = collection(db, "posts");
    const snapshot = await getDocs(col);
    return snapshot
}

export const writePost = ({ name, description, message, timestamp, photoUrl }) => {


    try {
        addDoc(collection(db, "posts"), {
            name: name, description: description, message: message, timestamp: timestamp, photoUrl: photoUrl
        }).then(() => console.log("post added successfuly"))
    } catch (error) {
        console.log(error)
    }
}