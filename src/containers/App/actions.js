// App (global) actions

// Offline Toggler
export const setOffline = (bool) => {
  return {
    type: 'SET_OFFLINE',
    offline: bool
  };
};

// Credentials Maker
export const setCredentials = (bool) => {
  return {
    type: 'SET_CREDENTIALS',
    credentials: bool
  }
}
