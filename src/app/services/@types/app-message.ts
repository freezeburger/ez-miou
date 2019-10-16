
interface MessageContent {
    message: string; /** message Text */
    joins: any; /** attached documents */
}

interface AppMessage {
    date: Date; /** Date of the message */
    sender: {}; /** Sender of the message : Pseudo / Avatar */
    target: {}; /** Room / User */
    content: MessageContent; /** Content of the message */
}

export default AppMessage;