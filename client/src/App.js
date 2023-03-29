import "./App.css";
import React from "react";
import Login from "./components/Login/Login";
import NavBar from "./components/navBar/NavBar";
import ChatCard from "./components/ChatCard";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ChatCard activeUser={10} roomNum={123} />
    </div>
  );
};

export default App;
