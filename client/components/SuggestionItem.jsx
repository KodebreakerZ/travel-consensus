var React = require('react');
var ReactDOM = require('react-dom');
var DeleteHelper = require('../requests/delete.js')

var SuggestionItem = React.createClass({
  clickHandler: function() {
    var id = {};
    id.id_suggestion = this.props.suggestion.id;
    DeleteHelper.deleteSuggestion(id);

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
