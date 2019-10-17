import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './app/components/user-profile/userprofile.component';
import RoomContainer from './app/containers/room/room.container';
import Auth from './app/features/auth/auth.feature';
import Talk from './app/containers/talk/talk.container';

ReactDOM.render(
  <div>
    {/* <RoomCloud/>
    <UserProfile></UserProfile> */}
    {/* <Auth></Auth> */}
    {/* <RoomContainer/> */}
      <Talk></Talk>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
