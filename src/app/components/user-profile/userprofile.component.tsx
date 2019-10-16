import React from 'react';
import "./userprofile.scss";
import UserProps from '../@prop-types/user-props';
import { checkPropTypes } from 'prop-types';

export const UserProfile = (props: UserProps) => {
    return (
        // <div classNameName="user-profile">
        //     <h3>User Profile</h3>
        //     <span>id : {props.id}</span>
        //     <span>Name: {props.name}</span>
        //     <span>Email: {props.email}</span>
        //     <span>Status: {props.status}</span>
        //     <img src={props.avatar} alt=""/>
        // </div>

<div className="user-profile row profile">
    <div className="col-md-3">
        <div className="profile-sidebar">
            <div className="profile-userpic">
                <img src={props.avatar} className="img-responsive" alt=""/>
            </div>
            <div className="profile-usertitle">
                <div className="profile-usertitle-id">
                    {props.id}
                </div>
                <div className="profile-usertitle-name">
                    {props.name}
                </div>
                <div className="profile-usertitle-status">
                    {props.status}
                </div>
                <div className="profile-usertitle-email">
                    {props.email}
                </div>
            </div>
            <div className="profile-userbuttons">
                <button type="button" className="btn btn-success btn-sm">Follow</button>
                <button type="button" className="btn btn-danger btn-sm">Message</button>
            </div>
            <div className="profile-usermenu">
                <ul className="nav">
                    <li className="active">
                        <a href="#">
                        <i className="glyphicon glyphicon-home"></i>
                        Overview </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="glyphicon glyphicon-user"></i>
                        Account Settings </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                        <i className="glyphicon glyphicon-ok"></i>
                        Tasks </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="glyphicon glyphicon-flag"></i>
                        Help </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="col-md-9">
        <div className="profile-content">
           Some user related content goes here...
        </div>
    </div>
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

