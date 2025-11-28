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
  // Allow specific origin via env in production; fall back to reflecting
  // the request origin when not set to avoid CORS issues during deployment.
  origin: process.env.CLIENT_ORIGIN || true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'x-auth-token'],
};

app.use(cors(corsOptions));
// Handle preflight requests for all routes
app.options('*', cors(corsOptions));
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
