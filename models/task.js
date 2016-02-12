const db = require('../server/db');

const Task = module.exports;

/*
  attrs {
    name:   String <task title to display>
  }
*/
Task.create = function(attrs) {
  return db('task').insert(attrs)
    .catch(function(error) {
      console.warn('error inserting task into db', attrs)
      console.warn(error)
    })
    .then(function(result) {
      console.log('success inserting new task')
      return result
    })
}

Task.byTripId = function(tripId) {
  db.select('*').from('task').where({ 'id_trip': tripId })
    .catch(function(error) {
      console.warn('error retrieving tasks for trip', tripId)
      console.warn(error)
    })
    .then(function(result) {
      console.log('success retrieving trip tasks')
      return result
    })
}
