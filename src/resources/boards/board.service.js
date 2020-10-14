const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAll = () => boardsRepo.getAll();
const addBoard = board => boardsRepo.addBoard(board);
const getBoardById = id => boardsRepo.getBoardById(id);
const updateBoard = (id, board) => boardsRepo.updateBoard(id, board);
const delBoard = id => {
  boardsRepo.delBoard(id);
  tasksRepo.delTasksByBoard(id);
};

module.exports = { getAll, addBoard, getBoardById, updateBoard, delBoard };
