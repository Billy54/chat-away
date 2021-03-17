const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required: true
    },
    comments: {
        type: Array,
        required: true,
        default: ['']
    }
});

module.exports = mongoose.model('Room', roomSchema);