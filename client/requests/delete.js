require('./request-helpers');
require('whatwg-fetch');


/*
  Sends a request to the server to delete an existing suggestion

  See server/apis/trip-api @ DELETE task/:id_task/suggestion
*/
exports.deleteSuggestion = function(suggestionObject) {

  return fetch('task/' + window.globalStateTaskId + '/suggestion', {
    method: 'DELETE',
    headers: requestHeaders,
    body: JSON.stringify(suggestionObject)
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('!DELETED SUGGESTION IN DATABASE!', data);
      return data;
    })
    .catch(function(error) {
      console.log('errored deleting suggestion', error)
    })
};

exports.deleteTripById = function(tripID) {
  return fetch('/trip/' + tripID + '/' + window.globalStateUserId, {
    method: 'DELETE',
    headers: requestHeaders,
    body: tripID
  })
  .then(function(response) {
    console.log("Back in delete.js")
  })
};