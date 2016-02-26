var React = require('react');
var ReactDOM = require('react-dom');

var UserGreeting = React.createClass({

	render: function() {

		return (
			<div className="greeting">
			  <h5>
			    welcome
			    <br/>
			    <span className="usersName">{this.props.userText}</span>
			  </h5>
			</div>
		)
	}
});

module.exports = UserGreeting;