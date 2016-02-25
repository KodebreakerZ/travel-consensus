require('./model-helper');

const jwt  = require('jwt-simple');
const db = require('../lib/db');
const first = require('ramda').head;
const bcrypt = require('bcrypt-nodejs');
const Promise = require('bluebird');


const User = module.exports;

/*
  Insert new user into database

  attrs {
    email:      String <user's email address>
    username:   String <username to be shown in chat>
    password:   String <stored password and hash, TBD later>
  }
*/
User.create = function(attrs) {
  return db('user').insert(attrs, ['id', 'username', 'email'])
    .catch(reportError('error inserting user into db'))
}

/*
  Password hash and decrypt functions, using bcrypt
*/


// User.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

User.validPassword = function(password) {
  console.log('this.local', this.local)
    return bcrypt.compareSync(password, this.local.password);
};

/*
  function to look for a user based on email, for use by passport
  adapting a native Mongo function for use with PostGreSQL
*/

User.findOne = function(email) {
  return db.select('*').from('users').where({ 'email': email })
    .catch(reportError('error retrieving user'))
    .then(function(user) {
      if (user) {
        console.warn(email + ' is not available!');
        return true;
      } else {
        console.log(email + ' is available');
        return false;
      }
    })
}

/*
  function to find user by ID
  used in pasport deserialize to pass user id to session
*/

User.findById = function(id) {
  return db.select('*').from('users').where({ 'id': id })
    .catch(function(error) {
      console.warn('error retrieving user id', id);
      console.warn(error);
      throw error;
    })
    .then(function(result) {
      console.log('success retrieving user');
      return result;
    })
    .catch(reportError('error retrieving user id'))
    .then(first)
}

/*
  Retrieve all users of a trip
*/
User.allOfTrip = function(tripId) {
  // TODO: do not select password_digest
  return db.select('*').from('trip_users').where({ 'id_trip': tripId })
    .catch(reportError('error retrieving users for trip'))
}

/*
  Retrieve username by name
*/
User.verifyLogin= function(user) {
  return db.select('id').from('users').where( {username: user.username, password: user.password} )
    .then(function(response, error) {
      if(error) {
        console.log("Username does not exist")
      }
      // return db.select('password').from('users').where( {password: user.password})
      console.log('response from database query.', response)
      return response;
    })
    .then(function(response, error) {
      if(response === undefined) {
        console.log('Username or password is incorrect.')
      }
      console.log('%c success, color:red', response)
      var token = jwt.encode(user.username, 'secret');
          console.log("TOKEN", token, "user:", user)
          return {token: token, id: response};
    })
    .catch(reportError('error retrieving username by username'))
    // .then(first)
}
    // var username = req.body.username,
    //     password = req.body.password;

    // db.select('username password').from('users').where({username: user.username, password: user.password})
    // .then(function(data) {
    //   console.log('res userctrl', data)
    //   console.log('res.length', data[0])
    //   if (data[0] === undefined) {
    //   res.send({error: 'Username or password is invalid.'})
    //   } else {
    //     var token = jwt.encode(username, 'secret');
    //       // console.log("TOKEN", token, "user:", user)
    //       res.send({token: token, uid: data[0].userid});
    //   }
    // })
  // }
/*
  Retrieve username for an id
*/
User.usernameById = function(userId) {
  return db.select('username').from('users').where( {id: userId} )
    .catch(reportError('error retrieving username by userId'))
    .then(first)
}

/*
  Delete a user from a trip id
*/
User.deleteFromTrip = function(userId, tripId) {
  return db('trip_users').where({'id_trip': tripId}).andWhere({'id_user': userId}).del()
    .catch(reportError('error deleting user from trip'))
    .then(function() {
      return deleteUserFromMessage(userId);
    })
    .then(function() {
      return deleteUserFromSuggestion(userId);
    })
}

/*
  We should not need a delete user functions, but in case
*/
User.deleteUser = function(userId) {
  return db('user').where({'id': userId}).del()
    .catch(reportError('error deleting user'))
  return db('users').where({'id': userId}).del()
    .catch(function(error) {
      console.warn('error deleting user', userId);
      console.warn(error);
      throw error;
    })
    .then(function(result) {
      console.log('success deleting user');
      return result;
    })
}

/*
  Foreign key deletion functions for user

  Helper functions for deleteUserFromTrim
*/
function deleteUserFromMessage(userId) {
  return db('message').where({'id_user': userId}).del()
    .catch(reportError('error deleting user from message'))
}

function deleteUserFromSuggestion(userId) {
  return db('suggestion').where({'id_user': userId}).del()
    .catch(reportError('error deleting user from suggestion'))
}

