import React, { Children } from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Nav from 'containers/Nav';
import Wrapper from 'components/Wrapper';

// Main App
const App = (props) => (
  <Wrapper>
    <Nav />
    <AppHeader />
      {Children.toArray(props.children)}
    <AppFooter />
  </Wrapper>
);


// Main Export
export default App;
