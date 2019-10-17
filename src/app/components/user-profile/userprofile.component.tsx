import React from 'react';
import "./userprofile.scss";
import UserProps from '../@prop-types/user-props';
import { checkPropTypes } from 'prop-types';
import MessageListProps from '../@prop-types/message-list.props';
import { userProfileDefaultProps } from './userprofile.defaultProps';
import Button from '../button/button.component';


interface IState {
    messagesList: MessageListProps;
}

 
class UserProfile extends React.Component<UserProps, IState> {
    
    static defaultProps = userProfileDefaultProps;

    constructor(props:UserProps) {
        super(props);
    
        const { initialMessages } = props;
    
        this.state = {
          messagesList: initialMessages,
        };

    }

    render() {
        const { id, name, email, avatar, status } = this.props;
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
                        <img src={avatar} className="img-responsive" alt=""/>
                        </div>
                        <div className="profile-usertitle">
                            <div className="profile-usertitle-id">
                                {id}
                            </div>
                            <div className="profile-usertitle-name">
                                {name}
                            </div>
                            <div className="profile-usertitle-status">
                                {status}
                            </div>
                            <div className="profile-usertitle-email">
                                {email}
                            </div>
                            <div className="profile-usertitle-mesages">
                                <ul>
                                    {initialMessages}
                                </ul>
                            </div>
                        </div>
                        <div className="profile-userbuttons">
                            {/* <Button action={}></Button> */}
                            <button type="button" className="btn btn-success btn-sm">Edit</button>
                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;
