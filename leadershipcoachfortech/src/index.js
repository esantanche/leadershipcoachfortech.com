import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import * as Sentry from '@sentry/browser';

// Initialising Sentry for error reporting https://sentry.io
Sentry.init({
  dsn: "https://d91cb9c1ca534a828ee81545466115f6@sentry.io/1449435"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app#docsNav
serviceWorker.unregister();
