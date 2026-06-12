const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send("Stupid server is running");
});

async function connectDB() {
    try {
        await mongoose.connect(process.env.mongo_DB);
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Database connection failed:", err.message);
        process.exit(1); // stop server if DB connection fails
    }
}

async function startServer() {
    await connectDB();

    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}

startServer();