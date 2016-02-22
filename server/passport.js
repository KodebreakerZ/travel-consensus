/*
  Not implemented, attempt at using Passport library to handle authentication and session 
  using custom User functions and local user database in PostgreSQL
*/
var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var User = require('../models/user');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // passport session setup 
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id)
            .then(function(user) {
                done(null, user)
            })
            .catch(function(error) {
                done(error, null)
            })

    });

    //local strategy term used for app/server specific logins

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, setting to use email address instead
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // this allows the entire request to be used, including the username/chat name 
    },
    function(req, email, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne(email)
          .catch(function(err) {
            // if there are any errors, return the error
            if (err)
                return done(err);            
          })
          .then(function(user) {
            // check to see if theres already a user with that email
            if (user) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {

                // if there is no user with that email
                // create the user
                //hash the entered password
                var hashedPassword = User.generateHash(password)

                var newUser = {
                  email: email,
                  username: username,
                  password: hashedPassword 
                }
                // save the user
                User.create(newUser)
            }            
          })
        });    
    }));

    //Local strategy login

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne(email)
          .then (function (user) {
            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            if (!User.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

            // all is well, return successful user
            return done(null, user);
          })
          .catch (function(err) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);            
          })
    }
    ));
};
