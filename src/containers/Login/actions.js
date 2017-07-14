// Login actions

// Offline Toggler
export const setUsername = (username) => {
  return {
    type: 'ENTER_USERNAME',
    username
  };
};

// Credentials Maker
export const setPassword = (password) => {
  return {
    type: 'ENTER_PASSWORD',
    password
  }
}
