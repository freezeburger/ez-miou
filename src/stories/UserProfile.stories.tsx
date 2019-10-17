import React from 'react';
import { action, actions, decorate  } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, text, number } from '@storybook/addon-knobs';
import UserProfile from '../app/components/user-profile/userprofile.component';
import { userProfileDefaultProps } from '../app/components/user-profile/userprofile.defaultProps';



const firstArg = decorate([args => args.slice(0, 1)]);

const defaultProps = JSON.stringify(UserProfile.defaultProps)
/* Storie Title */
storiesOf('UserProfile', module)
    .addDecorator(withKnobs) 
    /* Sub Title */
    .add('Try The User Profile', () => {
        const user = userProfileDefaultProps.user;
        const name = text('Name', user.name);
        const id = number('Id', user.id);
        const email = text('Email', user.email);
        const avatar = text('Avatar', user.avatarUrl);
        const status = text('Status', user.status);

        return (<div>
            <UserProfile
                user={object('user', {
                    id, name, email, avatar, status
                })}
                editAction={action(defaultProps)}
                deleteAction={firstArg.action('button-delete')}
                >
            </UserProfile>
        </div>)
    },
    { notes:'My user profile Note'})

    