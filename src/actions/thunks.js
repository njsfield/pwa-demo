import { setResults, setOffline } from './index'

export const getResults = (apiKey) => (dispatch) => {
  // Fire request to get data
  // If successful, dispatch:
  //   online:true 
  //   setResults:results
  // If unsuccessful, dispatch: 
  //   offline:true 
  fetch(`http://localhost:9000/data?apiKey=${apiKey}`, {
    method: 'get'
  })
    .then((res) => res.json()) 
    .then((res) => {
      dispatch(setOffline(false))
      dispatch(setResults(res.results))
    })
    .catch(()   => dispatch(setOffline(true)))

}
