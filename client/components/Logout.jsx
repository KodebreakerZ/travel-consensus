var React = require('react');
var ReactDOM = require('react-dom');

var Logout = React.createClass({
  logout: function(e){
    e.preventDefault();
    window.globalToken = null;
    // window.globalStateTripId = null;
    location.reload();
  },
  cancel: function(){
    $(".form-wrapper").fadeToggle('fast');
    $(".form").fadeToggle('fast');
  },
  render: function() {
    return (
      <div>
      <button className="top-bar-logout" onClick={this.logout}>Logout</button>
          
      </div>
    )
  }
})

module.exports = Logout;
