const Todo = require('../models/Todo');

// Get all todos
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching todos' });
    }
};

// Create a new todo
exports.createTodo = async (req, res) => {
    const { text } = req.body;
    try {
        const newTodo = new Todo({ text });
        await newTodo.save();
        res.json(newTodo);
    } catch (error) {
        res.status(400).json({ error: 'Error creating todo' });
    }
};

// Update a todo
exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { $set: { completed: !req.body.completed } },
            { new: true }
        );
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json({ error: 'Error updating todo' });
    }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        await Todo.findByIdAndDelete(id);
        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting todo' });
    }
};
