require('../server-helper'); // Keep me near the top; I load a few global utilities.

var TripAPI = require('express').Router();

var Trip    = require(__models + '/trip');
var Task    = require(__models + '/task');
var User    = require(__models + '/user');

module.exports = TripAPI;

/*
  POST trip/

  Creates a trip

  Expects request: {
    name: String <name of trip>
  }

  Responds with: {
    id:   Number <primary key of trip>
    name: String <name of trip>
  }
*/
TripAPI.post('/', function(request, response) {
  var newTrip = {
    name: request.body.name
  }

  Trip.create(newTrip)
    .then(function(tripInfo) {
      var newTripUserObject = {id_trip: tripInfo.id, id_user: request.body.id_user};
      return Trip.addUser(newTripUserObject);
    })
    .then(sendStatusAndData(response, 201))
    .catch(sendStatusAndError(response, 500, 'Server error posting new trip'))
})

/*
  POST trip/:id_trip/user

  Adds a user to a trip

  Expects request: {
    id_user: Number <id of the user to add to trip>
    // TODO: enable adding user by email
  }

  Responds with: {
    id_trip: Number <id of trip>
    id_user: Number <id of user added to trip>
  }
*/
TripAPI.post('/:id_trip/user', function(request, response) {
  var newUserTrip = {
    id_user: request.body.id_user,
    id_trip: request.params.id_trip
  }

  Trip.addUser(newUserTrip)
    .then(sendStatusAndData(response, 201))
    .catch(sendStatusAndError('Server error posting new user to trip'))
})

/*
  POST trip/:id_trip/task

  Adds a task to a trip

  Expects request: {
    name: String <name of task>
  }

  Responds with: {
    id:       Number <primary key of task>
    name:     String <name of task>
    status:   String <status of task: 'undecided' or 'decided'>
    decision: String <the decision made for a decided task>
    id_trip:  Number <the trip this task belongs to>
  }
*/
TripAPI.post('/:id_trip/task', function(request, response) {
  var newTask = {
    id_trip: request.params.id_trip,
    name:    request.body.name
  }

  Task.create(newTask)
    .then(sendStatusAndData(response, 201))
    .catch(sendStatusAndError(response, 500, 'Server error posting new task to user'))
})

/*
  GET trip/:tripId/tasks

  Retrieves the tasks of a trip

  Responds with: [
    {
      id:       Number <unique id of this task>
      name:     String <name of task>
      status:   String <status of task: 'undecided' or 'decided'>
      decision: String <the decision made for a decided task>
      id_trip:  Number <the trip this task belongs to>
    },
    ...
  ]
*/
TripAPI.get('/:tripId/tasks', function(request, response) {
  var tripId = request.params.tripId;

  Task.allOfTrip(tripId)
    .then(sendStatusAndData(response, 200))
    .catch(sendStatusAndError(response, 500, 'Server error getting tasks by trip id'))
})

/*
  NOT IMPLEMENTED

  GET trip/:tripId/users

  Retrieves the users of a trip

  Responds with: [
    {
      id:       Number <unique id of user>
      username: String <username of user>
      email:    String <email of user>
    },
    ...
  ]
*/
TripAPI.get('/:tripId/users', function(request, response) {
  var tripId = request.params.tripId;

  User.allOfTrip(tripId)
    .then(sendStatusAndData(response, 200))
    .catch(sendStatusAndError('Server error getting users by trip id'))
})

