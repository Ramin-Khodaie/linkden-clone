import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";
import { auth } from "../../services/firebase/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice";

const Login = () => {
  const [fullName, setFullName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();    
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      dispatch(
        login({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: userCredential.user.displayName,
          photoUrl: userCredential.user.photoURL,
        })
      );
    });
  };
  const handleRegister = () => {
    if (!fullName) {
      return alert("Please enter a full name");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: fullName,
          photoURL: photoUrl,
        }).then(() => {
          dispatch(
            login({
              email: userCredential.user.email,
              uid: userCredential.user.uid,
              displayName: userCredential.user.displayName,
              photoUrl: userCredential.user.photoURL,
            })
          );
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    
    <div className="login">
      <img
        src="https://blogs.va.gov/VAntage/wp-content/uploads/2019/05/1280px-LinkedIn_Logo.svg_.png"
        alt="LinkdIn"
      />
      <form onSubmit={handleLogin}>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          placeholder="Full name (required if regestering)"
        />
        <input
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          type="text"
          placeholder="Profile pic url (optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Signin</button>
      </form>
      <p>
        Not a member ?{" "}
        <span className="login__register" onClick={handleRegister}>
          Register Now
        </span>
      </p>
    </div>
  );
};
export default Login;
