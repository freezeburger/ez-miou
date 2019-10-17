import React from 'react';
import RoomCloudProps from '../@prop-types/room-cloud.props';
import RoomCard from '../room-card/roomcard.component';
import AppRoom from '../../services/@types/app-room';
import defaultRoomCloudProps from './room-cloud.default-props';

 const RoomCloud = (props: RoomCloudProps) => {
  const roomList: AppRoom[] = props.roomCards;

   return (
    <div>
        { roomList.map(function(room, index) {
          const user: any = {
            counter: room.users.length,
            max: 15
          }
            return <RoomCard key={index} title={ room.name }
             user={ user }/>
          })
        }
    </div>
   );
 };

 RoomCloud.defaultProps = defaultRoomCloudProps;

 export default RoomCloud;



