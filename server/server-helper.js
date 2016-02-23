var ramda = require('ramda');

global.__models = __dirname + '/../models';

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
    is the same as:
      .then(function(data) { sendStatusAndData(response, 201, data) })
*/
global.sendStatusAndData = ramda.curry( function(response, status, data) {
  response.status(status).send(data);
})

/*
  Another shortcut, this time for error reporting.

  Use it to describe an error to log to the server terminal and send
  a bad message to the server.

  use example:
    Trip.create(newTrip)
      .catch(sendStatusAndError(response, 500, 'Server error posting new trip'))
    is the same as:
      .catch(function(error) {
        console.error('*** Server error posting new trip ***')
        console.error(error)

        response.status(500).send('Server error posting new trip')

        if (error instanceof Error) throw error
      })

  <small> must be a better way to do this, yeah? </small>
*/
global.sendStatusAndError = ramda.curry( function(response, status, description, error) {
  try {
    reportError(description, error);
  } catch (error) {
    throw error; //  we throw the error again so we don't lose it! Always good to know when there's an error
  } finally {
    // code in a finally block _always_ executes.
    // we use it so that regardless whether the reportError above throws
    // an error, we will always send the client a response.
    return sendStatusAndData(response, status, error);
  }
})
