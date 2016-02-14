require(TEST_HELPER) // <--- This must be at the top of every test file.

const Task = require(__models + '/task')

describe('Task model', function() {
  describe('interface with database', function() {

    it ('should list all tasks of a trip', function * () {
      yield Task.allOfTrip(2)
        .then(function(tasks) {
          console.log('retrieved tasks:', tasks);
          expect(tasks).to.have.length(2);
          expect(tasks[0].name).to.equal('some task name');
        })
        .catch(reportError('listing tasks from trip by id'));
    })

    it ('should create a new task including defaults', function * () {
      let newTask = {
        name: 'Things to do',
      }

      yield Task.create(newTask)
        .then(function(task) {
          console.log('created a new task:', task);
          expect(task).to.be.ok;
          expect(task.name).to.equal('Things to do');
          expect(task.status).to.equal('');
        })
        .catch(reportError('creating a new task'));
    })

    it ('should not create a task with an invalid name', function * () {
      let badNameTask = {
        name: '',
      }

      yield Task.create(badNameTask)
        .then(function(task) {
          reportError('created task with invalid name', task);
          expect(null).to.be.ok; // reject test
        })
        .catch(function(error) {
          console.log('√ failure creating task with invalid name', error);
          expect(error).to.be.ok;
        })
    })

  }) // interface with database
})
