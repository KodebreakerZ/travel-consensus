var React = require('react');
var ReactDOM = require('react-dom');

var Login = React.createClass({
  login: function(e){
    e.preventDefault();
    var login = {
      username: $('.form__field-input-user').val(),
      password: $('.form__field-input-password').val()
    }

    this.props.login(login)
    this.cancel()
    // console.log('calling login', this.props)
  },
  componentDidMount: function(){
    console.log('globalFailure', window.globalFailure)
    //  if(window.globalFailure === true && window.globalToken === null) {
    //   console.log('failure')
    //   this.showLogin();
    //   this.failure();
    // }
    if(window.globalToken === null && window.globalFailure === undefined) {
      this.showLogin();
      $(".form__cancel").hide()
    }
  },
  componentWillUpdate: function(){
    console.log('componentDidUpdate')
  },
  showLogin: function(){  
    $(".form").fadeToggle('fast');
    $(".form-wrapper").fadeToggle('fast');
    $(".form__failure").hide()
    $(".top-bar-login").hide()
  },
  cancel: function(){
    $(".form-wrapper").fadeToggle('fast');
    $(".form").fadeToggle('fast');
  },
  signup: function(e) {
    e.preventDefault();
    var signup = {
      username: $('.form__field-input-user').val(),
      password: $('.form__field-input-password').val()
    }

    this.props.signup(signup);
    this.cancel();
  },
  failure: function() {
    $(".form__failure").fadeToggle('fast');
  },

  render: function() {
    return (
      <div>
      <button className="top-bar-login" onClick={this.showLogin}>Signup/Signin</button>
        <div className="form-wrapper"></div>
          <form className="form">
          <h4 className="login-h4">Signup || Signin</h4>
            <div className="form__field-wrapper">
              <input className="form__field-input-user" type="text" id="username" placeholder="username"  autoCorrect="off" autoCapitalize="off" spellCheck="false" />
              <label className="form__field-label" htmlFor="username">Username</label>
            </div>
            <div className="form__field-wrapper">
              <input className="form__field-input-password" id="password" type="password" placeholder="••••••••••" />
              <label className="form__field-label" htmlFor="password">Password</label>
            </div>
              <a href='#' className="form__cancel" onClick={this.cancel} >Cancel</a>
              <p className='form__failure'>Username or Password is incorrect.</p>
              <button className="form__submit-btn-signup" type="submit" onClick={this.signup}>Signup</button>
              <button className="form__submit-btn" type="submit" onClick={this.login}>Signin</button>
          </form>
      </div>
    )
  }
})

module.exports = Login;
