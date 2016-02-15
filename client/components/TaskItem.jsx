var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  render: function() {
    <div className={this.props.className}>
      <hr />
      <p>{this.props.task}</p>
    </div>
  }
})