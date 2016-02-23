import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/lib/text-field';
import Colors from 'material-ui/lib/styles/colors';

const styles = {
  underlineStyle: {
    borderColor: Colors.orange500,
  },
};

//TODO
export default class ChatRoom extends Component {
	componentDidMount(){
	  this.refs.focuschat.focus(); 
	}

	render(){
		return (
	    <div className="chatbox">
	      <div className="user-chat">

			    <TextField
			      underlineFocusStyle={styles.underlineStyle}
			      className="chatline"
			      ref="focuschat"
			      style={{"width":"40rem"}}
			    />
	        <span id="emoji" onClick={this.toggleEmoji} className="fa fa-smile-o"></span>
		      <div className="send-message" onClick={this._onClick}>
		        <span className="fa fa-paper-plane-o"></span>
	      	</div>
	      </div>
	    </div>
    );
  }
}