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