import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Notifier from './app/components/notifier/notifier.component';
// import * as serviceWorker from './serviceWorker';

const data = { key: 123456};

ReactDOM.render(
  <Notifier title="Hello World" age="42" user={data}>
    <input />
  </Notifier>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
