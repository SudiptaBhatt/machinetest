const mongoose = require('mongoose');

const connectDB = async () => {
    const connection = await mongoose.connect('mongodb://localhost:27017/project1', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log('Database Connected');
}

module.exports = connectDB;