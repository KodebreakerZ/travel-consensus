var React = require('react');
var ReactDOM = require('react-dom');

var TaskItem = React.createClass({
  clickHandler: function() {
    console.log('setting globalStateTaskId');
    window.globalStateTaskId = this.props.task.id;
  },

  render: function() {
    return (
      <div className="task-item">
        <hr />
        <p>{this.props.task.name}</p>
      </div>
    )
  }
})

module.exports = TaskItem;
