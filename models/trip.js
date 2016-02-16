const db = require('../server/db');

const Message = module.exports;

/*
  Insert new trip into database

  attrs {
    name:   String <trip title to display>
    //may need to associate main user at this time.
    //user:   Number <user id that created trip>
  }
*/
Trip.create = function(attrs) {
  return db('trip').insert(attrs, ['name'])
    .catch(function(error) {
      console.warn('error inserting trip into db', attrs);
      console.warn(error);
      throw error;
    })
    .then(function(result) {
      console.log('success inserting new trip');
      return result;
    })
}

/*
  Associate trip id with user id

  attrs {
    id_trip:   Number <id of trip>
    id_user:   Number <user id that is invited to trip>
    //this may need to be run multiple times for each user
  }
*/
Trip.addUser = function(attrs) {
  return db('trip_users').insert(attrs)
    .catch(function(error) {
      console.warn('error inserting trip/user into db', attrs);
      console.warn(error);
      throw error;
    })
    .then(function(result) {
      console.log('success inserting trip/user info');
      return result;
    })
}

/*
  Retrieve all trips of a user
*/
Trip.allOfUser = function(userId) {
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
