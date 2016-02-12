const db = require('../server/db');

const Message = module.exports;


/*
  Retrieve all messages of a certain task

  taskId: id of task whose messages we want
*/
Message.allOfTask = function(taskId) {
  return db.select('*').from('message').where('id_task': taskId);
    .catch(function(error) {
      console.warn('error reading all messages of task:', taskId);
      console.warn(error);
    })
    .then(function(result) {
      console.log('fetched messages:', result);
      return result;
    }
}

/*
  Insert new message into database

  attrs {
    user:    Number <user id that created the message>
    task:    Number <task id that created the message>
    content: String <plain text content>
  }
*/
Message.create = function(attrs) {
  // var timestamp = Date.now()
  // attrs.created_at = timestamp;

  return db('message').insert(attrs)
    .catch(function(error) {
      console.warn('error inserting message into db', attrs)
      console.warn(error)
    })
    .then(function(result) {
      console.log('success inserting new message')
      return result
    })
}
