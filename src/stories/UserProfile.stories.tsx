import React from 'react';
import { action, actions, decorate  } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import UserProfile from '../app/components/user-profile/userprofile.component';
import { userProfileDefaultProps } from '../app/components/user-profile/userprofile.defaultProps';

const eventsFromObject = actions({ onClick: 'clicked', onMouseOver: 'hovered' });
const user = userProfileDefaultProps.user;

const firstArg = decorate([args => args.slice(0, 1)]);

const defaultProps = JSON.stringify(UserProfile.defaultProps)
/* Storie Title */
storiesOf('UserProfile', module)
  .addDecorator(withKnobs) 
  /* Sub Title */
  .add('Try The User Profile', () => (
    <div>
        <UserProfile
            user={object('user', user)}
            editAction={action(defaultProps)}
            deleteAction={firstArg.action('button-delete')}
            >
         </UserProfile>
    </div>
  ),
  { notes:'My user profile Note'})