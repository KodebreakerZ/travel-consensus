var React = require('react');
var ReactDOM = require('react-dom');
var Login = require('./Login.jsx');
var SignUp = require('./SignUp.jsx');

var GlobalTopBar = React.createClass({
	handleClick: function(){
		$(".invitepopup").fadeToggle('fast');
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
				          <i className="fa fa-plus-circle" onClick={this.handleClick}></i>Manage Trips
				          <span>      </span>
				          <i className="fa fa-plus-circle" onClick={this.handleClick}></i> Invite trip participants
				        </p>
				      </div>
				    </div>
				  </div>
				</div>
				<div className='invitepopup'>
    			<input type="text" value="" className="tags"/>
    			<div className="jq_tags_editor">
	    			<div className="jq_tags_tokens"></div>
    				<input type="text" className="jq_tags_editor_input"/>
    			</div>
    			<button className="inviteUsers">Invite Users</button>
				</div>

    			<Login className="login-form"/>
    			<SignUp className="signup-form"/>

			</div>
		);
	}
});

module.exports = GlobalTopBar;
