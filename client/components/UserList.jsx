var React = require('react');
var ReactDOM = require('react-dom');
var User = require('./User.jsx');

var UserList = React.createClass({
  render: function() {
    // can not read property `map` of undefined, yet it logs inside of this?
    // I think it has something to do with virtual dom processing vs. actual
    // rendering. It works!
    console.log("Here are users", this.props.users);
    var userList = this.props.users.map(function(user) {
      return <User
               user={user}
             />
    }.bind(this));

    return (
      <div className="userList">
        <h4>Users:</h4>
        {userList}
      </div>
    )
  }
});

module.exports = UserList;
