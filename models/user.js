const db = require('../server/db');

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
  db.select('*').from('trip_users').where({ 'id_trip': tripId })
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

