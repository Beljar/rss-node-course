const USERS = [];

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return USERS;
};

const addUser = async user => {
  console.log(user);
  USERS.push(user);
  console.log(USERS);
};

const getUserById = id => {
  return USERS.filter(user => user.id === id)[0];
};

const updateUser = (id, data) => {
  USERS.map(itm => {
    if (itm.id === id) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          itm[key] = data[key];
        }
      }
    }
  });
  return getUserById(id);
};

const delUser = id => {
  const user = USERS.filter(itm => itm.id === id)[0];
  USERS.splice(USERS.indexOf(user), 1);
};

module.exports = { getAll, addUser, getUserById, updateUser, delUser };
