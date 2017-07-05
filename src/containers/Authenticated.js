import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCredentials } from '../actions';
import { Redirect } from 'react-router-dom'

// Simple component to trigger setCredentials action
// Then redirect
class Authenticated extends Component {
  constructor(props) {
    super();
  }
  // Fire action to set user/apiKey
  componentWillMount() {
    if (!this.props.credentials) {
      this.props.triggerSetCredentials({
        user: this.props.user, 
        apiKey: this.props.apiKey
      }); 
    }
  }
  // Perform redirect
  render() {
    return (
      <Redirect to="/"/> 
    ) 
  }
}

// Pass credentials 
const mapStateToProps = state => ({credentials: state.credentials});

// Allow setCredentials action via
// triggerSetCredentials
const mapDispatchToProps = (dispatch) => ({
  triggerSetCredentials(credentials) {
    dispatch(setCredentials(credentials));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Authenticated);
