import { AppUserStatus } from '../../services/@types/app-user';
import RoomCloudProps from '../@prop-types/room-cloud.props';

const defaultRoomCloudProps: RoomCloudProps =  {
    roomCards: [
      {
          // Identifier of the room
          id: 1,
          name: 'Java Talk',
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
      },
      {
        // Identifier of the room
        id: 1,
        name: 'Java poo',
        subject: 'Java poo',
        // Contains the users that are currently in this room
        users: [
          {
            id: 1,
            name: 'Lisa',
            email: 'marge@blabla.com',
            status: AppUserStatus.ONLINE
          },
          {
            id: 1,
            name: 'Homer',
            email: 'homer@blabla.com',
            status: AppUserStatus.AWAY
          }
        ]
      },
      {
        // Identifier of the room
        id: 1,
        name: 'Java poo',
        subject: 'Java poo',
        // Contains the users that are currently in this room
        users: [
          {
            id: 1,
            name: 'Lisa',
            email: 'marge@blabla.com',
            status: AppUserStatus.ONLINE
          },
          {
            id: 1,
            name: 'Homer',
            email: 'homer@blabla.com',
            status: AppUserStatus.AWAY
          }
        ]
      },
      {
        // Identifier of the room
        id: 1,
        name: 'Java poo',
        subject: 'Java poo',
        // Contains the users that are currently in this room
        users: [
          {
            id: 1,
            name: 'Lisa',
            email: 'marge@blabla.com',
            status: AppUserStatus.ONLINE
          },
          {
            id: 1,
            name: 'Homer',
            email: 'homer@blabla.com',
            status: AppUserStatus.AWAY
          }
        ]
      },
      {
        // Identifier of the room
        id: 1,
        name: 'Java poo',
        subject: 'Java poo',
        // Contains the users that are currently in this room
        users: [
          {
            id: 1,
            name: 'Lisa',
            email: 'marge@blabla.com',
            status: AppUserStatus.ONLINE
          },
          {
            id: 1,
            name: 'Homer',
            email: 'homer@blabla.com',
            status: AppUserStatus.AWAY
          }
        ]
      },      {
        // Identifier of the room
        id: 1,
        name: 'Java poo',
        subject: 'Java poo',
        // Contains the users that are currently in this room
        users: [
          {
            id: 1,
            name: 'Lisa',
            email: 'marge@blabla.com',
            status: AppUserStatus.ONLINE
          },
          {
            id: 1,
            name: 'Homer',
            email: 'homer@blabla.com',
            status: AppUserStatus.AWAY
          }
        ]
      },      {
        // Identifier of the room
        id: 1,
        name: 'Java poo',
        subject: 'Java poo',
        // Contains the users that are currently in this room
        users: [
          {
            id: 1,
            name: 'Lisa',
            email: 'marge@blabla.com',
            status: AppUserStatus.ONLINE
          },
          {
            id: 1,
            name: 'Homer',
            email: 'homer@blabla.com',
            status: AppUserStatus.AWAY
          }
        ]
      },      {
        // Identifier of the room
        id: 1,
        name: 'Java poo',
        subject: 'Java poo',
        // Contains the users that are currently in this room
        users: [
          {
            id: 1,
            name: 'Lisa',
            email: 'marge@blabla.com',
            status: AppUserStatus.ONLINE
          },
          {
            id: 1,
            name: 'Homer',
            email: 'homer@blabla.com',
            status: AppUserStatus.AWAY
          }
        ]
      }
    ]
   }

   export default defaultRoomCloudProps;