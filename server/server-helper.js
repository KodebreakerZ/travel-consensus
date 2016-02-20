var ramda = require('ramda');

global.__models = __dirname + '/../models';
global.__server = __dirname + '/../server';

/*
    A NOTE ON CURRY
      -~- it is delicious -~-

  A curried function does not need to receive all of its parameters
  at once. They're useful because you can pass some information
  manually and then have the program pass in more as it is running.

  This gives use more flexibility using our functions. For example,
  we have built an error reporter that you can use to eat an error
  and then spit back out the error and a description that tells you
  where it came from.
  
    -!- they do not run until the last parameter is passed -!-
*/

/*
  Provide a description to log when it is invoked with an error or
  psuedo-error

  use example:
    .catch(reportError('error finding messages for a task'))
*/
global.reportError = ramda.curry( function(description, error) {
  console.error('*** ', description, ' ***');
  console.error(error);

  if (error instanceof Error) throw error
})


/*
  A `shortcut` for responding with data.

  Use it when returning the results of a database operation.

  use example:
    Trip.create(newTrip)
      .then(sendStatusAndData(response, 201))
    is the same as
      .then(function(data) { sendStatusAndData(response, 201, data) }) 
*/
global.sendStatusAndData = ramda.curry( function(response, status, data) {
  response.status(status).send(data);
})
