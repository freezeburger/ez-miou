import React from 'react';
import RoomCloudProps from '../@prop-types/room-cloud.props';
import RoomCard from '../room-card/roomcard.component';
import AppRoom from '../../services/@types/app-room';
import defaultRoomCloudProps from './room-cloud.default-props';
import TagCloud from 'react-tag-cloud';
import './room-cloud.scss';

 const RoomCloud = (props: RoomCloudProps) => {
  const roomList: AppRoom[] = props.roomCards;

   return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-12 miou-cloud-container">
            <TagCloud>
              { 
                roomList.map(function(room, index) {
                  const user: any = {
                    counter: room.users.length,
                    max: 15
                  }
                  return (
                    <div key={index}>
                      <RoomCard title={ room.name } user={ user }/>
                    </div>
                  )
                })
              }
            </TagCloud>
          </div>
        </div>
    </div>
   );
 };

 RoomCloud.defaultProps = defaultRoomCloudProps;

 export default RoomCloud;



