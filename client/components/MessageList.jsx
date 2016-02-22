var React = require('react');
var ReactDOM = require('react-dom');
var MessageItem = require('./MessageItem.jsx');

MessageList = React.createClass({
  render: function() {
    var messageList = this.props.messages.map(function(message) {
      return <MessageItem
               message={message}
             />
    }.bind(this));

    return (
      <div>
        <h4>messages:</h4>
        {messageList}
      </div>
    )
  }
});

module.exports = MessageList;
