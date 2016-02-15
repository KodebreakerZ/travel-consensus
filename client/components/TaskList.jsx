var React = require('react');
var ReactDOM = require('react-dom');
var TaskItem = require('./TaskItem.jsx');

module.exports = React.createClass({
  render: function() {
    var list = this.props.tasks.map(function(task) {
      return <TaskItem
              task={task}
             />
    }.bind(this));

    return <div className="task-list">
      {list}
    </div>

  }
});