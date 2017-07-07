// Offline Toggler
export const setOffline = (bool) => {
  return {
    type: 'OFFLINE',
    offline: bool 
  };
};

// Credentials Maker 
export const setCredentials = ({user, apiKey}) => {
  return {
    type: 'CREDENTIALS',
    credentials: { user, apiKey }
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

