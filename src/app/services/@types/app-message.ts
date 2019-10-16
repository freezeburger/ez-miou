import AppUser from "./app-user";
import AppRoom from "./app-room";

interface MessageContent {
    message: string; /** message Text */
    joins?: any; /** attached documents */
}

interface AppMessage {
    date: number; /** Date of the message (Timestamp) */
    sender: AppUser; /** Sender of the message : Pseudo / Avatar */
    target: AppRoom; /** Room / User */
    content: MessageContent; /** Content of the message */
}

export default AppMessage;