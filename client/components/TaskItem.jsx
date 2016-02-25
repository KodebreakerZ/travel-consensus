var React = require('react');
var ReactDOM = require('react-dom');

var TaskItem = React.createClass({
  clickHandler: function() {
    window.globalStateTaskId = this.props.task.id;
    console.log('setting globalStateTaskId to', window.globalStateTaskId);
  },

  render: function() {
    return (
      <div className="task-item" onClick={this.clickHandler}>
        <p>{this.props.task.name}</p>
      </div>
    )
  }
})

module.exports = TaskItem;
