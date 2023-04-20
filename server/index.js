const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const server = http.createServer(app);
app.use(cors);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

const rooms = [
  { id: 1, activeUser: 10, messages: [] },
  { id: 2, activeUser: 10, messages: [] },
  { id: 3, activeUser: 10, messages: [] }
];


io.on('connection', (socket) => {
  //welcome 
  console.log(`User Connected: ${socket.id}`);
  
  // send list of rooms to client
  io.emit('roomData', rooms);


  // when a client joins a room
  socket.on('join', room  => {
    socket.join(room);
  });

  socket.on('chat', (inputMsg) => {
    io.emit('received-chat', inputMsg);
    //io.to(inputMsg.room).emit('received-chat', inputMsg);
    //console.log(inputMsg);
  });

  socket.on('disconnect', () => {
    console.log(`user ${socket.id} disconnected`);
  });
});

server.listen(800, () => {
  console.log('SERVER IS RUNNING');
});
