import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Room from './app/containers/room/room.container';
import Home from './app/containers/home/home.container';
import Talk from './app/containers/talk/talk.container';

import Routes from "./routes";

ReactDOM.render(
  <div>
    <Home></Home>
    <Room></Room>
    <Talk></Talk>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
