const db = require('../server/db');

const Message = module.exports;

/*
  Insert new user into database

  attrs {
    name:       String <user's name>
    email:      String <user's email address>
    nickname:   String <nickname to be shown in chat, can be null>
    password:   String <stored password and hash, TBD later>
  }
*/
User.create = function(attrs) {
  return db('user').insert(attrs)
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

