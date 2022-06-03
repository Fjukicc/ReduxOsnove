import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStore(reducers)}>
    <App />
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
