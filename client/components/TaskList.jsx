var React = require('react');
var ReactDOM = require('react-dom');
var TaskItem = require('./TaskItem.jsx');

var TaskList = React.createClass({
  getInitialState: function () {
    /*
      this.props.task looks like this:
      [
        {
          name: "Hotel"
          id: 2
          id_trip: 1
          status: "decided"
          decision: "Hilton"
        },
        ...
      ]
    */
    return { items: this.props.tasks };
  },
  handleClick: function() {
    $(".taskpop").fadeToggle('fast');
  },
  newTask:function(e){
    if(e.charCode == 13){
      e.preventDefault();
      var task = $('.newTask').val();
      if(this.props.tasks.indexOf(task) === -1){
        this.props.tasks.push(task);
        console.log(this.props.tasks);
        this.setState({items: this.props.tasks})
      }
    }
  },
  render: function() {
    return (
      <div>
        <div className="task-list">

          {this.props.tasks.map(function(task) {
            return (<TaskItem task={task.name} />)
          }.bind(this))}

          <div className="task-item">
            <hr />
            <p style={{opacity:0.5}} onClick={this.handleClick}>+ Task</p>
          </div>
        </div>

        <div className="taskpop">
          <form>
              <label>Add a task</label>
              <input className="newTask" type="text" size="15" onKeyPress={this.newTask} />
              <input type="submit" name="Add" />
          </form>
        </div>
      </div>
    );
  }
});

module.exports = TaskList;
