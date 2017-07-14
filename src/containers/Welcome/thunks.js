import {setResults, setHistoricalResults} from './actions';
import {setOffline} from 'containers/App/actions';

import { checkStatus } from 'utils/request';


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
