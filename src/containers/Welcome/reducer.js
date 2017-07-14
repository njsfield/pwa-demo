// Called to set credentials
// Either true or false

import combine from 'utils/combine'

const inititialState = {
  results: [],
  historicResults: []
}

// Global reducer
const reducer = (state = inititialState, action) => {
  switch (action.type) {
    case 'SET_RESULTS':
      return combine(state, {results: action.results});
    case 'SET_HISTORICAL_RESULTS':
      return combine(state, {historicResults: action.results});
    default:
      return state;
  }
}

export default reducer;
