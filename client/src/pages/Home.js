import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar/NavBar';
import ChatRoomSidebar from '../components/ChatRoomSidebar/ChatRoomSidebar';
import { MessageOutput } from '../components/MessageOutput/MessageOutput';
import { MessageInputDisplay } from '../components/MessageInputDisplay/MessageInputDisplay';
import io from 'socket.io-client';
import { useAuth } from '../utils/authProvider';
const socket = io.connect('http://localhost:800');

export const Home = () => {
  const [isOpenRooms, setIsOpenRooms] = useState(true);
  const [msgList, setMsgList] = useState([]);
  let auth = useAuth();
  const openRooms = () => {
    setIsOpenRooms(!isOpenRooms);
  };

  const [inputMsg, setInputMsg] = useState('');
  const [messageReceived, setMessageReceived] = useState('');

  const handleSubmit = () => {
    let newItem = {
      name: (socket.id = auth.user),
      text: inputMsg,
      time: Date.now(),
    };

    socket.emit('send_message', { newItem });
    setMsgList((msgList) => [...msgList, newItem]);
  
  };

  //create another object for the data received and send it to the bubble element to create the other users message
  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageReceived(data.message);
      console.log(data)
    });
  }, [socket]);

  return (
    <>
      <NavBar openRooms={openRooms} />
      <div className={`${isOpenRooms ? 'flex' : ' '}`}>
        {isOpenRooms ? (
          <ChatRoomSidebar OpenRooms={openRooms} isOpenRooms={isOpenRooms} />
        ) : (
          ''
        )}
        <div className='flex flex-col h-h-nav w-screen'>
          <MessageOutput
            user={auth.user}
            fullView={isOpenRooms}
            msgList={msgList}
          />
          <MessageInputDisplay
            fullView={isOpenRooms}
            setInputMsg={setInputMsg}
            inputMsg={inputMsg}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};
