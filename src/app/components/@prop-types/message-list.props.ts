import Message from "../message/message.component";

export interface MessageListProps {
    /**
     * Properties of the room
     */
    room: {};
    /**
     * List of messages
     */
    messages: Array<Message>;
}

export default MessageListProps;