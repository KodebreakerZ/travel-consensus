require('../server_helper');

var TripAPI = require('express').Router();
var Trip    = require('../../models/trip');

/*
  POST trip/

  Creates a trip with the name in the request body

  Responds with the new trip: {
    id:   Number,
    name: String
  }
*/
TripAPI.post('/', function(request, response) {
  var newTrip = {
    name: request.body.name
  }

  Trip.create(newTrip)
    .then(function(newTrip) {
      response.send(newTrip);
    })
    .catch(function(error) {
      console.error('ERROR POST:', request.url);
      response.status(500).send('Server error posting new trip');
    })
})

/*
  GET trip/:id

  Returns the trip with matching id

  responds with: {
    id: Number,
    name: String
  }
*/
TripAPI.get('/:id', function(request, response) {
  var tripId = request.params.id;

  Trip.byId(tripId)
    .then(function(trip) {
      response.send(trip);
    })
    .catch(function(error) {
      console.error('ERROR GET:', request.url);
      response.status(500).send('Server error getting trip by id');
    })
})


/*
  POST trip/:id/user

  Adds a user from request body to the trip with matching id

  Responds with:
    201 status
*/
TripAPI.post('/:id/user', function(request, response) {
  var newUser = {
    id_trip: request.params.id,
    id_user: request.body.userId
  }

  Trip.addUser(newUser)
    .then(function(newRelationship) {
      response.status(201).send(); // OK?
    })
    .catch(function(error) {
      console.error('ERROR POST:', request.url);
      response.status(500).send('Server error posting user to trip');
    })
})
