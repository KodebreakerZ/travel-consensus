require('./request-helpers.js'); // Imports headers
require('whatwg-fetch');      // imports 'fetch' function

exports.setViewDataUpdateInterval = function(topBar, taskList, taskArea, interval) {
  setInterval(function() { 
    updateAll(topBar, taskList, taskArea)
  }, interval)
}

function updateAll(topBar, taskList, taskArea) {

  if (window.globalStateUserId) {
    fetchTrips(window.globalStateUserId)
      .then(function(trips) {
         topBar.setState( {tripsInUser: trips} );
       })
  } else {
    topBar.setState( {tripsInUser: []} );
  }

  if (window.globalStateTripId) {
    // fetchUsers(window.globalStateTripId)
    // .then(function(data) {
    //   fetchTasks(window.globalStateTripId)
    //     .then(function(task) {
    //       taskList.setState( {tasksInList: tasks})
    //     })
    // })
    fetchTasks(window.globalStateTripId)
      .then(function(tasks) {
        taskList.setState( {tasksInList: tasks} );
      })
  } else {
    taskList.setState( {tasksInList: []} );
  }

  if (window.globalStateTripId) {
    fetchUsers(window.globalStateTripId)
      .then(function(userlist) {
        console.log("HAVE SOME userlist", userlist);
        taskArea.setState( {usersInTrip: userlist} );
      })
  } else {
    taskArea.setState( {usersInTrip: []} );
  }

  if (window.globalStateTaskId) {
    fetchMessages(window.globalStateTaskId)
      .then(function(messages) {
        taskArea.setState( {messagesInTask: messages} );
      })
      .then(function(){
        var elem = document.getElementsByClassName('chat-display');
        elem.scrollTop = elem.scrollHeight;
        console.log('this fired!');
      })
  } else {
    taskArea.setState( {messagesInTask: []} );
    var elem = document.getElementsByClassName('chat-display');
    elem.scrollTop = elem.scrollHeight;
    console.log('other thing fired');
  }

  if (window.globalStateUserId && window.globalStateTripId && window.globalStateTaskId) {
    console.log('should run fetchSuggestions')
    fetchSuggestions(window.globalStateUserId, window.globalStateTripId, window.globalStateTaskId)
      .then(function(suggestions) {
        taskArea.setState( {suggestionsInTask: suggestions} );
      })
  } else {
    console.log('not all set for fetchSugggestions');
    taskArea.setState( {suggestionsInTask: []} );
  }
}

function fetchTrips(userId) {
  if (userId) {
    return fetch('user/' + userId + '/trips', {
      headers: requestHeaders
    }).then( function(response) {
      console.log('got trips', response);
      return response.json();
    })    
  }
}

function fetchTasks(tripId) {
  if (tripId) {
    return fetch('trip/' + tripId + '/tasks', {
      headers: requestHeaders
    })
      .then(function(response) {
        return response.json();
      })
  }
}

function fetchMessages(taskId) {
  if (taskId) {
    return fetch('task/' + taskId + '/messages', {
      headers: requestHeaders
    })
    .then(function(response) {
      return response.json();
    })
  }
}

function fetchSuggestions(userId, tripId, taskId) {
  if (userId && tripId && taskId) {
    console.log('fetching suggestions userId=', userId, 'tripId=', tripId, 'taskId=', taskId);
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
  } else {
    return [];
  }
}

function fetchUsers(tripId) {
  if (tripId) {
    return fetch('trip/' + tripId + '/users', {
      headers: requestHeaders
    })
    .then(function(response) {
      return response.json();
    })
  } 
}