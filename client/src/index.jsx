import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import data from './testData.js';

ReactDOM.render(<App mainProduct={data.replaceWithGetFirstProductApiCall()} />, document.getElementById('root'));
