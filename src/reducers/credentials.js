// Called to set credentials
// Either true or false

const credentials = (state = false, action) => {
  switch (action.type) {
    case 'CREDENTIALS':
      return action.credentials;
    default:
      return state;
  }
}

export default credentials;
