import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import TalkEditor from '../app/components/talk-editor/talk-editor.component';
import { withKnobs, text, boolean, number, array ,object } from '@storybook/addon-knobs';
import AppUser, { AppUserStatus } from '../app/services/@types/app-user';

/* Component wrapper */
const styles:CSSProperties = {
  textAlign: 'center'
};
const Wrapper = ({ children }:any) => <div style={styles}>{children}</div>;


const users =  [
  {
    id: 1,
    name: 'Marge',
    email: 'marge@blabla.com',
    status: AppUserStatus.ONLINE
  },
  {
    id: 1,
    name: 'Homer',
    email: 'homer@blabla.com',
    status: AppUserStatus.AWAY
  },
  {
    id: 1,
    name: 'Bart',
    email: 'bart@blabla.com',
    status: AppUserStatus.ONLINE
  }
];


// const props = {
//   userList:object('User list', users)
// }

// storiesOf('TalkEditor', module)
//   .addDecorator(withKnobs) 
//   /* Sub Title */
//   .add('Try The Knobs', () => (
//     <Wrapper>
//    <TalkEditor 
//       {...props}
//        ></TalkEditor>
//     </Wrapper>
//   ));