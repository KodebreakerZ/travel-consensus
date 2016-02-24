var React = require('react');
var ReactDOM = require('react-dom');
var TaskList = require('./TaskList.jsx');

var GlobalSidebar = React.createClass({
  getInitialState: function() {
    return {
      tasksInList: [],
      trip: 'please select a trip'
      }
  },

  componentDidMount: function() {
    setInterval( this.updateTrip, 2000);
  },

  updateTrip: function() {
    this.setState( {trip: window.globalStateTripName});
  },

  render: function() {
    return (
      <div className="sidebar">
        <div className="twelve columns sidebar-height">
          <div className="location-display">
            <i className="fa fa-circle fa-paper-plane-o fa-5x"></i>
            <h5>{this.state.trip}</h5>
          </div>
          <hr />
          <TaskList tasks={this.state.tasksInList} addNewTask={this.props.addNewTask} />
        </div>
      </div>
    )
  }
});

module.exports = GlobalSidebar;
