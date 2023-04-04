import React, { useState } from "react";
import NavBar from "../components/navBar/NavBar";
import ChatRoomSidebar from "../components/ChatRoomSidebar/ChatRoomSidebar";
import ChatRoomUsers from "../components/ChatRoomUsers/ChatRoomUsers";
import { MessageInputDisplay } from "../components/MessageInputDisplay/MessageInputDisplay";

export const Home = () => {
  const [isOpenRooms, setIsOpenRooms] = useState(true);

  const openRooms = () => {
    setIsOpenRooms(!isOpenRooms);
  };

  const [inputMsg, setInputMsg] = useState("");

  return (
    <>
      <NavBar openRooms={openRooms} />

      <div className="flex">
        <ChatRoomSidebar OpenRooms={openRooms} isOpenRooms={isOpenRooms} />
        <div className="flex flex-col w-8/12">
          <ChatRoomUsers />
          <MessageInputDisplay setInputMsg={setInputMsg} inputMsg={inputMsg} />
        </div>
      </div>
    </>
  );
};
