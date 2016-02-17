require('../server-helper');

var TaskAPI = require('express').Router();
var Task    = require('../../models/task');
var Message = require('../../models/message');
var Suggestion = require('../../models/suggestion');

module.exports = TaskAPI;


/*
  POST task/:id_task/message

  Creates a new message for this task

  Expects request: {
    content: String <What was said>
    id_user:  Number <Who said it>
  }

  Responds with the new message: {
    id:        Number <unique identifier for this message>
    content:   String <What was said>
    createdAt: Date <When it was said>
    id_user:   Number <Who said it>
    id_task:   Number <In which task>
  }
*/
TaskAPI.post('/:id_task/message', function(request, response) {
  var newMessage = {
    content: request.body.content,
    id_user: request.body.id_user,
    id_task: request.params.id_task
  }

  Message.create(newTask)
    .then(function(newMessage) {
      response.send(newMessage)
    })
    .catch(function(error) {
      console.error('ERROR POST:', request.url);
      response.status(500).send('Server error posting new message to task');
    })
})

/*
  MODEL NOT IMPLEMENTED

  POST task/:id_task/suggestion

  Creates a new suggestion for this task

  Expects request: {
    suggestion: String <What was suggested>
    id_user:    Number <Who suggested it>
  }

  Responds with the new suggestion: {
    id:         Number <unique identifier for this message>
    suggestion: String <What was suggested>
    createdAt:  Date <When it was suggested>
    id_user:    Number <Who suggested it>
    id_task:    Number <In which task>
  }
*/
TaskAPI.post('/:id_task/message', function(request, response) {
  var newSuggestion = {
    suggestion: request.body.suggestion,
    id_user: request.body.id_user,
    id_task: request.params.id_task
  }

  Suggestion.create(newSuggestion)
    .then(function(newSuggestion) {
      response.send(newSuggestion)
    })
    .catch(function(error) {
      console.error('ERROR POST:', request.url);
      response.status(500).send('Server error posting new suggestion to task');
    })
})

/*
  NOT IMPLEMENTED

  PUT task/:id_task

  Updates a task's status

  Expects request: {
    // Do we need full information or can we update only given properties
  }

  Responds with: {
    id:       Number,
    name:     String,
    status:   String,
    decision: String,
    id_trip:  Number
  }
*/
TaskAPI.put('/:id_task/', function(request, response) {

})

/*
  TODO: Sort messages in chronological order in message model.

  GET task/:id_task/messages

  Returns all messages of a given task

  Responds with: [
    {
      id:        Number <unique identifier for this message>
      content:   String <What was said>
      createdAt: Date <When it was said>
      id_user:   Number <Who said it>
      id_task:   Number <In which task>
    }
  ]
*/
TaskAPI.get('/:id_task/messages', function(request, response) {
  var id_task = request.params.id_task;

  Message.allOfTask(id_task)
    .then(function(allMessages) {
      response.send(allMessages);
    })
    .catch(function(error) {
      console.error('ERROR GET:', request.url);
      response.status(500).send('Server error getting messages by task id');
    })
})


/*
  TODO: Sort suggestions in chronological order in suggestion model.

  GET task/:id_task/suggestions

  Returns all suggestions of a given task

  Responds with: [
    {
      id:         Number <unique identifier for this message>
      suggestion: String <What was suggested>
      createdAt:  Date <When it was suggested>
      id_user:    Number <Who suggested it>
      id_task:    Number <In which task>
    }
  ]
*/
TaskAPI.get('/:id_task/suggestions', function(request, response) {
  var id_task = request.params.id_task;

  Suggestion.allOfTask(id_task)
    .then(function(allSuggestions) {
      response.send(allSuggestions);
    })
    .catch(function(error) {
      console.error('ERROR GET:', request.url);
      response.status(500).send('Server error getting suggestions by task id');
    })
})




