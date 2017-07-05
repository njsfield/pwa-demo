import { combineReducers } from 'redux';
import { createStore, compose, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import credentials from './credentials';
import results from './results';
import offline from './offline';

// First combine
const reducers = combineReducers({
  credentials,
  results,
  offline
}); 

// Enhancers
// ++ LocalStorage
// ++ Thunks
const enhancers = compose(
  persistState(null, {key: 'data'}),
  applyMiddleware(thunk)
);

// Main Export
export default createStore(reducers, enhancers) 
