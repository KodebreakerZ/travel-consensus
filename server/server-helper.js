var ramda = require('ramda');

global.sendStatusAndData = ramda.curry( function(response, status, data) {
  response.status(status).send(data);
})
