import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomCard from './app/components/room-card/roomcard.component';
import UserProfile from './app/components/user-profile/userprofile.component';
import Avatar from './app/components/avatar/avatar.component';
import Message from './app/components/message/message.component';
import Button from './app/components/button/button.component';
import RoomSearch from './app/components/room-search/roomsearch.component';
import RoomCloud from './app/components/room-cloud/room-cloud.component';

const data = {
  key: 123456
};

ReactDOM.render(
  <div>
    <RoomCloud></RoomCloud>
    <RoomSearch rooms={["Room1", "Room2", "Room3"]} onSearchCompleted={(roomName) => console.log(roomName)}></RoomSearch>
    <UserProfile></UserProfile>
    <RoomCard></RoomCard>
    <Button></Button>
    <Avatar />
    <Message
      date={12345}
      content='[![](http://img.youtube.com/vi/Bkq1PAyGuZY/0.jpg)](http://www.youtube.com/watch?v=Bkq1PAyGuZY "AAAAAAAAAAAAAAAAAA")'
    ></Message>
    
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
