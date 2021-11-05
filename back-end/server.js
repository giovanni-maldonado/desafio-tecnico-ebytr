const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://127.0.0.1:27017/ebytrProject', { useNewUrlParser: true });

mongoose.connection.once('open', () => {
  global.console.log('mongodb conectando com sucesso');
});

const app = express();
const port = process.env.PORT || 3000;
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'https://localhost:3000',
    method: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require('./controllers/todoController');

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    global.console.log('user disconnected');
  });
});

app.use(cors());
app.use(bodyParser.json());

app.get('/', getAllTasks);
app.post('/', createTask);
app.get('/:id', getTaskById);
app.put('/:id', updateTask);
app.delete('/:id', deleteTask);

app.listen(port, () => global.console.log(`Passando na porta ${port}!`));
