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
  const [users, setUsers] = useState([]);
  console.log(users);

  let auth = useAuth();

  const openRooms = () => {
    setIsOpenRooms(!isOpenRooms);
  };

  const [inputMsg, setInputMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('chat', { name: auth.user, message: inputMsg });
    document.getElementById('text-input').value = '';
  };

  useEffect(() => {
    socket.emit('user', { id: socket.id, user: auth.user });
  }, [auth.user]);


  const handleUserList = useCallback((updatedUsers) => {
    setUsers(updatedUsers);
  }, []);

  useEffect(() => {
    socket.on('user-list', handleUserList);

    socket.emit('get-user-list');

    return () => {
      socket.off('user-list', handleUserList);
    };
  }, [handleUserList]);

  //create another object for the data received and send it to the bubble element to create the other users message
  const handleReceivedChat = useCallback(
    (data) => {
      let newItem = {
        name: data.name,
        text: data.message,
        time: new Date().toISOString(),
      };

      // add the new message to the msgList state
      setMsgList((prevMsgList) => [...prevMsgList, newItem]);
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
            setInputMsg={setInputMsg}
            handleSubmit={handleSubmit}
          />
        </div>
        {isOpenRooms ? (
          <UserList
            OpenRooms={openRooms}
            isOpenRooms={isOpenRooms}
            user={users}
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
};
