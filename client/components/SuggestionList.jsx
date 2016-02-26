var React = require('react');
var ReactDOM = require('react-dom');
var SuggestionItem = require('./SuggestionItem.jsx');

var SuggestionList = React.createClass({
  render: function() {
    // can not read property `map` of undefined, yet it logs inside of this?
    // I think it has something to do with virtual dom processing vs. actual
    // rendering. It works!
    var suggestionList = this.props.suggestions.map(function(suggestion) {
      console.log('suggestionssss', suggestion);
      return <SuggestionItem
               key={suggestion.id}
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
