var React = require('react');
var ReactDOM = require('react-dom');
var SuggestionList = require('./SuggestionList.jsx');
var SuggestionItem = require('./SuggestionItem.jsx');
var MessageList = require('./MessageList.jsx');
var MessageItem = require('./MessageItem.jsx');

GlobalTaskArea = React.createClass({
  render: function() {
    return (
      <div className="main">
        <SuggestionList suggestions={this.props.suggestions} />

        <div className="chat-display">
          <MessageList messages={this.props.messages} />
        </div>
        <div className="message-input">
          <form action="postNewMessage" method="post">
            <input type="text" id="newmessage"></input>
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    
    )
  }
});

module.exports = GlobalTaskArea;
