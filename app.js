const express = require('express');
const connectDB = require('./db'); 
const apiRoutes = require('./routes/api'); 
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use API routes
app.use('/api/v1', apiRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
