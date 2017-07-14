import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import NavBar from './NavBar';
import Wrapper from 'components/Wrapper';
import { Provider } from 'react-redux';
import store from 'reducers';
import Landing from 'containers/Landing';
import Login from 'containers/Login';
import Welcome from 'containers/Welcome';

// Fallback to unknown routes
const FourOhFour = () => <h1>404</h1>;

// Main Router
const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Wrapper>
        <NavBar />
        <AppHeader />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/welcome" component={Welcome} />
          <Route component={FourOhFour} />
        </Switch>
        <AppFooter />
      </Wrapper>
    </Provider>
  </BrowserRouter>
);

// Main Export
export default App;
