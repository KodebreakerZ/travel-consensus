var React = require('react');
var ReactDOM = require('react-dom');

var SignUp = React.createClass({
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
          <form className="form-signup" onClick={this._handleClick} >
          <h2>Sign Up</h2>
            <div className="form__error-wrapper-signup">
              <p className="form__error form__error--username-taken-signup">Sorry, but this username is already taken.</p>
              <p className="form__error form__error--username-not-registered-signup">This username does not exist.</p>
              <p className="form__error form__error--wrong-password-signup">Wrong password.</p>
              <p className="form__error form__error--field-missing-signup">Please fill out the entire form.</p>
              <p className="form__error form__error--failed-signup">Something went wrong, please try again!</p>
            </div>
            <div className="form__field-wrapper-signup">
              <input className="form__field-input-signup" type="text" id="username" placeholder="username"  autoCorrect="off" autoCapitalize="off" spellCheck="false" />
              <label className="form__field-label-signup" htmlFor="username">Username</label>
            </div>
            <div className="form__field-wrapper-signup">
              <input className="form__field-input-signup" id="password" type="password" placeholder="••••••••••" />
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
