// Called to set results

const results = (state = null, action) => {
  switch (action.type) {
    case 'RESULTS':
      return action.results;
    default:
      return state;
  }
}

export default results;
