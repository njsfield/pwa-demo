// Called to set offline key in state

const offline = (state = false, action) => {
  switch (action.type) {
    case 'OFFLINE':
      return action.offline;
    default:
      return state;
  }
}

export default offline;
