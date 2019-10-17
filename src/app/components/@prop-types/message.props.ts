interface MessageProps {
  /** Message id */
  id?: string;
  /** Text of the message */
  content: string;
  /** Timestamp, if only there was some kind of prop-type designed to store Date... man that would be nice... */
  date: number;
}

export default MessageProps;
