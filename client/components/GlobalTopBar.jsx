var React = require('react');
var ReactDOM = require('react-dom');
var Login = require('./Login.jsx');
var SignUp = require('./SignUp.jsx');
var TripDropdownList = require('./TripDropdownList.jsx');

var GlobalTopBar = React.createClass({
	handleParticipantsClick: function(){
		$(".invitepopup").fadeToggle('fast');
	},

	handleTripsClick: function(){
		$(".tripDropdownListDiv").fadeToggle('fast');
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
				          <i className="fa fa-plus-circle" onClick={this.handleTripsClick}></i>Manage Trips
				          <span>      </span>
				          <i className="fa fa-plus-circle" onClick={this.handleParticipantsClick}></i> Invite trip participants
				        </p>
				      </div>
				    </div>
				  </div>
				</div>

				<TripDropdownList usersTrips={this.state.tripsInUser} addNewTrip={this.props.addNewTrip}/>

				<div className='invitepopup'>
    			  <input type="text" value="" className="tags"/>
    			  <div className="jq_tags_editor">
	    			<div className="jq_tags_tokens"></div>
    				<input type="text" className="jq_tags_editor_input"/>
    			  </div>
    			  <button className="inviteUsers">Invite Users</button>
				</div>

    			<Login className="login-form" login={this.props.signin}/>
    			<SignUp className="signup-form"/>

			</div>
		);
	}
});

module.exports = GlobalTopBar;
