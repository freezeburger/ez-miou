import MessageListProps from "../@prop-types/message-list.props";
import { AppUserStatus } from "../../services/@types/app-user";

const defaultProps:MessageListProps = {
    messages: [
        {
            date: 123,
            sender: {
                id: 1,
                name: 'toto',
                email: 'toto@gmail.com',
                status: AppUserStatus.ONLINE
            },
            content: {
                message: 'Hello mister...'
            }
        },
        {
            date: 456,
            sender: {
                id: 2,
                name: 'tatat',
                email: 'tata@gmail.com',
                status: AppUserStatus.ONLINE
            },
            content: {
                message: 'Hi guy !!!'
            }
        }
    ]
}

export default defaultProps;