import MessageProps from "./message.props";
import AppMessage from "../../services/@types/app-message";

interface MessageListProps {
    /**
     * Properties of the room
     */
    room: {};
    /**
     * List of messages
     */
    messages: Array<AppMessage>;
}

export default MessageListProps;