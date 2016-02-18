var ramda = require('ramda');

global.__models = __dirname + '/../models';
global.__server = __dirname + '/../server';

/*
    A NOTE ON CURRY
      -~- it is delicious -~-

  These helpers use what is called currying. A curried function
  does not need to receive all of its parameters at once. When
  you use a curried function, you typically pass it one or two
  of its parameters and let the last one be passed by the program
  itself.
  -!- Until the last parameter has been passed, it does not run -!-

  This gives use more flexibility using our functions. For example,
  we have built an error reporter that you could place anywhere
  you might see an error, with a description that helps you identify
  that error log against others.

  Check it, team. If you aren't clear, let me know so I can change
  the docs.
*/

/*
  A curried error logger that logs a description
  (where the error happened) and the error message.

  When using this helper, provide it a description
  and the logging will be invoked only when it is passed
  a second parameter.

  use example:
    .catch(reportError('messages from task'))
*/
global.reportError = ramda.curry( function(description, error) {
  console.error('*** Testing Error ***');
  console.error(description);
  console.error(error);

  if (error instanceof Error) throw error
})


/*
  A `shortcut` for responding with data.

  Use it when returning the results of a database operation.

  use example:
    Trip.create(newTrip)
      .then(sendStatusAndData(response, 201))
*/
global.sendStatusAndData = ramda.curry( function(response, status, data) {
  response.status(status).send(data);
})
