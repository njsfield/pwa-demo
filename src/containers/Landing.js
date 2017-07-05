import React  from 'react';
import { connect } from 'react-redux';

const Landing = ({credentials, results, offline}) => { 
  console.log(credentials, results, offline)
  return (
    <div className="landing">
      <h1>Hello</h1>
      <a href="http://localhost:9000/login">External Login</a>
    </div>
  );
}

// Give all State
const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Landing);
