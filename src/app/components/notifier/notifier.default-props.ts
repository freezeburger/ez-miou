import NotifierProps from "../@prop-types/notifier.props";

const defaultProps: NotifierProps = {
  messages: [
  {
      room: {
          id: '1',
          name: 'Room 1'
      },
      messageDetail: {
          userName: 'User Name',
          message : 'Posted Message'
      }
  },
  {
    room: {
        id: '2',
        name: 'Room 2'
    },
    messageDetail: {
        userName: 'User Name 2',
        message : 'Posted Message 2'
    }
  }], // Messages List 
  cancel: (roomId : string) => {
      console.log(`Canceled ${roomId}`);
  },
  accept: (roomId : string) => {
      console.log(`Go to Room ${roomId}`);
  }
};

export default defaultProps;
