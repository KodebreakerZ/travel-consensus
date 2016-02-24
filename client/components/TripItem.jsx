var React = require('react');
var ReactDOM = require('react-dom');

var TripItem = React.createClass({
  render: function() {
    return (
      <p className="trip">
        <span className="trip-name">{this}</span>
      </p>
    )
  }
})

module.exports = TripItem;
