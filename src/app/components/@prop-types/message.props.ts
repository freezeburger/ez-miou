interface MessageProps {
  /**
   * Message id
   */
  id?: string;
  /**
   * Text of the message
   */
  content: string;
  /**
   * Date when the message was posted
   */
  date: Date;
}

export default MessageProps;
