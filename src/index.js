import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

// global stylesheets
import './assets/css/styles.css'

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

registerServiceWorker();