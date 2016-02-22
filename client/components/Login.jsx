var React = require('react');
var ReactDOM = require('react-dom');

var Login = React.createClass({
  showLogin: function(){  
    $(".form").fadeToggle('fast');
    $(".form-wrapper").fadeToggle('fast');
  },
  cancel: function(){
    $(".form-wrapper").fadeToggle('fast');
    $(".form").fadeToggle('fast');
  },

  render: function() {
    return (
      <div>
      <button className="top-bar-login" onClick={this.showLogin}>Login</button>
        <div className="form-wrapper"></div>
          <form className="form" onClick={this._handleClick} >
          <h2>Login</h2>
            <div className="form__error-wrapper">
              <p className="form__error form__error--username-taken">Sorry, but this username is already taken.</p>
              <p className="form__error form__error--username-not-registered">This username does not exist.</p>
              <p className="form__error form__error--wrong-password">Wrong password.</p>
              <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
              <p className="form__error form__error--failed">Something went wrong, please try again!</p>
            </div>
            <div className="form__field-wrapper">
              <input className="form__field-input" type="text" id="username" placeholder="username"  autoCorrect="off" autoCapitalize="off" spellCheck="false" />
              <label className="form__field-label" htmlFor="username">Username</label>
            </div>
            <div className="form__field-wrapper">
              <input className="form__field-input" id="password" type="password" placeholder="••••••••••" />
              <label className="form__field-label" htmlFor="password">Password</label>
            </div>
              <a href='#' className="form__cancel" onClick={this.cancel} >Cancel</a>
              <button className="form__submit-btn" type="submit">Submit</button>
          </form>
      </div>
    )
  }
})

module.exports = Login;
