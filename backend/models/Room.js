const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    members: {
        type: Array,
        required: false,
        default: []
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
    custom: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Room', roomSchema);