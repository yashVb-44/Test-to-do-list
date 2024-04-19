const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const config = require('./config');

// Create an Express app
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/api/todos', todoRoutes);

// Connect to MongoDB using the URI from config
mongoose.connect(config.db.uri, {
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// Start the server on the port from config
app.listen(config.server.port, () => {
    console.log(`Server is running on port ${config.server.port}`);
});
