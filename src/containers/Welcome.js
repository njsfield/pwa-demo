import React from 'react';
import { connect } from 'react-redux';
import { getResults } from '../actions/thunks';
import { Redirect } from 'react-router-dom'

// Main View
// If no credentials, redirect to login
// Otherwise use regular setTimeout to trigger getResults action
// (setTimeout is always run on re-render)
const Welcome = ({triggerGetResults, credentials, results, offline}) => {
  if (!credentials) {
    return <Redirect to="/login" /> 
  } else {
    // Trigger getResults 
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

// Pass triggerGetResults as dispatch function
// For getResults
const mapDispatchToProps = (dispatch) => ({
  triggerGetResults(apiKey) {
    dispatch(getResults(apiKey));
  }
});

// Main export
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
