var React = require('react');
var ReactDOM = require('react-dom');
var TaskList = require('./TaskList.jsx');
var UserGreeting = require('./UserGreeting.jsx');

var GlobalSidebar = React.createClass({
  getInitialState: function() {
    return {
      tasksInList: [],
      trip: window.globalStateTripName,
      userText: ''
      }
  },

  componentDidMount: function() {
    setInterval( this.updateTrip, 2000);
    setInterval( this.updateName, 2000);
  },

  updateTrip: function() {
    this.setState( {trip: window.globalStateTripName} );
  },

  updateName: function() {
    var txt = window.globalStateUserName ? window.globalStateUserName : '';
    this.setState( {userText: txt} );
  },

  render: function() {
    return (
      <div className="sidebar">
        <div className="twelve columns sidebar-height">
          <UserGreeting userText={this.state.userText} />
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
