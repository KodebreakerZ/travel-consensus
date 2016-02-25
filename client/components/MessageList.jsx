var React = require('react');
var ReactDOM = require('react-dom');
var MessageItem = require('./MessageItem.jsx');

var MessageList = React.createClass({

  render: function() {
    // can not read property map of undefined.
    // see comment in SuggestionList.
    var messageList = this.props.messages.map(function(message) {
      return <MessageItem
               message={message}
               key={message.id}
             />
    }.bind(this));

    return (
      <div id="messageListDiv">
        <h4>messages:</h4>
        {messageList}
      </div>
    );
  },

  //scroll to bottom of messages
  componentDidUpdate: function() {
    // var objDiv = document.getElementById("messageListDiv");
    // objDiv.scrollIntoView(false);
  }

});

module.exports = MessageList;
