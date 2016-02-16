var React = require('react');
var ReactDOM = require('react-dom');
var SuggestionList = require('./SuggestionList.jsx');
var SuggestionItem = require('./SuggestionItem.jsx');

GlobalTaskArea = React.createClass({
  render: function() {
    return (
      <div className="main">
        <SuggestionList suggestions={this.props.suggestions} />

        <div className="chat-display">
          <p> Chat display</p>
        </div>
        <div className="message-input">
          <p> Message input</p>
        </div>
      </div>
    
    )
  }
});

module.exports = GlobalTaskArea;
