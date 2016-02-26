var React = require('react');
var ReactDOM = require('react-dom');
var TripItem = require('./TripItem.jsx');

var TripDropdownList = React.createClass({

  getInitialState: function() {
    return { newTrip: '' }
  },

  showNewTripForm: function() {
    $('.newTripForm').fadeToggle('fast');
  },

  handleTextChange: function(e) {
    this.setState( {newTrip: e.target.value})
    newTrip = e.target.value;
    console.log('setting trip to', newTrip);
  },

  handleSubmit: function(e) {
    if(!window.globalToken){
      alert('Please sign in.')
    } else {
      e.preventDefault();
      var tripName = this.state.newTrip.trim();
      var tripAndUserObject = {
        name: tripName,
        id_user: window.globalStateUserId
      };
      this.props.addNewTrip(tripAndUserObject);
      $('.newTripInput').val('')
    }
  },


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
        <h4 onClick={this.showNewTripForm} >Add A Trip</h4>
        <form className="newTripForm" onSubmit={this.handleSubmit} >
          <input type="text"
                 className="newTripInput"
                 placeholder="new trip name"
                 onChange={this.handleTextChange}
          />
        </form>
      </div>
    )
  }

  // Upon state change (adding a new trip), show new trip
  // componentDidUpdate: function() {
  // }

});

module.exports = TripDropdownList;
