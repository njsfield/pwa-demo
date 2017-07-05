import React  from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

// Simple Functional component
// With login link
const Landing = ({credentials, results, offline}) => { 
  // If credentials presents
  // Redirect
  if (credentials) {
    return <Redirect to="/welcome" />
  } else {
    return (
      <div className="landing">
        <h1>Welcome new User!</h1>
        <Link to="/login">Click to login</Link>
      </div>
    );
  }
}

// Pass all global state 
const mapStateToProps = state => (state);

// Main export
export default connect(mapStateToProps)(Landing);
