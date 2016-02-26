var React = require('react');
var ReactDOM = require('react-dom');
var Login = require('./Login.jsx');
// var SignUp = require('./SignUp.jsx');
var TripDropdownList = require('./TripDropdownList.jsx');
var Logout = require('./Logout.jsx');

var GlobalTopBar = React.createClass({
	handleParticipantsClick: function(){
		$(".invitepopup").fadeToggle('fast');
	},

	handleTripsClick: function(){
		$(".tripDropdownListDiv").fadeToggle('fast');
	},

	handleInviteClick: function(e) {
		e.preventDefault();
		var input = $('.inviteUsers').val();
		this.props.getUser(input);
		this.cancel();
	},
	cancel: function() {
		$('.invitepopup').fadeToggle('fast');
	},
	getInitialState: function() {
		return {
			tripsInUser: []
		}
	},

	render: function(){
		return (
			<div>

				<div className="darkgray">
				<h1 className="title">Travel-Consensus</h1>
				  <div className="container">
				    <div className="row">
				      <div className="six columns offset-by-one-third">
				        <p>
				          <i className="fa fa-plus-circle" onClick={this.handleTripsClick}></i> Manage Trips
				          <span>      </span>
				          <i className="fa fa-plus-circle" onClick={this.handleParticipantsClick}></i> Invite trip participants
				        </p>
				      </div>
				    </div>
				  </div>
				</div>

				<TripDropdownList usersTrips={this.state.tripsInUser} addNewTrip={this.props.addNewTrip}/>

				<div className='invitepopup'>
					<form onSubmit={this.handleInviteClick}>
						<p>Invite People</p>
						<input className="inviteUsers" type="text"></input>
						<button className="inviteUsers"type="submit">Invite Users</button>
					</form>
				</div>

    			<Login className="login-form" signup={this.props.signup} login={this.props.signin} />

    			<Logout className="logout"/>

			</div>
		);
	}
});
// <SignUp className="signup-form" signup={this.props.signup}/> was on line 58
module.exports = GlobalTopBar;
