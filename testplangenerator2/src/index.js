// src/index.js
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'regenerator-runtime/runtime';
import Buffer from 'buffer';
window.Buffer = Buffer.Buffer;

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
