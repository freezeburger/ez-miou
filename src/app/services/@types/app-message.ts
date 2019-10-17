import AppUser from './app-user';
import AppTalk from './app-talk';

export interface MessageContent {
  /** Message Text */
  message: string;
  /** Attached documents */
  joins?: any;
}

interface AppMessage {
  /** ID of the message */
  messageId?: number;
  /** Date of the message (Timestamp) */
  date: number;
  /** Sender ID */
  senderId?: number;
  /** User */
  sender: AppUser;
  /** Talks */
  targets?: AppTalk[];
  /** Content of the message */
  content: MessageContent;
}

export default AppMessage;
