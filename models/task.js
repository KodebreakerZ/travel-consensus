require('./model-helper');

const db = require('../lib/db');
const first = require('ramda').head;

const Task = module.exports;

/*
  Insert new task into database

  attrs {
    name:   String  <task title to display>
    id_trip: Number <id of the trip this tasks resides in>
  }
*/
Task.create = function(attrs) {
  return db('task').insert(attrs, ['id', 'name', 'status', 'decision', 'id_trip'])
    .catch(reportError('error inserting task into db'))
    .then(first)
}

/*
  Retrieve all tasks of a certain trip
*/
Task.allOfTrip = function(tripId) {
  return db.select('*').from('task').where({'id_trip': tripId})
    .catch(reportError('error retrieving tasks for trip:'))
}

/*
  Delete a task
*/
Task.deleteTask = function(taskId) {
  return db('task').where({'id': taskId}).del()
    .catch(reportError('error deleting task'))
    .then(function() {
      return deleteTaskFromMessage(taskId);
    })
    .then(function() {
      return deleteTaskFromSuggestion(taskId);
    })
}

/*
  If foreign keys need to be deleted as well

  helper functions for main task deletion
*/
function deleteTaskFromMessage(taskId) {
  return db('message').where({'id_task': taskId}).del()
    .catch(reportError('error deleting task from message'))
}

function deleteTaskFromSuggestion(taskId) {
  return db('suggestion').where({'id_task': taskId}).del()
    .catch(reportError('error deleting task from suggestion'))
}
