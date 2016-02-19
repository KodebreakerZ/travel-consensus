var React = require('react');
var ReactDOM = require('react-dom');
var MessageItem = require('./MessageItem.jsx');

MessageList = React.createClass({
  getInitialState: function() {
    return {
      messages: this.props.messages
    }
  },

  render: function() {
    console.log('this.props.messages (MessageList.jsx) ', this.props.messages);

    var messageList = this.props.messages.map(function(message) {
      return <MessageItem
               message={message}
             />
    }.bind(this));

    return <div className="chat-display">
      <h4>messages:</h4>{messageList}
    </div>
  }
});

module.exports = MessageList;
