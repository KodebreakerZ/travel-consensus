var React = require('react');
var ReactDOM = require('react-dom');
var TaskItem = require('./TaskItem.jsx');

var TaskList = React.createClass({
  handleClick: function() {
    $(".taskpop").fadeToggle('fast');
  },

  newTask: function(e){
    e.preventDefault();
    var newTask = {
      name: $('.newTask').val()
    }

    var exists = this.props.tasks.reduce(function(exists, existingTask) {
      return exists || newTask.name.toLowerCase() === existingTask.name.toLowerCase();
    }, false);

    if(!exists){
      console.log('posting new task');
      this.props.addNewTask(newTask);

      // intermediary setState; takes care of server-delay
      this.props.tasks.push(newTask);
      this.setState({tasks: this.props.tasks})
    }
  },

  render: function() {
    return (
      <div>
        <div className="task-list">

          {this.props.tasks.map(function(task) {
            return (<TaskItem task={task} />)
          }.bind(this))}

          <div className="task-item">
            <hr />
            <p style={{opacity:0.5}} onClick={this.handleClick}>+ Task</p>
          </div>
        </div>

        <div className="taskpop">
          <form onSubmit={this.newTask}>
              <label>Add a task</label>
              <input className="newTask" type="text" size="15" />
              <input type="submit" name="Add" />
          </form>
        </div>
      </div>
    );
  }
});

module.exports = TaskList;
