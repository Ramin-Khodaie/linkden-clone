import { query } from 'firebase/database';
import { collection, getDocs, addDoc, orderBy } from 'firebase/firestore/lite';
import { db, auth } from '../firebase/firebase'



export const readPosts = async () => {

    try{

        const col = collection(db, "posts");
        const queryPost = query(col, orderBy("timestamp","desc"));
        const snapshots = await getDocs(queryPost);
        console.log(777, snapshots)
        return snapshots;
    }catch(error){
        console.log(error)
    }

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