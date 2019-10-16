import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomCard from './app/components/room-card/roomcard.component';
import UserProfile from './app/components/user-profile/userprofile.component';
import Avatar from './app/components/avatar/avatar.component';
import Message from './app/components/message/message.component';
import Button from './app/components/button/button.component';

const data = {
  key: 123456
};

ReactDOM.render(
  <div>
    <UserProfile></UserProfile>
    <RoomCard></RoomCard>
    <Button></Button>
    <Avatar />
    <Message
      date={new Date()}
      content='[![](http://img.youtube.com/vi/Bkq1PAyGuZY/0.jpg)](http://www.youtube.com/watch?v=Bkq1PAyGuZY "AAAAAAAAAAAAAAAAAA")'
    ></Message>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
