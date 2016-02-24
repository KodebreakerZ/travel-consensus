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

    // console.log('trip list ', TripDropdownList.props);
    // $.ajax({
    //   url: 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=ce8b5f7c6fbfcba5e114640942ab7893',
    //   dataType: 'json',
    //   cache: false,
    //   success: function(data) {
    //     console.log(data.main.temp);
    //     // convert API response from Kelvin to Fahrenheit
    //     this.state.temperature = " | " + ((data.main.temp * 9 / 5) - 459.67).toFixed(0) + "°";
    //   }.bind(this)
    // })
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
