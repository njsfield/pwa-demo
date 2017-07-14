import { setCredentials } from 'containers/App/actions';
import { checkStatus } from 'utils/request';

export const logIn = () => (dispatch, getState) => {

  // Get login state
  const {username, password} = getState().login;

  // Post request to authenticate
  // body:
  //   user:     string
  //   password: string
  fetch(`/login`, {
    method: 'post',
    body: JSON.stringify({username, password}),
    credentials: 'include', // important!
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then(checkStatus)
    .then(res => res.json())
    .then(() => dispatch(setCredentials(true)))
    .catch(() => dispatch(setCredentials(false)));
};
