const BOARDS = [];

const getAll = () => {
  return BOARDS;
};

const addBoard = board => {
  BOARDS.push(board);
};

const getBoardById = id => {
  const board = BOARDS.filter(itm => itm.id === id)[0];
  if (board) {
    return board;
  }

  throw new Error('Error');
};

const updateBoard = (id, data) => {
  const board = getBoardById(id);
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      board[key] = data[key];
    }
  }
  delBoard(id);
  addBoard(board);
  return board;
};

const delBoard = id => {
  console.log(BOARDS);
  const board = getBoardById(id);
  BOARDS.splice(BOARDS.indexOf(board), 1);
  console.log(BOARDS);
};

module.exports = { getAll, addBoard, getBoardById, updateBoard, delBoard };
