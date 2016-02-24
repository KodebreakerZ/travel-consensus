var React = require('react');
var ReactDOM = require('react-dom');

var TripItem = React.createClass({
  render: function() {
    return (
      <p className="tripItem">
        {this.props.trip.name}
      </p>
    )
  }
})

module.exports = TripItem;
