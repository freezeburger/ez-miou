import React from 'react';
import UserListProps from '../@prop-types/user-list.props';
import AppUser from '../../services/@types/app-user';

const UserList = (props: UserListProps) => {

  return (
    <div>{
        props.userList && props.userList.map && props.userList.map( user => <div>{user.name}</div> )
    }</div>
  );
};

//UserList.defaultProps = defaultProps;

export default UserList;
