import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../reducers';
import Landing from './Landing';
import Login from './Login';
import Welcome from './Welcome';

// Fallback to unknown routes
const FourOhFour = () => <h1>404</h1>;

// Main Router
const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/welcome" component={Welcome} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

// Main Export
export default App;
