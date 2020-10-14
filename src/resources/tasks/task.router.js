const router = require('express').Router();
const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const boadrId = req.body.boardId;
  const tasks = await taskService.getAll(boadrId);
  res.status(200).send(tasks.map(itm => Task.toResponse(itm)));
});

router.route('/').post(async (req, res) => {
  const task = new Task(req.body);
  await taskService.addTask(task);
  res.status(200).send(Task.toResponse(task));
});

router.route('/:id').get(async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.body.boardId, req.params.id);
    res.status(200).send(Task.toResponse(task));
  } catch (err) {
    console.log(`get task ${req.params.id} on ${req.body.boardId}`);
    res.status(404).send(err);
  }
});

router.route('/:id').put(async (req, res) => {
  try {
    const task = await taskService.updateTask(
      req.body.boardId,
      req.params.id,
      req.body
    );
    res.status(200).send(Task.toResponse(task));
  } catch (err) {
    res.status(404).send(err);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    await taskService.delTask(req.body.boardId, req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
