import { setResults, setCredentials, setOffline } from './index'

export const getResults = (apiKey) => (dispatch) => {
  // Fire request to get data
  // If successful, dispatch:
  //   online:true 
  //   setResults:results
  // If unsuccessful, dispatch: 
  //   offline:true 
  fetch(`http://localhost:9000/data`, {
    method: 'post',
    body: JSON.stringify({apiKey}),
    headers: new Headers({
      'Content-Type': 'application/json' 
    })
  })
    .then((res) => res.json()) 
    .then((res) => {
      dispatch(setOffline(false))
      dispatch(setResults(res.results))
    })
    .catch(()   => dispatch(setOffline(true)))

}

export const logIn = (details) => (dispatch) => {
  // Fire request to authenticate 
  // body:
  //   user:     string
  //   password: string
  fetch(`http://localhost:9000/login`, {
    method: 'post',
    body: JSON.stringify(details),
    headers: new Headers({
        'Content-Type': 'application/json'
    })
  })
    .then((res) => res.json()) 
    .then((res) => {
      dispatch(setCredentials(res))
    })
    .catch((e) => console.log(e))

}
