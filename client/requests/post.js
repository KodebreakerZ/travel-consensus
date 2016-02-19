require('./request-helpers');
require('whatwg-fetch');

exports.addNewTask = function(taskObject) {
  console.log('POST POST POST NEWNEWNEW TASK TASK TASK');

  var globalStateTripId = 1;

  return fetch('trip/' + globalStateTripId + '/task',
    {
      method: 'POST',
      headers: headers,
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


exports.newMessage = function() {
  var msgContent = document.getElementById('newMessage').value;
  var userId = 1; // will need to be grabbed dynamically
  var taskId = 1;
  var reqUrl = 'http://localhost:4000/task/' + taskId + '/message'; // task # will need to be grabbed dynamically

  var options = {

  method: 'POST',

  url: reqUrl,

  headers:
   { 'content-type': 'application/json' },

  body: {
    content: msgContent,
    id_user: userId
  },

  json: true

  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

};
