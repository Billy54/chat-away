const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false,
        default: 'assets/public.jpg'
    },
    comments: {
        type: Array,
        required: false,
    },
    custom: {
        type: Boolean,
        required: false,
        default: false
    }
});

module.exports = mongoose.model('Room', roomSchema);