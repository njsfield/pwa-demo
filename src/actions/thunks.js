import {setResults, setCredentials, setHistoricalResults, setOffline} from './index';

export const getResults = apiKey => dispatch => {
  // Post request to get data
  // If successful, dispatch:
  //   online:true
  //   setResults:results
  // If unsuccessful, dispatch:
  //   offline:true
  fetch(`/data`, {
    method: 'post',
    body: JSON.stringify({apiKey}),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
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
    method: 'post',
  })
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
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then(res => res.json())
    .then(res => {
      dispatch(setCredentials(res));
    })
    .catch(e => console.log(e));
};
