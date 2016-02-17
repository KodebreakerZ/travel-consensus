var React = require('react');
var ReactDOM = require('react-dom');
var MessageItem = require('./MessageItem.jsx');

MessageList = React.createClass({
  render: function() {
    console.log('this.props.messages (MessageList.jsx) ', this.props.messages);

    var message = this.props.messages.map(function(message) {
      var user = message['nickname'];
      var content = message['content'];
      return <MessageItem
              message={content} user={user}
             />
    }.bind(this));

    return <div className="chat-display">
      <h4>messages:</h4>{message}
    </div>
  }
});

module.exports = MessageList;
