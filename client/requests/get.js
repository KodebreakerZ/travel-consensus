require('./request-helpers.js'); // Imports headers
require('whatwg-fetch');      // imports 'fetch' function



exports.setViewDataUpdateInterval = function(globalComponents, interval) {
  setInterval(function() {
    fetchTasks(1)
      .then(function(tasks) {
        // ReactDOM.render(component.component, component.container);
        globalComponents[0].setState({tasksInList: tasks});
        console.log('setting state');
      })
  }, interval)
}

function fetchTasks(tripId) {
  return fetch('trip/' + tripId + '/tasks',
    { headers: headers })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('retrieved tasks from database!:', data);
      return data;
    })
}
