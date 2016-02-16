var React = require('react');
var ReactDOM = require('react-dom');

SuggestionItem = React.createClass({
  render: function() {
    return (
      <p className="suggestion">{this.props.suggestion} <i className="fa fa-times"></i></p>

    )
  }
})

module.exports = SuggestionItem;