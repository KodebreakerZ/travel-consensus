var React = require('react');
var ReactDOM = require('react-dom');

var AddTask = React.createClass({
	render: function(){
		return (
			<div className="addTaskBox">
			  <form onSubmit={this.props.newTask}>
			    <label>Add a task</label>
			    <input className="newTask" type="text" size="15" />
			    <input type="submit" name="AddTask" />
			  </form>
			</div>
		)
	}
});

module.exports = AddTask;
