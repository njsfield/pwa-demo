// setOffline 
export const setOffline = (bool) => {
  return {
    type: 'OFFLINE',
    offline: bool 
  };
};

// setCredentials
export const setCredentials = ({user, apiKey}) => {
  return {
    type: 'CREDENTIALS',
    credentials: { user, apiKey }
  }
}

// setResults
export const setResults = (results) => {
  return {
    type: 'RESULTS',
    results
  }
}

