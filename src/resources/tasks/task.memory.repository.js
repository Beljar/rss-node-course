const TASKS = [];

const getAll = boardId => {
  return TASKS.filter(itm => itm.boardId === boardId);
};

const addTask = task => {
  TASKS.push(task);
};

const getTaskById = (boardId, id) => {
  const task = TASKS.filter(itm => itm.boardId === boardId && itm.id === id)[0];

  if (task) {
    return task;
  }

  console.log(`getting task ${id} on ${boardId}`);
  console.log(TASKS);
  throw new Error(`Couldn't find task ${id} on board ${boardId}`);
};

const unassignTasks = userId => {
  const tasks = TASKS.filter(itm => itm.userId === userId);
  tasks.map(itm => updateTask(itm.boardId, itm.id, { userId: null }));
};

const updateTask = (boardId, id, data) => {
  const task = getTaskById(boardId, id);
  Object.assign(task, data);
  delTask(boardId, id);
  addTask(task);
  return task;
};

const delTask = (boardId, id) => {
  const task = getTaskById(boardId, id);
  TASKS.splice(TASKS.indexOf(task), 1);
};

const delTasksByBoard = boardId => {
  const tasks = TASKS.filter(itm => itm.boardId === boardId);
  tasks.map(itm => delTask(boardId, itm.id));
};

module.exports = {
  getAll,
  addTask,
  getTaskById,
  updateTask,
  delTask,
  delTasksByBoard,
  unassignTasks
};
