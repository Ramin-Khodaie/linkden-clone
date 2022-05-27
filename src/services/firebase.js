// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1QEYV83b3FTSp-WP8mLx2_gOvL4TZSVU",
    authDomain: "linkden-c9ea4.firebaseapp.com",
    projectId: "linkden-c9ea4",
    storageBucket: "linkden-c9ea4.appspot.com",
    messagingSenderId: "835150498537",
    appId: "1:835150498537:web:23dc4a132fbc8391a83e78"
  };


  
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase