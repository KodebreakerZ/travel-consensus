const db = require('../lib/db');

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
    .catch(function(error) {
      console.warn('error inserting user into db', attrs);
      console.warn(error);
      throw error;
    })
    .then(function(result) {
      console.log('success inserting new user');
      return result;
    })
}

// User.hashPassword = function(password) {
// 	password encryption function
// }


/*
  Retrieve all users of a trip
*/
User.allOfTrip = function(tripId) {
  // TODO: do not select password_digest
  return db.select('*').from('trip_users').where({ 'id_trip': tripId })
    .catch(function(error) {
      console.warn('error retrieving users for trip', tripId);
      console.warn(error);
      throw error;
    })
    .then(function(result) {
      console.log('success retrieving trip users');
      return result;
    })
}

User.usernameById = function(userId) {
  return db.select('username').from('users').where( {id: userId} )
    .catch(function(error) {
      console.warn('error retrieving username by userId', userId);
      console.warn(error);
      throw error;
    })
    .then(function(username) {
      console.log('shape of User.usernameById data', username);
      return username[0];
    }
}

/*
  Delete a user from a trip id
*/

User.deleteFromTrip = function(userId, tripId) {
  return db('trip_users').where({'id_trip': tripId}).andWhere({'id_user': userId}).del()
    .catch(function(error) {
      console.warn('error deleting user from trip', tripId);
      console.warn(error);
      throw error;
    })
    .then(function() {
      deleteUserFromMessage(userId)
    })
    .then(function() {
      deleteUserFromSuggestion(userId)
    })
    .then(function(result) {
      console.log('success deleting user');
      return result;
    })
}

/*
  We should not need a delete user functions, but in case
*/

User.deleteUser = function(userId) {
  return db('user').where({'id': userId}).del()
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
    .catch(function(error) {
      console.warn('error deleting user', userId);
      console.warn(error);
      throw error;
    })
}

function deleteUserFromSuggestion(userId) {
  return db('suggestion').where({'id_user': userId}).del()
    .catch(function(error) {
      console.warn('error deleting user', userId);
      console.warn(error);
      throw error;
    })
}

