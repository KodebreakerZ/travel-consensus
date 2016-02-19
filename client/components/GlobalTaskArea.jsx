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

  handleClick: function(e) {
    // do nothing for now.
  },

  render: function() {
    return (
      <div className="main">
        <SuggestionList suggestions={this.state.suggestionsInTask} />

        <div className="chat-display">
          <MessageList messages={this.state.messagesInTask} />
        </div>
        <div className="message-input">
          <form action="postNewMessage" method="post">
            <input id="newMessage" type="text"></input>
            <button onClick={this.handleClick} type="submit">Post</button>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = GlobalTaskArea;
