"use strict"
const User = require('../models/User');

const get = async function(id) {
    return await User.findOne({
        _id: id
    }, {
        _id: 0,
        name: 0,
        email: 0,
        password: 0,
        date: 0,
        avatar: 0,
        demo: 0
    }).then(user => {
        return user.rooms;
    }).catch(err => {
        return err;
    });
}

module.exports = {
    get
};