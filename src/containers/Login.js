import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions/thunks';
import { Redirect } from 'react-router-dom'

// Login (stateful) 
class Login extends Component { 
  // Get props
  constructor(props) {
    super() 
  }
  // Internal state
  state = {
    user: '', 
    password: '' 
  }
  // Form helper
  preventSubmit = (e) => {
    e.preventDefault();
    this.props.triggerLogIn(this.state);
  };
  // Set User
  setUser = (e) => {
    this.setState({user: e.target.value, password: this.state.password});
  };
  
  // Set password 
  setPassword = (e) => {
    this.setState({password: e.target.value, user: this.state.user});
  };

  // Main render
  render() {
    // If no credentials:
    // Serve form
    if (!this.props.credentials) {
      return (
        <form onSubmit={this.preventSubmit}>
          <label for="user">User</label>
            <input 
              onInput={this.setUser}
              type="text"
              name="user"
              value={this.state.user}
            /> 
          <label for="password">Passsword</label>
            <input
              onInput={this.setPassword} 
              type="password" 
              name="password" 
              value={this.state.password}
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
const mapStateToProps = state => ({credentials: state.credentials});

// Pass triggerLogIn to dispatch logIn action
const mapDispatchToProps = (dispatch) => ({
  triggerLogIn(details) {
    dispatch(logIn(details));
  }
});

// Main Connect
export default connect(mapStateToProps, mapDispatchToProps)(Login);


