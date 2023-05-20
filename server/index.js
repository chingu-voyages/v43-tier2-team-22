const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const { connected } = require('process');
const server = http.createServer(app);
app.use(cors);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

//Set for users connected in chat
const connectedUsers = {};

io.on('connection', (socket) => {
  //console.log(`User Connected: ${socket.id}`); // by default socket.io assigns a user to a private room, this id is their room
  
  socket.on('chat', (inputMsg) => {
    io.emit('received-chat', inputMsg);
  });

  // socket.on('disconnect', () => {
  //   console.log(`user ${socket.id} disconnected`);
  // });

  socket.on('disconnect', () => {
    delete connectedUsers[socket.id];
    io.emit('user-list', Object.values(connectedUsers));
  });

  // users connected in chat

 socket.on("user", (user)=>{
  if (!connectedUsers.hasOwnProperty(socket.id)) {
    connectedUsers[socket.id] = user;
    io.emit('user-list', Object.values(connectedUsers));
    console.log('Connected Users:', connectedUsers);
  }
 })
 
 socket.on('get-user-list', () => {
  socket.emit('user-list', Object.values(connectedUsers));
});
 
});

server.listen(800, () => {
  console.log('SERVER IS RUNNING');
});
