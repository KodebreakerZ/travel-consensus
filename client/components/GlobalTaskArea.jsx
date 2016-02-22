var React = require('react');
var ReactDOM = require('react-dom');
var SuggestionList = require('./SuggestionList.jsx');
var SuggestionItem = require('./SuggestionItem.jsx');
var MessageList = require('./MessageList.jsx');
var MessageItem = require('./MessageItem.jsx');
// var Post = require('../requests/post.js')

GlobalTaskArea = React.createClass({
  getInitialState: function() {
    return {
      messagesInTask: [],
      suggestionsInTask: []
    }
  },

  handleNewMessage: function(e) {
    e.preventDefault();

    var newMessage = {
      content: $('.newMessageContent').val(),
      id_user: 1    /////// MUST CHANGE TO CURRENTLY LOGGED IN USER
    }

    this.props.addNewMessage(newMessage);

    // intermediary setState; takes care of server-delay
    this.props.messagesInTask.push(newMessage)
    this.setState( {messagesInTask: this.props.messagesInTask} )
  },

  handleNewSuggestion: function(e) {
    e.preventDefault();

    var newSuggestion = {
      suggestion: $('.newSuggestionContent').val(),
      id_user: 1    /////// MUST CHANGE TO CURRENTLY LOGGED IN USER
    }

    this.props.addNewSuggestion(newSuggestion);

    // intermediary setState; takes care of server-delay
    this.props.suggestionsInTask.push(newSuggestion)
    this.setState( {suggestionsInTask: this.props.suggestionsInTask} )
    console.log('suggestionsInTask: ', suggestionsInTask)
  },

  render: function() {
    return (
      <div className="main">

        <SuggestionList suggestions={this.state.suggestionsInTask} />

        <div className="suggestion-display">
          <form onSubmit={this.handleNewSuggestion}>
          <p>Add suggestion:</p>
            <input className="newSuggestionContent" type="text"></input>
            <button type="submit">Post</button>
          </form>
        </div>

        <div className="chat-display">
          <MessageList messages={this.state.messagesInTask} />
        </div>

        <div className="message-input">
          <form onSubmit={this.handleNewMessage}>
            <input className="newMessageContent" type="text"></input>
            <button type="submit">Post</button>
          </form>
        </div>

      </div>
    )
  }
});

module.exports = GlobalTaskArea;
