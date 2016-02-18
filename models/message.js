const db = require('../lib/db');

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
    .catch(function(error) {
      console.warn('error inserting message into db', attrs)
      // console.warn(error)
      throw error;
    })
    .then(function(result) {
      console.log('\tsuccess inserting new message', attrs)
      return result[0];
    })
}

/*
  Retrieve all messages of a certain task

  TODO: Sort messages by createdAt dates
*/
Message.allOfTask = function(taskId) {
  return db.select('*').from('message').where({'id_task': taskId})
    .catch(function(error) {
      console.warn('error reading all messages of task:', taskId);
      // console.warn(error);
      throw error;
    })
}

/*
  Delete a message
*/
Message.deleteMessage = function(messageId) {
  return db('message').where({'id': messageId}).del()
    .catch(function(error) {
      console.warn('error deleting message', messageId);
      console.warn(error);
      throw error;
    })
    .then(function(result) {
      console.log('success deleting message');
      return result;
    })
}