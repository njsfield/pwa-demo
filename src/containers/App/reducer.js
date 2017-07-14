// Called to set credentials
// Either true or false

import combine from 'utils/combine'

const inititialState = {
  credentials: false,
  offline: false
}

// Global reducer
const reducer = (state = inititialState, action) => {
  switch (action.type) {
    case 'SET_CREDENTIALS':
      return combine(state, {credentials: action.credentials});
    case 'SET_OFFLINE':
      return combine(state, {offline: action.offline});
    default:
      return state;
  }
}

export default reducer;
