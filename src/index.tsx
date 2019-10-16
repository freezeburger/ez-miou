import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './app/containers/home/home.container';
import * as serviceWorker from './serviceWorker';
import Button from './app/components/button/button.component';
import Me from './app/components/me/me.component';

ReactDOM.render(<Me title="Hello World" age="42" user={data}><input/></Me>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
