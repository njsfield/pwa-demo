import React from 'react';
import {connect} from 'react-redux';
import {getResults,getHistoricalResults} from 'containers/Welcome/thunks';
import {Redirect} from 'react-router-dom';

// Main View
// If no credentials, redirect to login
// Otherwise use regular setTimeout to trigger getResults action
// (setTimeout is always run on re-render)
const Welcome = ({
  triggerGetResults,
  triggerGetHistoricalResults,
  credentials,
  results,
  historicResults,
  offline,
}) => {
  if (!credentials) {
    return <Redirect to="/login" />;
  } else {
    // Trigger getResults
    setTimeout(() => triggerGetResults(), 500);
    return (
      <div>
        {offline ? <h1>Offline</h1> : <h1>Online</h1>}
        <h1>Welcome. Here are your random number results</h1>
        <ul>
          {(results || []).map(r =>
            <li>
              {r}
            </li>,
          )}
        </ul>
        {/* Trigger to get oldest historical results */}
        <button onClick={triggerGetHistoricalResults}>Get Historical Data</button>
        <ul>
          {(historicResults || []).map(r =>
            <li key={r}>
              {r}
            </li>,
          )}
        </ul>
      </div>
    );
  }
};

// Pass all state
const mapStateToProps = state => ({
  credentials: state.global.credentials,
  offline: state.global.offline,
  results: state.welcome.results,
  historicResults: state.welcome.historicResults,
});


// Pass triggerGetResults as dispatch function
// For getResults
const mapDispatchToProps = dispatch => ({
  triggerGetResults() {
    dispatch(getResults());
  },
  triggerGetHistoricalResults() {
    dispatch(getHistoricalResults());
  },
});

// Main export
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
