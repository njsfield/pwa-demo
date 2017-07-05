import { setResults, setOffline } from './index'

export const getResults = () => (dispatch) => {
  // Fire request to get data
  // If successful, dispatch results action 
  // If unsuccessful, dispatch offline:true action
  fetch('http://localhost:9000/data', {
    method: 'get'
  })
    .then((res) => res.json()) 
    .then((res) => dispatch(setResults(res.results)))
    .catch(()   => dispatch(setOffline(true)))
}
