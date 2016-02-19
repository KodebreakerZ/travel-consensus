var React = require('react');
var ReactDOM = require('react-dom');

var TaskItem = React.createClass({
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
