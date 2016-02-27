var React = require('react');
var ReactDOM = require('react-dom');

var UserItem = React.createClass({
  // clickHandler: function() {
  //   var id = {};
  //   id.id_suggestion = this.props.suggestion.id;
  //   DeleteHelper.deleteSuggestion(id);

  // },

  render: function() {
    return (
      <p className="user">
       <i className="fa fa-linux"></i> {this.props.user.username}
      </p>
    )
  }
})

module.exports = UserItem;
