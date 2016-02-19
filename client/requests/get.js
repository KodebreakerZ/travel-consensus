var ramda = require('ramda');
var fetch = require('whatwg-fetch');





exports.setViewDataUpdateInterval = function(globalComponents, interval) {
  console.log('running setViewDataUpdateInterval');


  return fetchTasks(1)
    .then(function(tasks) {
      // ReactDOM.render(component.component, component.container);
      component[0].setState({tasksInList: tasks});
      console.log('setting state!!!');
    })
}

function fetchTasks(tripId) {
  var headers = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10,
    'Content-Type': "application/json"
  };

  return fetch('trip/' + tripId + '/tasks', { headers: headers })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('retrieved tasks from database!:', data);
      return data;
    })
}
