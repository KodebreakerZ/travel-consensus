require('./request-helpers');
require('whatwg-fetch');


/*
  Sends a request to the server to create a new task

  See server/apis/trip-api @ POST trip/:id_trip/task
*/
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

/*
  Sends a request to the server to create a new message

  See server/apis/task-api @ POST task/:id_task/message
*/
exports.addNewMessage = function(messageObject) {
  return fetch('task/' + window.globalStateTaskId + '/message', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(messageObject)
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('!Posted new message to database!', data);
      return data;
    })
};

/*
  Sends a request to the server to create a new suggestion

  See server/apis/task-api @ POST task/:id_task/suggestion
*/
exports.addNewSuggestion = function(suggestionObject) {
  return fetch('task/' + window.globalStateTaskId + '/suggestion', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(suggestionObject)
  })
    .then(function(response) {
      console.log("WHAT IS THE RESPONSE?!", response);
      return response.json();
    })
    .then(function(data) {
      console.log('!Posted new suggestion to database!', data);
      return data;
    })
};

/*
  Sends a request to the server to signin a user

  See server/index.js/login @ POST login
*/
exports.signin = function(info) {
  // console.log('exports.signin ')
  return fetch('login', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(info)
  })
  .then(function(response) {
    // console.log('response in post.js', response)
    return response.json();
    
  })
  .then(function(data) {
    console.log('THIS IS MAybe A BLOB', data)
    window.globalStateUserId = data.id;
    window.globalStateUserName = data.username;
    window.globalToken = data.token;
    // console.log('USERID: ', window.globalStateUserId)
  })
  .catch(function(error) {
    if( error) {
      console.log("ERROR:", error)
    }
  })
};

/*
  Sends a request to the server to signin a user

  See server/index.js/signup @ POST signup
*/
exports.signup = function(info) {
  console.log('exports.signup', info)
  return fetch('signup', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(info)
  })
  .then(function(response) {
    // console.log('response in post.js', response)
    return response.json();
    
  })
  .then(function(data) {
    console.log('THIS IS MAybe A BLOB', data)
    window.globalStateUserId = data.id;
    window.globalToken = data.token;
    window.globalStateUserName = data.username;
    console.log('USERID: ', window.globalStateUserId)
  })
  .catch(function(error) {
    if( error) {
      console.log("ERROR:", error)
    }
  })
};

/*
  Sends a request to the server to create a new trip

  See server/apis
*/
exports.addNewTrip = function(tripAndUserObject) {
  return fetch('trip/', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(tripAndUserObject)
  })
    .then( function(response) {
      console.log('response from posting new trip', response);
    })
};

/*
  Sends a request to the server to get a user by username

  See server/apis/user-id @ GET user/:name/user/:id_task
*/
exports.fetchUserByName = function(username) {
  /////// KK - right now, trip id is null, should be set with Auth/Login
  return fetch('/user/' + username + '/user/' + window.globalStateTripId, {
    method: 'GET',
    headers: requestHeaders
  })
}


