// Called to set credentials

const credentials = (state = null, action) => {
  switch (action.type) {
    case 'CREDENTIALS':
      return action.credentials;
    default:
      return state;
  }
}

export default credentials;
