const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const connectDB = async () => {
    try {
        // MongoDB URI, replace with your actual URI if not using environment variables
        const uri = process.env.MONGO_URI || 'mongodb+srv://tanmaynpanchal:58j1xancuYo8NgLM@cluster1.uanq2.mongodb.net/?authSource=admin&retryWrites=true&w=majority&appName=Cluster1';

        if (!uri) {
            throw new Error('MongoDB connection URI is missing');
        }

        // Connect to MongoDB
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
