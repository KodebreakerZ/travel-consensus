const db = require('../server/db');

const Message = module.exports;

/*
  Insert new trip into database

  attrs {
    name:   String <trip title to display>
    //may need to associate main user at this time.
    //user:   Integer <user id that created trip>
  }
*/

Trip.create = function(attrs) {
  return db('trip').insert(attrs)
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
    id_trip:   Integer <id of trip>
    id_user:   Integer <user id that is invited to trip>
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
  Retrieve all users of a trip
*/
Trip.allOfUsers = function(tripId) {
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

