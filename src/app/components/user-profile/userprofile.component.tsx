import React from 'react';
import UserProps from '../@prop-types/user-props';
import { checkPropTypes } from 'prop-types';

export const UserProfile = (props: UserProps) => {
    return (
        <div>
        {props.name}
        </div>
    );
}

UserProfile.defaultProps = {
    id : '123456789',
    name: 'cat',
    email: 'cat@kitchen.miou',
    avatar: 'cat_avatar.png',
    status: 'lost',
}

export default UserProfile;

