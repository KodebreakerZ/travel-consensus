const ramda = require('ramda');

/*
  Provide a description to log when it is invoked with an error or
  psuedo-error. See server/server-helper.js for more information.

  use example:
    .catch(reportError('error finding messages for a task'))
*/
global.reportError = ramda.curry( function(description, error) {
  console.error('*** ', description, ' ***');
  console.error(error);

  if (error instanceof Error) throw error
})
