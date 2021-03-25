const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    roomId: {
        type: String,
    },

})