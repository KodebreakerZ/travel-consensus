"use strict"
require(TEST_HELPER) // <--- This must be at the top of every test file.

const Task = require(__models + '/task');
const db   = require('../../lib/db');
const dbCleaner = require('knex-cleaner');

describe('Task model', function() {
  describe('interface with database', function() {

    beforeEach(function() {
      return dbCleaner.clean(db, {mode: 'truncate'})
        .then(function() {
          return db('task').insert([
            {
              name: 'Beers to drink',
              id_trip: 1
            },
            {
              name: 'Places to sink',
              decision: 'Bermuda',
              status: 'decided',
              id_trip: 2
            },
            {
              name: 'Things to do',
              decision: 'Not drown',
              status: 'decided',
              id_trip: 2
            }
          ])
        })
        // .then(function() {
        //   console.log('inserted tasks into db');
        // })
    })

    it ('should list all tasks of a trip', function * () {
      // console.log('listing all tasks of trip 2')
      yield Task.allOfTrip(2)
        .then(function(tasks) {
          console.log('retrieved', tasks.length, 'tasks');
          expect(tasks).to.have.length(2);
          expect(tasks[0].name).to.equal('Places to sink');
        })
        .catch(reportError('listing tasks from trip by id'));
    })

    it ('should list no tasks for a trip that does not exist', function * () {
      yield Task.allOfTrip(404)
        .then(function(tasks) {
          console.log('retrieved', tasks.length, 'tasks');
          expect(tasks).to.have.length(0);
        })
        .catch(reportError('listing tasks from invalid tripId'));
    })

    it ('should create a new task including defaults', function * () {
      let newTask = {
        name: 'Things to do',
      }

      yield Task.create(newTask)
        .then(function(task) {
          console.log('created a new task:');
          expect(task).to.be.ok;
          expect(task.name).to.equal('Things to do');
          expect(task.status).to.equal('');
        })
        .catch(reportError('creating a new task'));
    })

    it ('should not create a task with an invalid name', function * () {
      let badNameTask = {
        name: null,
      }

      yield Task.create(badNameTask)
        .then(function(task) {
          reportError('created task with invalid name', task);
          expect(null).to.be.ok; // reject test
        })
        .catch(function(error) {
          console.log('√ failure creating task with invalid name');
          expect(error).to.be.ok;
        })
    })

  }) // interface with database
})
