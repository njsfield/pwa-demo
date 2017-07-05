import React  from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Landing = ({credentials, results, offline}) => { 
  if (credentials) {
    return <Redirect to="/welcome" />
  } else {
    return (
      <div className="landing">
        <h1>Hello</h1>
        <a href="http://localhost:9000/login">External Login</a>
      </div>
    );
  }
}

// Give all State
const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Landing);
