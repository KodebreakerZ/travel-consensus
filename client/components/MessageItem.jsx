var React = require('react');
var ReactDOM = require('react-dom');

MessageItem = React.createClass({
  render: function() {
    console.log('RENDERING MESSAGE:', this.props.message);

    return (
      <p className="message">
        <span className="message-author">{this.props.message.id_user}:</span>
        {this.props.message.content}
      </p>
    )
  }
})

module.exports = MessageItem;
