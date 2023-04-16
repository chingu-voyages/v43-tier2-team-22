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

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`); // by default socket.io assigns a user to a private room, this id is their room

  socket.on('chat', (inputMsg) => {
    io.emit('received-chat', inputMsg);
  });

  socket.on('disconnect', () => {
    console.log(`user ${socket.id} disconnected`);
  });
});

server.listen(800, () => {
  console.log('SERVER IS RUNNING');
});
