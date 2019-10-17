import NotifierProps from "../@prop-types/notifier.props";

const defaultProps: NotifierProps = {
  messages: [
  {
      roomId: '1',
      message: {
          content : 'Posted Message',
          date : Date.now()
      }
  },
  {
    roomId: '2',
    message : {
        content: 'Posted Message 2',
        date : Date.now()
    }
  }], // Messages List 
  close: () => {
      console.log(`Closed`);
  },
  show: (roomId : string) => {
      console.log(`Go to Room ${roomId}`);
  }
};

export default defaultProps;
