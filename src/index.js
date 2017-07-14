import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './containers/App';
import serviceWorker from './sw.js';
import Landing from './containers/Landing';
import Login from './containers/Login';
import Welcome from './containers/Welcome';
import store from './reducers';


const FourOhFour = () => <h1>404</h1>;

// Main Render
render((
  <BrowserRouter>
    <Provider store={store}>
      <App>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/welcome" component={Welcome} />
          <Route component={FourOhFour} />
        </Switch>
      </App>
    </Provider>
  </BrowserRouter>
), document.getElementById('app'));

// Start Service Worker (on production only!)
if (process.env.NODE_ENV === 'production') {
  // @TODO:
  // 1. Eject app
  // 2. Replace this call with offlinePlugin.install() for AppCache support
  serviceWorker();
}
