require(TEST_HELPER) // <--- This must be at the top of every test file.

const Message = require(__models + '/message')

describe('Message model', function() {
  const app = TestHelper.createApp()

  describe('interface with database', function() {

    it ('should list all messages of a task', function * () {
      yield Message.allOfTask(2)
        .then(function(messages) {
          console.log('retrieved messages:', messages);
          expect(messages.length).to.equal(2);
          expect(messages[0].content).to.equal('some message');
        })
        .catch(reportError('listing messages from task by id'))
    })

    it ('should create a new message', function * () {
      let newMessage = {
        user: 1,
        task: 2,
        content: 'test message',
      }

      yield Message.create(newMessage)
        .then(function(message) {
          console.log('created message:', message);

          expect(message.user).to.equal(1);
          expect(message.created_at).to.be.ok;
          expect(message.content).to.equal('test message')
        })
        .catch(reportError('creating a new message'))
    })

    it ('should error on invalid user/task/message information', function * () {
      let badUserMessage = {
        user: 99,
        task: 2,
        content: 'test message',
      }
      let badTaskMessage = {
        user: 1,
        task: 99,
        content: 'test message',
      }

      yield Message.create(badUserMessage)
        .then(function(result) {
          reportError('created message with invalid user', result);
          expect(null).to.be.ok; // reject test
        })
        .catch(function(error) {
          console.log('√ failure creating message with invalid user', error);
          expect(error).to.be.ok; // accept test
        })

      yield Message.create(badtaskMessage)
        .then(function(result) {
          reportError('created message with invalid task', result);
          expect(null).to.be.ok; // reject test
        })
        .catch(function(error) {
          console.log('√ failure creating message with invalid task', error);
          expect(error).to.be.ok; // accept test
        })
    })

    it ('should not accept invalid message content', function * () {
      let badContentMessage = {
        user: 1,
        task: 2,
        content: '',
      }

      yield Message.create(badContentMessage)
        .then(function(result) {
          reportError('created message with invalid content', result);
          expect(null).to.be.ok; // reject test
        })
        .catch(function(error) {
          console.log('√ failure creating message with invalid content', error)
          expect(error).to.be.ok;
        })
    })

  }) // interface with database
})
