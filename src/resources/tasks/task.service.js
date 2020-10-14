const taskRepo = require('./task.memory.repository');

const getAll = boardId => taskRepo.getAll(boardId);

const addTask = task => taskRepo.addTask(task);

const getTaskById = (boardId, id) => taskRepo.getTaskById(boardId, id);

const updateTask = (boardId, id, task) =>
  taskRepo.updateTask(boardId, id, task);

const delTask = (boardId, id) => taskRepo.delTask(boardId, id);

module.exports = { getAll, addTask, getTaskById, updateTask, delTask };
