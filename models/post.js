const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref:'User',
        required: true
    },
    title:{
        type: String
    },
    description:{
        type: String
    }
});

module.exports = mongoose.model('Post', PostSchema);