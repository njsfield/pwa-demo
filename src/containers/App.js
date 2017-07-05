import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../reducers';
import Landing from './Landing';
import Authenticated from './Authenticated';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/authenticated/:user/:apiKey" component={(props) => {
            const {user, apiKey} = props.match.params;
            return <Authenticated user={user} apiKey={apiKey} />
            }} 
          />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;
