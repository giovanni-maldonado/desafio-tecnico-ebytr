const Todo = require('../models/todoModel');

const getAllTasks = async () => {
  const allTasks = await Todo.find();
  return allTasks;
};

const createTask = async (data) => {
  try {
    const newTask = new Todo(data);
    await newTask.save();
  } catch (err) {
    global.console.log(err);
  }
};

const getTaskById = async (id) => {
  try {
    const task = await Todo.findOne({_id: id});
    return task;
  } catch (err) {
    global.console.log(err);
  }
};

const updateTask = async (id, data) => {
  try {
    await Todo.findOneAndUpdate({_id: id}, data);
  } catch (err) {
    global.console.log(err);
  }
};

const deleteTask = async (id) => {
  try {
    await Todo.findOneAndDelete({_id: id});
  } catch (err) {
    global.console.log(err);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
