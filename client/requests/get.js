require('./request-helpers.js'); // Imports headers
require('whatwg-fetch');      // imports 'fetch' function

exports.setViewDataUpdateInterval = function(taskList, taskArea, interval) {
  setInterval(function() {
    fetchTasks(window.globalStateTripId)
      .then(function(tasks) {
        taskList.setState( {tasksInList: tasks} );
        console.log('setting state');
      })

    fetchMessages(window.globalStateTaskId)
      .then(function(messages) {
        taskArea.setState( {messagesInTask: messages} );
      })

    fetchSuggestions(window.globalStateTaskId)
      .then(function(suggestions) {
        console.log('fetched suggestions:', suggestions);
        taskArea.setState( {suggestionsInTask: suggestions} );
      })
  }, interval)
}

function fetchTasks(tripId) {
  return fetch('trip/' + tripId + '/tasks', {
    headers: requestHeaders
  })
    .then(function(response) {
      return response.json();
    })
}

function fetchMessages(taskId) {
  return fetch('task/' + taskId + '/messages', {
    headers: requestHeaders
  })
    .then(function(response) {
      return response.json();
    })
}

function fetchSuggestions(taskId) {
  return fetch('task/' + taskId + '/suggestions', {
    headers: requestHeaders
  })
    .then(function(response) {
      return response.json();
    })
    .catch(function(error) {
      console.error('syntax error');
      console.dir(error);
    })
}
