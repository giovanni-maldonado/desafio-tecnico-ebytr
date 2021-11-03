const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'https://localhost:3000',
    method: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log('user disconnected');
  });
});

app.use(cors());

app.get('/', (req, res) => { res.send('Hello World!'); });

http.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Passando na porta ${port}!`);
});
