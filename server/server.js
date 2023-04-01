const express = require('express')

const app = express();

app.listen(3000, ()=>{
    console.log('Server started at port 3000')
})

app.get('/', (req, res)=>{
    res.send('This is a test')
})

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const chatRooms = {
  general: {
    name: 'General',
    messages: []
  },
  sports: {
    name: 'Sports',
    messages: []
  },
  music: {
    name: 'Music',
    messages: []
  }
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/:chatRoom', (req, res) => {
  const chatRoom = chatRooms[req.params.chatRoom];

  if (!chatRoom) {
    return res.status(404).send('Chat room not found');
  }

  res.sendFile(__dirname + '/chat.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  let currentChatRoom;

  socket.on('join', (chatRoomName) => {
    const chatRoom = chatRooms[chatRoomName];

    if (!chatRoom) {
      return socket.emit('error', 'Chat room not found');
    }

    currentChatRoom = chatRoomName;

    // send the last 10 messages to the new user
    for (let i = chatRoom.messages.length - 1; i >= Math.max(0, chatRoom.messages.length - 10); i--) {
      socket.emit('chat message', chatRoom.messages[i]);
    }

    socket.join(currentChatRoom);
    socket.emit('join success', chatRoom.name);
    socket.broadcast.to(currentChatRoom).emit('user joined', 'A user has joined the chat');
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);

    if (!currentChatRoom) {
      return socket.emit('error', 'You need to join a chat room first');
    }

    const chatRoom = chatRooms[currentChatRoom];

    // add the message to the list of messages for the current chat room
    chatRoom.messages.push(msg);

    // if there are more than 10 messages, remove the oldest one
    if (chatRoom.messages.length > 10) {
      chatRoom.messages.shift();
    }

    io.to(currentChatRoom).emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');

    if (currentChatRoom) {
      socket.broadcast.to(currentChatRoom).emit('user left', 'A user has left the chat');
    }
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
