import React, { useState } from 'react';
import NavBar from '../components/navBar/NavBar';
import ChatRoomSidebar from '../components/ChatRoomSidebar/ChatRoomSidebar';
import { MessageOutput } from '../components/MessageOutput/MessageOutput';
import { MessageInputDisplay } from '../components/MessageInputDisplay/MessageInputDisplay';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:800');

export const Home = () => {
  const [isOpenRooms, setIsOpenRooms] = useState(true);

  const openRooms = () => {
    setIsOpenRooms(!isOpenRooms);
  };

  const [inputMsg, setInputMsg] = useState('');

  const sendMessage = () => {
    // socket.emit()
  };

  return (
    <>
      <NavBar openRooms={openRooms} />
      <div className={`${isOpenRooms ? "flex" : " "}`}>
        {isOpenRooms ? (
          <ChatRoomSidebar OpenRooms={openRooms} isOpenRooms={isOpenRooms} />
        ) : (
          ''
        )}
        <div className='flex flex-col h-h-nav w-screen'>
          <MessageOutput fullView={isOpenRooms} />
          <MessageInputDisplay
            fullView={isOpenRooms}
            setInputMsg={setInputMsg}
            inputMsg={inputMsg}
          />
        </div>
      </div>
    </>
  );
};
