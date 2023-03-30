import "./App.css";
import React from "react";
import Login from "./components/Login/Login";
import NavBar from "./components/navBar/NavBar";
import ChatCard from "./components/ChatCard/ChatCard";
import ChatRoomSidebar from "./components/ChatRoomSidebar/ChatRoomSidebar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ChatRoomSidebar/>
    </div>
  );
};

export default App;
