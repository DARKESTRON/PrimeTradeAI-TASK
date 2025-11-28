const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'x-auth-token'],
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/tasks', require('./routes/tasks'));

// Error Handling Middleware
app.use(require('./middleware/errorMiddleware'));

const PORT = process.env.PORT || 5000;

// Always start the server when this file is executed directly.
// On Vercel serverless, `api/index.js` imports the app and Vercel
// owns the request lifecycle instead of calling `listen` here.
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
