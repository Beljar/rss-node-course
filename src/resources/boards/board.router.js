const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.status(200).send(boards);
});

router.route('/').post(async (req, res) => {
  const board = new Board(req.body);
  await boardService.addBoard(board);
  res.status(200).send(board);
});

router.route('/:id').get(async (req, res) => {
  try {
    const board = await boardService.getBoardById(req.params.id);
    res.status(200).send(board);
  } catch (err) {
    res.status(404).send();
  }
});

router.route('/:id').put(async (req, res) => {
  try {
    const board = await boardService.updateBoard(req.params.id, req.body);
    res.status(200).send(board);
  } catch {
    res.status(404).send();
  }
});

router.route('/:id').delete(async (req, res) => {
  console.log(`deliting ${req.params.id}`);
  try {
    await boardService.delBoard(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(404).send();
  }
});

module.exports = router;
