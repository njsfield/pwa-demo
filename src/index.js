import React from 'react';
import { render } from 'react-dom';
import App from './containers/App.js';
import serviceWorker from './sw.js'; 

// Main Render
render(<App />, document.getElementById('app'));

// Start Service Worker 
serviceWorker();

