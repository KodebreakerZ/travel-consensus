require('./request-helpers');
require('whatwg-fetch');

exports.addNewTask = function(taskObject) {
  console.log('POST POST POST NEWNEWNEW TASK TASK TASK');

  var globalStateTripId = 1;

  return fetch('trip/' + globalStateTripId + '/task', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(taskObject)
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('!POSTED NEW TASK TO DATABASE!', data);
      return data;
    })
};

