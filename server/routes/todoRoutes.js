const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

// GET all todos
router.get('/', todoController.getTodos);

// POST create a new todo
router.post('/', todoController.createTodo);

// PATCH update a todo
router.patch('/:id', todoController.updateTodo);

// DELETE a todo
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
