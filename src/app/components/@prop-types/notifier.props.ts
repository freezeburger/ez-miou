import { string } from "prop-types";

/**
 * Received Message Content 
 */
interface message {
  room: {
    id: string,
    name: string;
  },
  message: {
    userName: string,
    message : string
  }
}

/**
 * Notifier Component Properties
 */
interface notifierProps {
  messages: message[], // Messages List 
  cancel():void, // Function called when the user reject the message
  accept(roomId : string): void // Function called when the user wants to see the message 
}

export default notifierProps;