import React from 'react';
import { connect } from 'react-redux';
import { getResults } from '../actions/thunks';
import { Redirect } from 'react-router-dom'

// Simple component to trigger setCredentials action
// Then redirect
const Welcome = ({triggerGetResults, credentials, results, offline}) => {
  if (!credentials) {
    return <Redirect to="/" /> 
  } else {
    // Trigger get results action
    setTimeout(() => triggerGetResults(credentials.apiKey), 500);
    return (
      <div>
        {offline ? <h1>Offline</h1> : <h1>Online</h1>}
        <h1>Welcome. Here are your random number results</h1>
        <ul>
          {(results || []).map(r => <li>{r}</li>)}
        </ul>
      </div>
    ) 
  }
}



// Pass all state 
const mapStateToProps = state => (state);

// Allow setCredentials action via
// triggerSetCredentials
const mapDispatchToProps = (dispatch) => ({
  triggerGetResults(apiKey) {
    dispatch(getResults(apiKey));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
