import React from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSelector } from 'react-redux'
import Login from "./components/Login/Login";
import Widget from "./components/Widget/Widget";
function App() {
  const { user } = useSelector((state) => state.user)
  return (
    <div className="app">
      <Header />
      {
        !user && <Login />
      }
      {
        user &&
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget/>
          
        </div>
      }
    </div>
  );
}

export default App;
