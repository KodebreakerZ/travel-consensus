var React = require('react');
var ReactDOM = require('react-dom');

TaskItem = React.createClass({
  render: function() {
    return (
    <div className="task-item">
      <hr />
      <p>{this.props.task}</p>
    </div>
    )
  }
})

module.exports = TaskItem;