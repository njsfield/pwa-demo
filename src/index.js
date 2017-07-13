import React from 'react';
import { render } from 'react-dom';
import App from './containers/App.js';
import serviceWorker from './sw.js';

// Main Render
render(<App />, document.getElementById('app'));

// Start Service Worker (on production only!)
if (process.env.NODE_ENV === 'production') {
  serviceWorker();
}
