var React = require('react');
var ReactDOM = require('react-dom');
var SuggestionItem = require('./SuggestionItem.jsx');

var SuggestionList = React.createClass({
  render: function() {
    console.log('this.props.suggestions (SuggestionList.jsx) ', this.props.suggestions);

    var suggestionList = this.props.suggestions.map(function(suggestion) {
      return <SuggestionItem
               suggestion={suggestion}
             />
    }.bind(this));

    return (
      <div className="suggestion-display">
        <h4>Suggestions:</h4>
        {suggestionList}
      </div>
    )
  }
});

module.exports = SuggestionList;
