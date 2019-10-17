import MessageListProps from "../@prop-types/message-list.props";
import { AppUserStatus } from "../../services/@types/app-user";

const defaultProps:MessageListProps = {
    messages: [
        {
            date: 1571298866,
            sender: {
                id: 1,
                name: 'Claude',
                email: 'claude123@gmail.com',
                status: AppUserStatus.ONLINE
            },
            content: {
                message: 'Hello mister... how are you ?'
            }
        },
        {
            date: 1571298905,
            sender: {
                id: 2,
                name: 'Marcel',
                email: 'marcel567@gmail.com',
                status: AppUserStatus.ONLINE
            },
            content: {
                message: 'Hi guy !!! Fine, thank you very much...'
            }
        }
    ]
}

export default defaultProps;