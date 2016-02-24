var React = require('react');
var ReactDOM = require('react-dom');
var TripItem = require('./TripItem.jsx');

var TripDropdownList = React.createClass({
  getInitialState: function() {
    //get request to server for all the user's trips
    return {
      usersTrips: ["Trip 1", "Trip 2"]
    }
  },

  render: function() {
    // can not read property map of undefined.
    // see comment in SuggestionList.

    console.log('props', this.props);
    var tripList = this.props.usersTrips.map(function(trip) {
      return <TripItem
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
