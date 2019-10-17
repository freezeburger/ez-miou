import MessageListProps from "./message-list.props";
import UserProps from "./user-props";

export interface UserProfileProps {
    user: UserProps
    initialMessages: MessageListProps;
    editAction?: Function;
    deleteAction?: Function;
}

export default UserProfileProps;