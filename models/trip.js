require('./model-helper');

const db = require('../lib/db');
const first = require('ramda').head;

const Trip = module.exports;

/*
  Insert new trip into database

  attrs {
    name:   String <trip title to display>
    //may need to associate main user at this time.
    //user:   Number <user id that created trip>
  }
*/
Trip.create = function(attrs) {
  return db('trip').insert(attrs, ['id', 'name'])
    .catch(reportError('error inserting trip into db'))
    .then(first)
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
    .catch(reportError('error inserting trip/user into db'))
    .then(first)
}

/*
  Retrieve a trip by its ID
*/
Trip.byId = function(tripId) {
  return db.select('*').from('trip').where({ 'id': tripId })
    .catch(reportError('error finding trip from id:'))
    .then(first)
}

/*
  Retrieve all trips of a user
*/
Trip.allOfUser = function(userId) {
  return db.select('id_trip').from('trip_users').where({ 'id_user': userId })
    .catch(reportError('error retrieving trips for user'))
    .then(function(tripsOfUser) {
      return Promise.all(
        tripsOfUser.map(function(tripOfUser) {
          return Trip.byId(tripOfUser.id_trip);
        })
      );
    })
}

/*
  Delete a trip
*/
Trip.deleteTrip = function(tripId) {
  return db('trip').where({'id': tripId}).del()
    .catch(reportError('error deleting trip'))
    .then(function() {
      deleteTripFromJoin(tripId)
    })
    .then(function() {
      deleteTripFromTask(tripId)
    })
    .then(function() {
      deleteTripFromSuggestion(tripId)
    })
}

/*
  If foreign keys need to be deleted as well
  helper functions for deleteTrip
*/
function deleteTripFromJoin(tripId) {
  return db('trip_users').where({'id_trip': tripId}).del()
    .catch(reportError('error deleting trip from trip_users'))
}

function deleteTripFromTask(tripId) {
  return db('task').where({'id_trip': tripId}).del()
    .catch(reportError('error deleting trip from task'))
}

function deleteTripFromSuggestion(tripId) {
  return db('suggestion').where({'id_trip': tripId}).del()
    .catch(reportError('error deleting trip from suggestion'))
}

/*
  Helper function for testing.
*/
Trip.idByName = function(tripName) {
  return db.select('id').from('trip').where( {'name': tripName} )
    .then(function(trip) {
      return trip[0].id;
    })
}
