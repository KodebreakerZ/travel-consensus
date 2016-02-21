require('./request-helpers');
require('whatwg-fetch');


/*
  Sends a request to the server to create a new task

  See server/apis/trip-api @ POST trip/:id_trip/task
*/
exports.addNewTask = function(taskObject) {
  return fetch('trip/' + window.GlobalState.tripId + '/task', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(taskObject)
  })
    .then(function(response) {
      return response.json();
    })
};

/*
  Sends a request to the server to create a new message

  See server/apis/task-api @ POST task/:id_task/message
*/
exports.addNewMessage = function(messageObject) {
  return fetch('task/' + window.GlobalState.taskId + '/message', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(messageObject)
  })
    .then(function(response) {
      return response.json();
    })
};

/*
  Sends a request to the server to create a new suggestion

  See server/apis/task-api @ POST task/:id_task/suggestion
*/
exports.addNewSuggestion = function(suggestionObject) {
  return fetch('task/' + window.GlobalState.taskId + '/suggestion', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(suggestionObject)
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('!Posted new suggestion to database!', data);
      return data;
    })
};


/*
  'invite' really means to allow users with the id associated with
  these emails to view a trip.

  Sends a request to the server to add all users with these emails
  to the trip.

  expects: userEmails: Array
*/
exports.inviteUsersByEmail = function(userEmails) {
  if (!Array.isArray(userEmails)) userEmails = [ userEmails ];

  // send a request for each of the emails to invite.
  userEmails.map(function(email) {

    console.log('SUBMITTING EMAIL TO POST', email);
    return fetch('trip/' + window.GlobalState.tripId + '/user', {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify({ 'email': email })
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('!Posted new users to the user_trips table!', data);
      return data;
    })
  })
}












