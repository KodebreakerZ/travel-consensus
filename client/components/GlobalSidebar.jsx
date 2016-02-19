var React = require('react');
var ReactDOM = require('react-dom');
var TaskList = require('./TaskList.jsx');
var TaskItem = require('./TaskItem.jsx');

GlobalSidebar = React.createClass({
  getInitialState: function() {
    return {
      tasksInList: []
    }
  },

  render: function() {
    console.log('global sidebar this.props:', this.props);
    return (
    <div className="sidebar">
      <div className="twelve columns sidebar-height">
        <div className="location-display">
          <i className="fa fa-circle fa-paper-plane-o fa-5x"></i>
          <h5>Las Vegas | 62</h5>
        </div>
        <TaskList tasks={this.state.tasksInList} addNewTask={this.props.addNewTask} />
      </div>
    </div>
    )
  }
});

module.exports = GlobalSidebar;
