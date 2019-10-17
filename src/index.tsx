import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './app/components/user-profile/userprofile.component';
import RoomCloud from './app/components/room-cloud/room-cloud.component';

ReactDOM.render(
  <div>
    <RoomCloud/>
    <UserProfile></UserProfile>

  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
