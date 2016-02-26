var React = require('react');
var ReactDOM = require('react-dom');

var SignUp = React.createClass({
  signup: function(e) {
    e.preventDefault();
    var signup = {
      username: $('.form__field-input-signup-user').val(),
      password: $('.form__field-input-signup-password').val()
    }

    this.props.signup(signup);
    this.cancel();
  },

  showLogin: function(){  
    $(".form-signup").fadeToggle('fast');
    $(".form-wrapper-signup").fadeToggle('fast');
  },

  cancel: function(){
    $(".form-wrapper-signup").fadeToggle('fast');
    $(".form-signup").fadeToggle('fast');
  },

  render: function() {
    return (
      <div>
      <button className="top-bar-signup" onClick={this.showLogin}>Sign Up</button>
        <div className="form-wrapper-signup"></div>
          <form className="form-signup" onSubmit={this.signup} >
          <h2>Sign Up</h2>
            <div className="form__field-wrapper-signup">
              <input className="form__field-input-signup-user" type="text" id="username" placeholder="username"  autoCorrect="off" autoCapitalize="off" spellCheck="false" />
              <label className="form__field-label-signup" htmlFor="username">Username</label>
            </div>
            <div className="form__field-wrapper-signup">
              <input className="form__field-input-signup-password" id="password" type="password" placeholder="••••••••••" />
              <label className="form__field-label-signup" htmlFor="password">Password</label>
            </div>
              <a href='#' className="form__cancel-signup" onClick={this.cancel} >Cancel</a>
              <button className="form__submit-btn-signup" type="submit">Submit</button>
          </form>
      </div>
    )
  }
})

module.exports = SignUp;
