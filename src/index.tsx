import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './app/containers/home/home.container';
import * as serviceWorker from './serviceWorker';
import Button from './app/components/button/button.component';

ReactDOM.render(<Button name="tututu" color="red" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
