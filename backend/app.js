const express = require('express');
const cors = require('cors');
const connectDB = require('./DB/Database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// CORS middleware - allow your frontend URLs
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001", "https://your-frontend-domain.com"],
  credentials: true
}));

// JSON middleware
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
  res.send('🚀 Expense Tracker Backend Running!');
});

// Your other routes here...

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
