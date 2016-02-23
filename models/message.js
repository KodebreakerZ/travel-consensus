require('./model-helper');

const db = require('../lib/db');
const first = require('ramda').head;
const User = require('./user')


const Message = module.exports;

/*
  Insert new message into database

  attrs {
    id_user:    Number <user id that created the message>
    id_task:    Number <task id that created the message>
    content: String <plain text content>
  }
*/
Message.create = function(attrs) {
  return db('message').insert(attrs, ['id', 'id_user', 'id_task', 'createdAt', 'content'])
    .catch(reportError('error inserting message into db'))
    .then(first)
}

/*
  Retrieve all messages of a certain task

  Returns: [
    {
      id:        Number <primary key>
      id_user:   Number <Author>
      id_task:   Number <Associated task>
      content:   String <What was said>
      createdAt: Number <Not sure what form the stamp returns. Log it ;) >
      username:  String <Author name>
    },
    ...
  ]
*/
Message.allOfTask = function(taskId) {
  return db.select('*').from('message').where({'id_task': taskId}).orderBy('createdAt', 'asc')
    .then(function(messages) {
      // Append a username to each of the messages
      return Promise.all(
        messages.map(function(message) {
          return User.usernameById(message.id_user)
            .then(function(user) {
              if (user) {
                message.username = user.username;
              }
              return message;
            })
        })
      )
    })
    .catch(reportError('error reading all messages of task:'))
}

/*
  Delete a message
*/
Message.deleteMessage = function(messageId) {
  return db('message').where({'id': messageId}).del()
    .catch(reportError('error deleting message'))
}
