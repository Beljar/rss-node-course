const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  console.log(users);
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = User.fromRequest(req.body);
  console.log(user);
  usersService.addUser(user);
  res
    .status(200)
    .json(User.toResponse(user))
    .send();
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUserById(req.params.id);
  res.status(200).send(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const user = usersService.updateUser(req.params.id, req.body);
  res.status(200).send(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  usersService.delUser(req.params.id);
  res.status(204).send();
});

module.exports = router;
