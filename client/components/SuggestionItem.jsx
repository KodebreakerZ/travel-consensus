var React = require('react');
var ReactDOM = require('react-dom');

SuggestionItem = React.createClass({
  clickHandler: function() {
    console.log('delete suggestion w id: ', this.props.suggestion.suggestion.id);


  },

  render: function() {
    return (
      <p className="suggestion" onClick={this.clickHandler}>
      {this.props.suggestion.suggestion} <i className="fa fa-times"></i>
      </p>
    )
  }
})

module.exports = SuggestionItem;
