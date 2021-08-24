const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/dbconfig');

const app = express();

app.use(express.json());

app.use(cors());

const user = require('./routes/user');
const post = require('./routes/post');

connectDB();

dotenv.config({path:'./config/config.env'});

PORT = process.env.PORT || 4000;

app.use('/api',user);
app.use('/api',post);

app.listen(PORT, function () {
    console.log("Server started at", PORT);
});