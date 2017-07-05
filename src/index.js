import React from 'react';
import { render } from 'react-dom';
import App from './containers/App.js';
import serviceWorker from './registerServiceWorker.js'; 

// Main Render
render(<App />, document.getElementById('app'));

// For Production Only
serviceWorker();

