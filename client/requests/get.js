require('./request-helpers.js'); // Imports headers
require('whatwg-fetch');      // imports 'fetch' function

exports.setViewDataUpdateInterval = function(topBar, taskList, taskArea, interval) {
  setInterval(function() { updateAll(topBar, taskList, taskArea)

    // fetchTrips(window.globalStateUserId)
    //  .then(function(trips) {
    //    console.log('got trips back from server', trips);
    //    topBar.setState( {tripsInUser: trips} );
    //  })

    // fetchTasks(window.globalStateTripId)
    //   .then(function(tasks) {
    //     taskList.setState( {tasksInList: tasks} );
    //   })

    // fetchMessages(window.globalStateTaskId)
    //   .then(function(messages) {
    //     taskArea.setState( {messagesInTask: messages} );
    //   })
    //   .then(function(){
    //     var elem = document.getElementsByClassName('chat-display');
    //     elem.scrollTop = elem.scrollHeight;
    //     console.log('this fired!');
    //   })

    // fetchSuggestions(window.globalStateTaskId)
    //   .then(function(suggestions) {
    //     taskArea.setState( {suggestionsInTask: suggestions} );
    //   })

  }, interval)
}

function updateAll(topBar, taskList, taskArea) {

  if (window.globalStateUserId) {
    fetchTrips(window.globalStateUserId)
      .then(function(trips) {
         console.log('got trips back from server', trips);
         topBar.setState( {tripsInUser: trips} );
       })
  } else {
    topBar.setState( {tripsInUser: []} );
  }

  if (window.globalStateTripId) {
    fetchTasks(window.globalStateTripId)
      .then(function(tasks) {
        taskList.setState( {tasksInList: tasks} );
      })
  } else {
    taskList.setState( {tasksInList: []} );
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