import React from 'react';
import RoomCloudProps from '../@prop-types/room-cloud.props';
import RoomCard from '../room-card/roomcard.component';

 const RoomCloud = (props: RoomCloudProps) => {
  const roomList: any[] = [];


   return (
    <div>
        { roomList.map(function(item) {
            return <RoomCard/>
          })
        }
    </div>
   );
 };

 export default RoomCloud;



