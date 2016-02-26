var React = require('react');
var ReactDOM = require('react-dom');

var TripItem = React.createClass({

	handleClick: function() {
		window.globalStateTripId = this.props.trip.id;
    window.globalStateTripName = this.props.trip.name;
    window.globalStateTaskId = null;
    $('.tripItem').parent().fadeToggle(1000);
		// console.log('set global trip state to', window.globalStateTripId);
	},


  render: function() {
    return (
      <p className="tripItem" onClick={this.handleClick}>
        {this.props.trip.name}
      </p>
    )
  }
})

module.exports = TripItem;
