import React, { useState } from 'react';
import NavBar from '../components/navBar/NavBar';
import ChatRoomSidebar from '../components/ChatRoomSidebar/ChatRoomSidebar';
import { MessageInputDisplay } from '../components/MessageInputDisplay/MessageInputDisplay';

export const Home = () => {
  const [isOpenRooms, setIsOpenRooms] = useState(true);

  const openRooms = () => {
    setIsOpenRooms(!isOpenRooms);
  };

  return (
    <>
      <NavBar openRooms={openRooms} />
      
        <ChatRoomSidebar OpenRooms={openRooms} isOpenRooms={isOpenRooms} />
        <MessageInputDisplay />
     
    </>
  );
};
