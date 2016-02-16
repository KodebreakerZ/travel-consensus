const db       = require('../server/db');

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
      return result[0];
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
  return db('trip_users').insert(attrs, ['id_trip', 'id_user'])
    .catch(function(error) {
      console.warn('error inserting trip/user into db', attrs);
      console.warn(error);
      throw error;
    })
    .then(function(trip_user) {
      console.log('success inserting trip/user info');
      return trip_user[0];
    })
}

/*
  Retrieve a trip by its ID
*/
Trip.byId = function(tripId) {
  return db.select('*').from('trip').where({ 'id_trip': tripId })
    .catch(function(error) {
      console.warn('error finding trip from id:', tripId);
      console.warn(error);
      throw error;
    })
    .then(function(trip) {
      return trip[0];
    })
}

/*
  Retrieve all trips of a user
*/
Trip.allOfUser = function(userId) {
  db.select('id_trip').from('trip_users').where({ 'id_user': userId })
    .catch(function(error) {
      console.warn('error retrieving trips for user', userId);
      console.warn(error);
      throw error;
    })
    .then(function(tripsOfUser) {
      console.log('success retrieving users trips');
      console.log('shape of All trips by UserId', tripsOfUser);
      return Promise.all(
        tripsOfUser.map(function(tripOfUser) {
          return Trip.byId(tripOfUser.id_trip);
        })
      )
    })
}
