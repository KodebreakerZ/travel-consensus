const db = require('../lib/db');

const Task = module.exports;

/*
  Insert new task into database

  attrs {
    name:   String <task title to display>
  }
*/
Task.create = function(attrs) {
  return db('task').insert(attrs)
    .catch(function(error) {
      console.warn('error inserting task into db', attrs);
      console.warn(error);
      throw error;
    })
    .then(function(result) {
      console.log('success inserting new task');
      return result;
    })
}


/*
  Retrieve all tasks of a trip
*/
Task.allOfTrip = function(tripId) {
  db.select('*').from('task').where({'id_trip': tripId})
    .catch(function(error) {
      console.warn('error retrieving tasks for trip', tripId);
      console.warn(error);
      throw error;
    })
    .then(function(result) {
      console.log('success retrieving trip tasks');
      return result;
    })
}
