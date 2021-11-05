const Todo = require('../services/todoService');

const getAllTasks = async (req, res) => {
  const tasks = await Todo.getAllTasks();
  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const newTask = await Todo.createTask(req.body);
  return res.status(201).json(newTask);
};

const getTaskById = async (req, res) => {
  const { id } = req.params;
  const taskById = await Todo.getTaskById(id);
  return res.status(200).json(taskById);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const updatedTask = await Todo.updateTask(id, req.body);
  return res.status(200).json(updatedTask);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const deletedTask = await Todo.deleteTask(id);
  return res.status(200).json(deletedTask);
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
