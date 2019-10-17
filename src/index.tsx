import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './app/components/user-profile/userprofile.component';
import RoomCloud from './app/components/room-cloud/room-cloud.component';
import MessageList from './app/components/message-list/messagelist.component';
import './app.scss';
import RoomSearch from './app/components/room-search/room-search.component';
import ImageSlider from './app/components/image-slider/image-slider.component';

ReactDOM.render(
  <div className="app">
    <div className="container-fluid ">
      <div className="row">
        <div className="col-3">
          <UserProfile />
        </div>
        <div className="col-9">
          <div className="row">{/* <RoomCloud /> */}</div>
          <div className="row">
            <MessageList />
          </div>
        </div>
      </div>
      <div className="row">
        <ImageSlider />
      </div>
    </div>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
