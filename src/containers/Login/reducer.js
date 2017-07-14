// Called to set credentials
// Either true or false

import combine from 'utils/combine'

const inititialState = {
  username: '',
  password: ''
}

// Global reducer
const reducer = (state = inititialState, action) => {
  switch (action.type) {
    case 'ENTER_USERNAME':
      return combine(state, {username: action.username});
    case 'ENTER_PASSWORD':
      return combine(state, {password: action.password});
    default:
      return state;
  }
}

export default reducer;
