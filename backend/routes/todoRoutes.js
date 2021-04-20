const router = require('express').Router();
const Todo = require('../models/Todo');

// GET posts
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json({ status: 'ok', todos: todos });
  } catch (err) {
    res.json({ message: err });
  }
});

// POST posts
router.post('/', async (req, res) => {
  const postNew = req.body;
  // const post
  try {
    const todo = await Todo.create(postNew);

    res.json({ status: 'ok', todo: todo });
  } catch (err) {
    res.json({ message: err });
  }
});

// GET Especific post
router.get('/:todoId', async (req, res) => {
  try {
    const id = req.params.todoId;
    const todo = await Todo.findById(id);
    res.json({ status: 'ok', todo: todo });
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE Especific post
router.delete('/:todoId', async (req, res) => {
  try {
    const id = req.params.todoId;
    const deletePost = await Todo.remove({ _id: id });
    res.json({ status: 'ok', deleteTodo: deleteTodo });
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a post
router.patch('/:todoId', async (req, res) => {
  try {
    // para mostrar el cuerpo de la petición
    console.log(req.body);

    const id = req.params.postId;
    const updateTodo = await Todo.updateOne(
      { _id: id },
      { $set: { text: req.body.text } }
    );
    res.json({ status: 'ok', updateTodo: updatetodo });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
