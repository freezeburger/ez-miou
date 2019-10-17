import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, button } from '@storybook/addon-knobs';
import MessageList from '../app/components/message-list/messagelist.component';
import { AppUserStatus } from '../app/services/@types/app-user';
import Message from '../app/components/message/message.component';


/* Component wrapper */
const styles:CSSProperties = {
  textAlign: 'center',
};
const Wrapper = ({ children }:any) => <div style={styles}>{children}</div>;

const messages = [
    {
        date: 1571298866,
        sender: {
            id: 1,
            name: 'Jennifer',
            email: 'jenny@gmail.com',
            status: AppUserStatus.ONLINE
        },
        content: {
            message: 'Hello miss... how are you ?'
        }
    },
    {
        date: 1571298905,
        sender: {
            id: 2,
            name: 'Melissa',
            email: 'meli@gmail.com',
            status: AppUserStatus.ONLINE
        },
        content: {
            message: 'Hi girl !!! Fine, thank you very much...'
        }
    }
];

/* Storie Title */
storiesOf('Message list', module)
  .addDecorator(withKnobs) 
  /* Sub Title */
  .add('Show', () => {
    const inputName = text('Name', '');
    const inputMsg = text('Message', 'Tap your text...');
    const oMsg = {
        date: Date.now(),
        sender: {
            id: Message.length+1,
            name: `${inputName}`,
            email: `${inputName}@gmail.com`,
            status: AppUserStatus.ONLINE
        },
        content: {
            message: `${inputMsg}`
        }
    }
    const addMessageButton = button('Add a message', () => {
        console.log(inputMsg);
        messages.push(oMsg);
    })

    return (
    <div>
      <MessageList messages={messages}></MessageList>
    </div>);
    })