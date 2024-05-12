import express from 'express';
import { createServer } from 'http'; // Use createServer instead of require('http')
import { Server } from 'socket.io'; // Import Server from 'socket.io'

const app = express();
const server = createServer(app); // Use createServer instead of http.createServer
const io = new Server(server); // Use Server from 'socket.io'

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (message) => {
    console.log('Message received:', message);
    io.emit('message', message); // Broadcast the message to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
