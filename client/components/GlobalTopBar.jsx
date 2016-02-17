var React = require('react');
var ReactDOM = require('react-dom');

var GlobalTopBar = React.createClass({
	handleClick: function(){
		$(".invitepop").fadeToggle('fast'); /*  ~~~~ Just going to use fadeToggle for now ~~~~   */
	  // if(this.state.open) {
	  //   $('.invitepop').slideFadeToggle();
	  //   this.setState({
	  //     open: false,
	  //   });
	  // }
	  // $.fn.slideFadeToggle = function(easing, callback) {  /* ~~~~ POS only runs on boolean ~~~~~ */
	  //   return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
	  // };
	  // console.log(this.state.open)
	  // return this.setState({open: true,class: "invitepop"});
	},
	// getInitialState: function(){
	//    return {
	//      open: false,
	//    }
	// },
	render: function(){
		return (
			<div>
				<div className="darkgray">
				  <div className="container">
				    <div className="row">
				      <div className="three columns offset-by-nine">
				        <p><i className="fa fa-plus-circle" onClick={this.handleClick}></i> Invite trip participants</p>
				      </div>
				    </div>
				  </div>
				</div>
				<div className='invitepop'>
				    <form method="post" id="new_users" action="/invitelist">
			        <p><label for="shortlink">Shortlink</label><input type="text" size="30" name="shortlink" id="shortlink" /></p>
			        <p><label for="body">Users</label><textarea rows="6" name="body" id="body" cols="35"></textarea></p>
			        <p><input type="submit" value="Add Users" name="commit" id="user_submit"/> or <a className="close" onClick={this.handleClick}>Cancel</a></p>
				    </form>
				</div>
			</div>
		);
	}
});

module.exports = GlobalTopBar;
