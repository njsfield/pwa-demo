import React from 'react';
import { render } from 'react-dom';
import App from './containers/App.js';
//import { register } from './registerServiceWorker.js'; 

// Main Render
render(<App />, document.getElementById('app'));

// For Production Only
// register();

