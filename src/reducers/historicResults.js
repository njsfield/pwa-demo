// Called to set historical results

const results = (state = null, action) => {
  switch (action.type) {
    case 'HISTORICAL_RESULTS':
      return action.results;
    default:
      return state;
  }
}

export default results;
