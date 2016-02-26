require('../server-helper'); // Keep me near the top; I load a few global utilities.

var UserAPI = require('express').Router();

var Trip    = require(__models + '/trip');
var Task    = require(__models + '/task');
var User    = require(__models + '/user');

module.exports = UserAPI;

/*
  GET user/:userId/trips 

  Retrieves the trips of the user

  Responds with: [
    {
      id: Number <unique id of trip>
      name: String <name of trip>
    }
  ]

*/

UserAPI.get('/:userId/trips', function(request, response) {
	var userId = request.params.userId
	console.log('asking for trips for user ', userId);
	Trip.allOfUser(userId)
      .then(sendStatusAndData(response, 200))
      .catch(sendStatusAndError('Server error getting trips by user id'))
})

/*
  GET user/:username/userid/:id_trip 

  Gets a user by username and inserts them into the trip

  Responds with: [
    {
      id: Number <unique id of person>
      id_trip: String of tripid (need to parse on insertion to DB)
    }
  ]

*/
UserAPI.get('/:username/user/:id_trip', function(request, response) {
  User.useridByName(request.params.username)
    .then(function(data) {
      var toSend = {userid: data[0].id, tripid: request.params.id_trip};
      User.addToTrip(toSend)
        .then(function(stuff) {
          console.log("YOU DID IT!");
        })
    })
})