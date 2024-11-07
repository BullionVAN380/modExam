const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
import path from "path"
import { fileURLToPath } from "url";

require('dotenv').config(); // Load environment variables from .env

//resolving dirname from es mode
const _filename= fileURLToPath(import.meta.url)
const _dirname=path.dirname(_filename)

app.use(express.static(path.join(_dirname,'/client/dist')));

//render client to any path
app.get("*",(req,res)=>res.sendFile(path.join(_dirname,"/client/dist/index.html")));

// Import moderation route
const moderationRoutes = require('./routes/moderation');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection without deprecated options
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/moderation', moderationRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Moderation API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
