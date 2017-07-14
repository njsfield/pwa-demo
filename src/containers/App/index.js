import React, { Children } from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import NavBar from './NavBar';
import Wrapper from 'components/Wrapper';

// Main App
const App = (props) => (
  <Wrapper>
    <NavBar />
    <AppHeader />
      {Children.toArray(props.children)}
    <AppFooter />
  </Wrapper>
);


// Main Export
export default App;
