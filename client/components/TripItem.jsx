var React = require('react');
var ReactDOM = require('react-dom');
var DeleteHelper = require('../requests/delete.js');

var TripItem = React.createClass({

	handleClick: function() {
		window.globalStateTripId = this.props.trip.id;
    window.globalStateTripName = this.props.trip.name;
    window.globalStateTaskId = null;
    $('.tripItem').parent().fadeToggle(1000);
		console.log('set global trip state to', window.globalStateTripId);
	},

  handleTripClick: function(e) {
    e.stopPropagation();
    var toDelete = this.props.trip.id;
    window.globalStateTripName = 'please select a trip';
    window.globalStateTripId = null;
    window.globalStateTaskId = null;
    DeleteHelper.deleteTripById(toDelete);
    $('.tripItem').parent().fadeToggle('fast');
  },



  render: function() {
    return (
      <p className="tripItem" onClick={this.handleClick}>
      <i className="fa fa-times-circle" onClick={this.handleTripClick}></i>
        {this.props.trip.name}
      </p>
    )
  }
})

module.exports = TripItem;
