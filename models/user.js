const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email:{
        type: String,
        lowercase: true,
        unique: true,
        required: [true, 'Email cannot be blank'],
        match: [/\S+@\S+\.\S+/, 'Email is invalid'],
    },
    phone:{
        type: String
    },
    password:{
        type: String
    },
    image:{
        type: String
    },
    createdAt:{
        type: Date,
        deafult: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);