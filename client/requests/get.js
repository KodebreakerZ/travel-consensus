var ramda = require('ramda');
require('whatwg-fetch');

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
  'Content-Type': "application/json"
};



exports.setViewDataUpdateInterval = function(globalComponents, interval) {
  console.log('running setViewDataUpdateInterval');

  return fetchTasks(1)
    .then(function(tasks) {
      // ReactDOM.render(component.component, component.container);
      globalComponents[0].setState({tasksInList: tasks});
      console.log('setting state!!!');
    })
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
