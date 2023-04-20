import React, { useState, useEffect, useCallback } from 'react';
import NavBar from '../components/navBar/NavBar';
import ChatRoomSidebar from '../components/ChatRoomSidebar/ChatRoomSidebar';
import { MessageOutput } from '../components/MessageOutput/MessageOutput';
import { MessageInputDisplay } from '../components/MessageInputDisplay/MessageInputDisplay';
import io from 'socket.io-client';
import { useAuth } from '../utils/authProvider';
import UserList from '../components/UserList/UserList';
const socket = io.connect('http://localhost:800');

export const Home = () => {
  const [isOpenRooms, setIsOpenRooms] = useState(true);
  const [msgList, setMsgList] = useState([]);
  const [inputMsg, setInputMsg] = useState('');
  let auth = useAuth();
  
  const [currentRoom, setCurrentRoom] = useState("1"); // current room
  const [rooms, setRooms] = useState([]); // list of allrooms

  // when the user clicks on the join button 
  const handleJoinRoom = (room) => {
    socket.emit('join', room)
    console.log("join room: " + room);
  };
  useEffect(() => {
    console.log("current room: " + currentRoom);
   }, [currentRoom]);
 
  // Get list of rooms from the server
  useEffect(() => {
    socket.on('roomData', (rooms) => {
      setRooms(rooms);
    });
  }, [rooms]);

  const openRooms = () => {
    setIsOpenRooms(!isOpenRooms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('chat', { name: auth.user, message: inputMsg, room: currentRoom });
    document.getElementById('text-input').value = '';
  };

  //create another object for the data received and send it to the bubble element to create the other users message
  const handleReceivedChat = useCallback(
    (data) => {
      console.log(data);
      let newItem = {
        name: data.name,
        text: data.message,
        time: new Date().toISOString(),
      };

      // add the new message to the msgList state
      setMsgList(prevMsgList => [...prevMsgList, newItem]);
    },
    [auth.user]
  );

  useEffect(() => {
    socket.on('received-chat', handleReceivedChat);
    return () => {
      socket.off('received-chat', handleReceivedChat);
    };
  }, [handleReceivedChat, socket]);

  return (
    <>
      <NavBar openRooms={openRooms} />
      <div className={`${isOpenRooms ? 'flex' : ' '}`}>
        {isOpenRooms ? (
          <ChatRoomSidebar OpenRooms={openRooms} isOpenRooms={isOpenRooms} handleJoinRoom={handleJoinRoom} rooms={rooms} setRooms={setRooms} setCurrentRoom={setCurrentRoom}/>
        ) : (
          ''
        )}

        <div className='flex flex-col h-h-nav w-screen'>
          <MessageOutput
            user={auth.user}
            fullView={isOpenRooms}
            msgList={msgList}
            currentRoom={currentRoom}
          />
          <MessageInputDisplay
            setInputMsg={setInputMsg}
            handleSubmit={handleSubmit}
          />
        </div>
        {isOpenRooms ? (
          <UserList OpenRooms={openRooms} isOpenRooms={isOpenRooms}/>
        ) : (
          ''
        )}
      </div>
    </>
  );
};
