import React from 'react';
import "./userprofile.scss";
import UserProps from '../@prop-types/user-props';
import { checkPropTypes } from 'prop-types';

export const UserProfile = (props: UserProps) => {
    return (
        <div className="user-profile">
            <h3>User Profile</h3>
            <span>id : {props.id}</span>
            <span>Name: {props.name}</span>
            <span>Email: {props.email}</span>
            <span>Status: {props.status}</span>
            <img src={props.avatar} alt=""/>
        </div>
    );
}

UserProfile.defaultProps = {
    id : 123456789,
    name: 'cat',
    email: 'cat@kitchen.miou',
    avatar: 'http://robohash.org/younes',
    status: 'lost',
}

export default UserProfile;

