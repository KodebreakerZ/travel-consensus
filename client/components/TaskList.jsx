var React = require('react');
var ReactDOM = require('react-dom');
var TaskItem = require('./TaskItem.jsx');

TaskList = React.createClass({
  render: function() {
    console.log('this.props.tasks (TaskList.jsx) ', this.props.tasks);
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

module.exports = TaskList;