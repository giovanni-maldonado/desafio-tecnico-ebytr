const mongoose = require('mongoose');

const Todo = mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Todo', Todo);
