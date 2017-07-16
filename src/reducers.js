import { combineReducers } from "redux";
import { createStore, compose, applyMiddleware } from "redux";
import persistState from "redux-localstorage";
import thunk from "redux-thunk";
import global from "./containers/App/reducer";
import login from "./containers/Login/reducer";
import welcome from "./containers/Welcome/reducer";

// Combine global, login & welcome reducers
const reducers = combineReducers({
  global,
  login,
  welcome
});

// Enhancers
// ++ LocalStorage
// ++ Thunks
const enhancers = compose(
  persistState(),
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Main Export
export default createStore(reducers, enhancers);
