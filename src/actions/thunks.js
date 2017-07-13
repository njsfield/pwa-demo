import {setResults, setCredentials, setHistoricalResults, setOffline} from './index';

// Utils
const checkStatus = (res) =>
  res.status >= 200 && res.status < 300 ? res : new Error('unauthenticated');


export const getResults = () => dispatch => {
  // Post request to get data
  // If successful, dispatch:
  //   online:true
  //   setResults:results
  // If unsuccessful, dispatch:
  //   offline:true
  fetch(`/data`, {
    method: 'post',
    credentials: 'include', // important!
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then(checkStatus)
    .then(res => res.json())
    .then(res => {
      dispatch(setOffline(false));
      dispatch(setResults(res.results));
    })
    .catch(() => dispatch(setOffline(true)));
};

export const getHistoricalResults = () => dispatch => {
  // Post request to get historical data
  // If successful, dispatch:
  //   online:true
  //   setHistoricalResults:results
  // If unsuccessful, dispatch:
  //   offline:true
  fetch(`/historical`, {
    credentials: 'include', // important!
    method: 'post',
  })
    .then(checkStatus)
    .then(res => res.json())
    .then(res => {
      dispatch(setOffline(false));
      dispatch(setHistoricalResults(res.results));
    })
    .catch(() => dispatch(setOffline(true)));
};

export const logIn = details => dispatch => {
  // Post request to authenticate
  // body:
  //   user:     string
  //   password: string
  fetch(`/login`, {
    method: 'post',
    body: JSON.stringify(details),
    credentials: 'include', // important!
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then(res => res.json())
    .then(checkStatus)
    .then(() => dispatch(setCredentials(true)))
    .catch(e => console.log(e));
};
