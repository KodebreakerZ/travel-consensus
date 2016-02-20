require('./model-helper');

const db = require('../lib/db');

const Suggestion = module.exports;

/*
  Insert new suggestion into database

  attrs {
    suggestion: String <What's the suggestion?>
    id_task:    Number <Which task is this a suggestion for?>
    id_user:    Number <Who made this suggestion?>
  }
*/
Suggestion.create = function(attrs) {
  return db('suggestion').insert(attrs, ['id', 'suggestion', 'id_user', 'id_task', 'createdAt'])
    .catch(function(error) {
      console.warn('error inserting suggestion into db', attrs)
      // console.warn(error)
      throw error;
    })
    .then(function(result) {
      console.log('\tsuccess inserting new suggestion', attrs)
      return result[0];
    })
}

/*
  Retrieve all suggestions of a certain task

  TODO: Sort suggestions by createdAt dates
*/
Suggestion.allOfTask = function(taskId) {
  return db.select('*').from('suggestion').where({'id_task': taskId}).orderBy('createdAt', 'asc')
    .catch(function(error) {
      console.warn('error reading all suggestions of task:', taskId);
      // console.warn(error);
      throw error;
    })
}


/*
  Delete a suggestion
*/
Suggestion.delete = function(suggestionId) {
  return db('suggestion').where({'id': suggestionId}).del()
    .catch(function(error) {
      console.warn('error deleting suggestion', suggestionId);
      console.warn(error);
      throw error;
    })
    .then(function(result) {
      console.log('success deleting suggestion');
      return result;
    })
}

/*
  Add vote to suggestion
*/
Suggestion.addVote = function(suggestionID) {
  return db('suggestion').where({id: suggestionId}).increment('votes', 1)
    .catch(function(error) {
      console.warn('error updating votes on suggestion', suggestionId);
      console.warn(error);
      throw error;
    })
    .then(function(result) {
      console.log('success updating votes');
      return result;
    })
}

/*
  Delete vote from suggestion
*/

Suggestion.removeVote = function(suggestionID) {
  return db('suggestion').where({id: suggestionId}).decrement('votes', 1)
    .catch(function(error) {
      console.warn('error updating votes on suggestion', suggestionId);
      console.warn(error);
      throw error;
    })
    .then(function(result) {
      console.log('success updating votes');
      return result;
    })
}
