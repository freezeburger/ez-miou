
interface MessageContent {
    message: string; /** message Text */
    joins?: any; /** attached documents */
}

interface AppMessage {
    date: number; /** Date of the message (Timestamp) */
    sender: {}; /** Sender of the message : Pseudo / Avatar */
    target: {}; /** Room / User */
    content: MessageContent; /** Content of the message */
}

export default AppMessage;