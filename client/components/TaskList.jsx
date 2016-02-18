var React = require('react');
var ReactDOM = require('react-dom');
var TaskItem = require('./TaskItem.jsx');

TaskList = React.createClass({

  getInitialState: function() {
    return {
      newTask: '+ Task'
    }
  },

  handleClick: function() {
    $(".taskpop").fadeToggle('fast');
  },

  handleChange: function(e) {
    // this.setState({ newTask: e.target.value });
  },

  render: function() {
    console.log('this.props.tasks (TaskList.jsx) ', this.props.tasks);
    var list = this.props.tasks.map(function(task) {
      return <TaskItem
              task={task}
             />
    }.bind(this));

    // Append a "+ Task" button to the task list
    list.push(
      <div className="task-item">
        <hr />
        <p style={{opacity:0.5}} onClick={this.handleClick}>{this.state.newTask}</p>
      </div>
    );

    // Render the task list
    return <div>

      <div className="task-list">
        {list}
      </div>

      <!-- add task popup -->
      <div className="taskpop">
        <form method="post" action="">
          <p>
            <label>Add a task</label>
            <input type="text" size="15"></input>
            <input type="submit" value="Add" onClick={this.handleClick}></input> 
          </p>
        </form>
      </div>

    </div>
  }
});

module.exports = TaskList;