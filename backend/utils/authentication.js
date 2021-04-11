const bcrypt = require('bcryptjs');
const User = require('../models/User');
const mongoose = require('mongoose');
const {
    encodeData
} = require('./helpers');

module.exports = {
    //passport will authenticate the user using the following strategy 
    authenticateUser: async function(req, email, password, done) {
        // Match user
        await User.findOne({
            email: email
        }).then((user) => {
            if (!user) {
                return done(null, false,
                    req.flash('message', 'Not Registered'));
            }
            //Match password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, req.flash('message', 'Incorrect password'));
                }
            });
        }).catch((err) => {
            console.log("db could not be reached");
            return done(null, false, req.flash('message', 'Db out of reach ok back end works'));
        });
    },
    //middleware to protect the routes from unathorized requests
    ensureAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } //we could redirect here to a apropriate component
        res.status(200).json({
            "statusCode": 401,
            "message": "Please log in to view that resource."
        });
    },
    //on to the next middlewere if not authenticated
    forwardAuthenticated: function(req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        res.redirect('/');
    }
}