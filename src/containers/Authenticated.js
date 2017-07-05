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
  componentWillMount() {
    if (!this.props.credentials) {
      this.props.triggerSetCredentials({
        user: this.props.user, 
        apiKey: this.props.apiKey
      }); 
    }
  }
  render() {
    return (
      <Redirect to="/"/> 
    ) 
  }
}

// Give all State
const mapStateToProps = state => ({credentials: state.credentials});

const mapDispatchToProps = (dispatch) => ({
  triggerSetCredentials(credentials) {
    dispatch(setCredentials(credentials));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Authenticated);
