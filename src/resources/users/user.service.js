const usersRepo = require('./user.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAll = () => usersRepo.getAll();
const addUser = user => usersRepo.addUser(user);
const getUserById = id => usersRepo.getUserById(id);
const updateUser = (id, data) => usersRepo.updateUser(id, data);
const delUser = id => {
  usersRepo.delUser(id);
  tasksRepo.unassignTasks(id);
};

module.exports = { getAll, addUser, getUserById, updateUser, delUser };
