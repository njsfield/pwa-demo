import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from './thunks';
import { setUsername, setPassword } from './actions';
import { Redirect } from 'react-router-dom'

// Login (stateful)
class Login extends Component {

  constructor(props) {
    super()
  }

  preventSubmit = (e) => {
    e.preventDefault();
    this.props.triggerLogIn();
  }

  render(){
    // If no credentials, serve form
    if (!this.props.credentials) {
      return (
        <form onSubmit={this.preventSubmit}>
          <label htmlFor="user">User</label>
            <input
              onChange={this.props.triggerSetUsername}
              type="text"
              name="user"
              value={this.props.username}
            />
          <label htmlFor="password">Passsword</label>
            <input
              onChange={this.props.triggerSetPassword}
              type="password"
              name="password"
              value={this.props.password}
            />
          <button type="submit">Log In</button>
        </form>
      )
    } else {
      // If credentials in global state
      // Redirect to welcome
      return <Redirect to="/welcome" />
    }
  }
}


// Pass credentials to component
const mapStateToProps = state => ({
  credentials: state.global.credentials,
  username: state.login.username,
  password: state.login.password,
});

// Pass triggerLogIn to dispatch logIn action
const mapDispatchToProps = (dispatch) => ({
  triggerLogIn() {
    dispatch(logIn());
  },
  triggerSetUsername(e) {
    dispatch(setUsername(e.target.value));
  },
  triggerSetPassword(e) {
    dispatch(setPassword(e.target.value));
  }
});

// Main Connect
export default connect(mapStateToProps, mapDispatchToProps)(Login);
