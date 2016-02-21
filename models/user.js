require('./model-helper');

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
  Password hash function
*/


// User.hashPassword = function(password) {
//   var hasher = password + 'salted';
//   return new Promise(function (resolve, reject) {
//     bcrypt.hash(hasher, null, null, function (err, hashResult) {
//       if (err) reject(err);
//       else     resolve(hashResult);
//     });
//   });
// };
// }
User.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

User.findOne = function(email) {
  //find one row in postgres based on email
  var isNotAvailable = false;

  return db.select('*').from('user').where({ 'email': email })
    .catch(function(error) {
      console.warn('error retrieving users for trip', tripId);
      console.warn(error);
      throw error;
    })
    .then(function(result) {
      if (result.rows.length > 0){
        isNotAvailable = true;
        console.warn(email + ' is not available!');
        return isNotAvailable;
      }
      else{
        isNotAvailable = false;
        console.log(email + ' is available');
        return isNotAvailable;
      }
    })
}

User.findById = function(id) {
 //find one id in postgres
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

