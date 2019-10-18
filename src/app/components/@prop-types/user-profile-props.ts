import MessageListProps from "./message-list.props";
import UserProps from "./user-props";
import AppMessage from "../../services/@types/app-message";

export interface UserProfileProps {
    user: UserProps
    initialMessages: AppMessage;
    editAction?: Function;
    deleteAction?: Function;
}

export default UserProfileProps;