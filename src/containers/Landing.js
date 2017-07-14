import React  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Simple Functional component
// With login link
const Landing = ({credentials, results, offline}) => {
  // If credentials presents
  return (
    <div className="landing">
      <h1>Welcome</h1>
      <Link to="/welcome">Begin</Link>
    </div>
  );
}

// Pass all global state
const mapStateToProps = state => (state);

// Main export
export default connect(mapStateToProps)(Landing);
