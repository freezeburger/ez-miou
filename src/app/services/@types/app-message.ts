import AppUser from "./app-user";
import AppTalk from "./app-talk";

interface MessageContent {
    /** message Text */
    message: string;
    /** attached documents */
    joins?: any;
}

interface AppMessage {
    /** Date of the message (Timestamp) */
    date: number;
    senderId?: number
    /** Sender of the message : Pseudo / Avatar */
    sender?: AppUser;
    /** Room / User */
    targets?: AppTalk[];
    /** Content of the message */
    content: MessageContent; 
}

export default AppMessage;