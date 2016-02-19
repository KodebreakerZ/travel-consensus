require('./request-helpers');
require('whatwg-fetch');

exports.addNewTask = function(taskObject) {
  return fetch('trip/' + window.globalStateTripId + '/task', {
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

