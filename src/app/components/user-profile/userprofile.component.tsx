import React from 'react';
import "./userprofile.scss";
import UserProps from '../@prop-types/user-props';
import { checkPropTypes } from 'prop-types';
import MessageListProps from '../@prop-types/message-list.props';
import { userProfileDefaultProps } from './userprofile.defaultProps';
import Button from '../button/button.component';
import UserProfileProps from '../@prop-types/user-profile-props';
import { BtnTypes } from '../@prop-types/button.props';


interface IState {
    messagesList: MessageListProps;
}

 
class UserProfile extends React.Component<UserProfileProps, IState> {
    
    static defaultProps = userProfileDefaultProps;

    constructor(props:UserProfileProps) {
        super(props);
    
        const { initialMessages } = props;
    
        this.state = {
          messagesList: initialMessages,
        };

    }

    handleEdit = () => {
        return 'Edit!'
    }

    handleDelete = () => {
        return 'Deleted!'
    }

    render() {
        const { user, editAction, deleteAction } = this.props;
        const { messages } = this.state.messagesList;
        const initialMessages = messages.map((message:any, index:number) => {
            return <li key={index}>
                <span>date:{message.date}</span>
                <p>{message.content}</p>
            </li>
        })
        
        return (
            <div className="user-profile row profile">
                <div className="col-md-3">
                    <div className="profile-sidebar">
                        <div className="profile-userpic">
                        <img src={user.avatarUrl} className="img-responsive" alt=""/>
                        </div>
                        <div className="profile-usertitle">
                            <div className="profile-usertitle-id">
                                {user.id}
                            </div>
                            <div className="profile-usertitle-name">
                                {user.name}
                            </div>
                            <div className="profile-usertitle-status">
                                {user.status}
                            </div>
                            <div className="profile-usertitle-email">
                                {user.email}
                            </div>
                            <div className="profile-usertitle-mesages">
                                <ul>
                                    {initialMessages}
                                </ul>
                            </div>
                        </div>
                        <div className="profile-userbuttons">
                            <Button action={editAction} ><span>Edit</span></Button>
                            <Button action={deleteAction} btnTypes={BtnTypes.DANGER} ><span>Delete</span></Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;
