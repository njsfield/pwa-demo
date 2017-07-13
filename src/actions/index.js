// Offline Toggler
export const setOffline = (bool) => {
  return {
    type: 'OFFLINE',
    offline: bool
  };
};

// Credentials Maker
export const setCredentials = (bool) => {
  return {
    type: 'CREDENTIALS',
    credentials: bool
  }
}

// Set Results
export const setResults = (results) => {
  return {
    type: 'RESULTS',
    results
  }
}

// Set Historical Results
export const setHistoricalResults = (results) => {
  return {
    type: 'HISTORICAL_RESULTS',
    results
  }
}
