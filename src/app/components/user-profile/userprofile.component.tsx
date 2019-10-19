import React from 'react';
import "./userprofile.scss";
import UserProps from '../@prop-types/user-props';
import { userProfileDefaultProps } from './userprofile.defaultProps';
import Button from '../button/button.component';
import UserProfileProps from '../@prop-types/user-profile-props';
import { BtnTypes } from '../@prop-types/button.props';
import Avatar from '../avatar/avatar.component';
import AppMessage from '../../services/@types/app-message';

/** state */
interface IState {
    messagesList: AppMessage;
}

/** User local component */
const User = (user:UserProps) => (
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
    </div>
)

 
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
        
        return (
            <div className="user-profile row profile">
                <div className="col-md-3">
                    <div className="profile-sidebar">
                        <div className="profile-userpic">
                            <Avatar src={user.avatarUrl} size={100}></Avatar>
                        </div>

                        <User {...user}/>

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
