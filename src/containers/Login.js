import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions/thunks';
import { Redirect } from 'react-router-dom'

// Then redirect
const Login = ({triggerLogIn, credentials}) => {

  // Form helper
  const preventSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    triggerLogIn({user: "john", password: "1234"}); 
  };
    
  if (!credentials) {
    return (
      <form onSubmit={preventSubmit}>
        <label for="user">User</label>
          <input type="text" name="user" /> 
        <label for="password">Passsword</label>
          <input type="password" name="password"/> 
        <button type="submit">Log In </button>
      </form>
    ) 
  } else {
    return <Redirect to="/welcome" /> 
  }
}


// Pass credentials 
const mapStateToProps = state => ({credentials: state.credentials});

// triggerLogIn
const mapDispatchToProps = (dispatch) => ({
  triggerLogIn(details) {
    dispatch(logIn(details));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);


