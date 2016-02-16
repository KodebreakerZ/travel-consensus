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
  Retrieve all trips of a user
*/
User.allTrips = function(userId) {
  db.select('*').from('trip_users').where({ 'id_user': userId })
    .catch(function(error) {
      console.warn('error retrieving trips for user', userId);
      console.warn(error);
      throw error;
    })
    .then(function(result) {
      console.log('success retrieving user's trips);
      return result;
    })
}


