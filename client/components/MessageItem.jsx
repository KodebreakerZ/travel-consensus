var React = require('react');
var ReactDOM = require('react-dom');

MessageItem = React.createClass({
  render: function() {
    return (
      <p className="message"><span className="message-author">{this.props.user}:</span> {this.props.message}</p>
    )
  }
})

module.exports = MessageItem;
