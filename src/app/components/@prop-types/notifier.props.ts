/**
 * Received Message Content 
 */
export interface NotifierMessage {
  room: {
    id: string,
    name: string;
  },
  messageDetail: {
    userName: string,
    message : string
  }
}

/**
 * Notifier Component Properties
 */
interface NotifierProps {
  messages: NotifierMessage[], // Messages List 
  cancel(roomId : string):void, // Function called when the user reject the message
  accept(roomId : string): void // Function called when the user wants to see the message 
}

export default NotifierProps;