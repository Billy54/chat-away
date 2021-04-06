"use strict";

var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/User');

var _require = require('./authentication'),
    authenticateUser = _require.authenticateUser;

var initialize = function initialize(passport) {
  //define our strategy , using local strategy then manualy log in the user
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true
  }, authenticateUser)); //will use this function for authentication
  //serialize user into an id for the session

  passport.serializeUser(function (user, done) {
    console.log('serialize done');
    done(null, user.id);
  }); //get the user back using that deserialized id so passport can know who to log out

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      console.log('deserialize user');
      done(err, user);
    });
  });
};

module.exports = initialize;