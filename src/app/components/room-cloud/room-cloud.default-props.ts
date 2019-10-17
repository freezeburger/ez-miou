import { AppUserStatus } from '../../services/@types/app-user';
import RoomCloudProps from '../@prop-types/room-cloud.props';

const defaultRoomCloudProps =  {
    roomCards: [
      {
          // Identifier of the room
          id: 1,
          name: 'Ola',
          subject: 'Java talk',
          // Contains the users that are currently in this room
          users: [
            {
              id: 1,
              name: 'Marge',
              email: 'marge@blabla.com',
              status: AppUserStatus.ONLINE
            },
            {
              id: 1,
              name: 'Homer',
              email: 'homer@blabla.com',
              status: AppUserStatus.AWAY
            },
            {
              id: 1,
              name: 'Bart',
              email: 'bart@blabla.com',
              status: AppUserStatus.ONLINE
            }
          ]
      }
    ]
   }

   export default defaultRoomCloudProps;