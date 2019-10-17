import React from 'react';
import UserListProps from '../@prop-types/user-list.props';
//import AppUser from '../../services/@types/app-user'; old way

const UserList = (props: UserListProps) => {

  return (
    <div className="list-group">{
        props.userList && props.userList.map && props.userList.map( user => <div className="list-group-item">
        <h4>{
            user.name.toUpperCase()
        }</h4>
        <code>{
            user.email
        }</code>
        </div> )
    }</div>
  );
};

//UserList.defaultProps = defaultProps;

export default UserList;
