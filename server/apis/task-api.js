require('../server-helper');

var TaskAPI = require('express').Router();
var Task    = require('../../models/task');

module.exports = TaskAPI;


/*
  POST task/

  Creates a new task from the name and tripId of the request

  Expects request: {
    name:   String,
    tripId: Number
  }

  Responds with the new task: {
    id:       Number,
    name:     String,
    status:   String,
    decision: String,
    id_trip:  Number
  }
*/
TaskAPI.post('/', function(request, response) {
  var newTask = {
    name:    request.body.name,
    id_trip: request.body.tripId
  }

  Task.create(newTask)
    .then(function(newTask) {
      response.send(trip)
    })
    .catch(function(error) {
      console.error('ERROR POST:', request.url);
      response.status(500).send('Server error posting new task');
    })
})


/*
  GET task/:taskId

  Returns the task with matching taskId

  Responds with: {
    id:       Number,
    name:     String,
    status:   String,
    decision: String,
    id_trip:  Number
  }
*/
TaskAPI.get('/:taskId', function(request, response) {
  var taskId = request.params.taskId;

  Task.byId(taskId)
    .then(function(task) {
      response.send(task);
    })
    .catch(function(error) {
      console.error('ERROR GET:', request.url);
      response.status(500).send('Server error getting task by id');
    })
})





