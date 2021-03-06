import React  from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { setCredentials } from 'containers/App/actions';

// Nav Bar
// Display 'logout' link if logged in
const NavBar = ({credentials, triggerSetCredentials}) => {
    return (
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        { credentials ?
          <Link to="#" onClick={triggerSetCredentials}>Logout</Link> :
          null
        }
      </nav>
    );
  }

// Pass all global state
const mapStateToProps = state => ({
  credentials: state.global.credentials
});

// Pass triggerSetCredentials (with false on call)
const mapDispatchToProps = dispatch => ({
  triggerSetCredentials(e) {
    e.preventDefault();
    dispatch(setCredentials(false));
  }
});


// Main export
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
