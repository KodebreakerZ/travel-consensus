var React = require('react');
var ReactDOM = require('react-dom');

var GlobalTopBar = React.createClass({
	render: function(){
		return (
			<div className="darkgray">
			  <div className="container">
			    <div className="row">
			      <div className="three columns offset-by-nine">
			        <p><i className="fa fa-plus-circle"></i> Invite trip participants</p>
			      </div>
			    </div>
			  </div>
			</div>
		);
	}
});

// ReactDOM.render (<GlobalTopBar />,document.getElementsById('react-main-mount'))

// module.exports = GlobalTopBar;