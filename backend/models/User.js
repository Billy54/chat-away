const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3
    },
    email: {
        type: String,
        required: true,
        min: 3,
        max: 200
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 1024
    },
    date: {
        type: String,
        default: Date.now,
        required: true
    },
    avatar: {
        type: String,
        required: false,
        default: 'non'
    },
    rooms: {
        type: Array,
        required: true,
        default: []
    }
});

module.exports = mongoose.model('User', userSchema);