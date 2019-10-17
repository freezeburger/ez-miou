import MessageListProps from "./message-list.props";

export interface UserProps {
    id : number;
    name: string;
    email: string;
    avatar?: string;
    status: string;
    initialMessages: MessageListProps
}

export default UserProps;