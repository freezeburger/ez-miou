import React, { CSSProperties } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs';
import UserList from '../app/components/user-list/userlist.component';
import UserProps from '../app/components/@prop-types/user-props';
import UserListProps from '../app/components/@prop-types/user-list.props';
import AppUser, { AppUserStatus } from '../app/services/@types/app-user';


/* Component wrapper */
const styles:CSSProperties = {
  textAlign: 'center',
};
const Wrapper = ({ children }:any) => <div style={styles}>{children}</div>;

const users:AppUser[] = [{
  id: 123,
  name: 'toto',
  email: 'string@mail.com',
  status: AppUserStatus.AWAY
},
{
  id: 123,
  name: 'titi',
  email: 'string@mail.com',
  status: AppUserStatus.AWAY
},
{
  id: 123,
  name: 'tata',
  email: 'string@mail.com',
  status: AppUserStatus.AWAY
}];

/* Storie Title */
storiesOf('User List', module)
  .addDecorator(withKnobs) 
  /* Sub Title */
  .add('tester Mon composant', () => (
    <Wrapper>
      <UserList userList={users}></UserList>
    </Wrapper>
  ),
  { notes:'User List'})