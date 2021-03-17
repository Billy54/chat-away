const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User');
const {
    authenticateUser
} = require('./authentication');
const {
    findUserById
} = require('./helpers');

const initialize = function(passport) {
    //define our strategy , using local strategy then manualy log in the user
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    }, authenticateUser));

    //serialize user into an id for the session
    passport.serializeUser(function(user, done) {
        console.log('serialize done');
        done(null, user.id);
    });

    //get the user back using that deserialized id so passport can know who to log out
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            console.log('deserialize user');
            done(err, user);
        });
    });
}

module.exports = initialize;