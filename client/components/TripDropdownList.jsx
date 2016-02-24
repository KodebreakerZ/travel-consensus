var React = require('react');
var ReactDOM = require('react-dom');
var TripItem = require('./TripItem.jsx');

var TripDropdownList = React.createClass({

  render: function() {

    var tripList = this.props.usersTrips.map(function(trip) {
      return <TripItem
               key={trip.id}
               trip={trip}
             />
    }.bind(this));

    return (
      <div className="tripDropdownListDiv">
        <h4>Select A Trip:</h4>
          {tripList}
        <h4>Add A Trip</h4>
      </div>
    )
  }

  // Upon state change (adding a new trip), show new trip
  // componentDidUpdate: function() {
  // }

});

module.exports = TripDropdownList;
