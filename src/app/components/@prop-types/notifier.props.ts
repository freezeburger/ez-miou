import MessageProps from "./message.props"

/**
 * Received Message Content 
 */
export interface NotifierMessage {
  roomId: string,
  message: MessageProps
}

/**
 * Notifier Component Properties
 */
interface NotifierProps {
  messages: NotifierMessage[], // Messages List 
  close?():void, // Function called when the user reject the message
  show?(roomId : string): void // Function called when the user wants to see the message 
}

export default NotifierProps;