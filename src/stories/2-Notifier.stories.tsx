import React, { CSSProperties } from 'react';
import { action, withActions, decorate } from '@storybook/addon-actions';
import { default as Welcome } from '../app/components/me/me.component';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Notifier from '../app/components/notifier/notifier.component';


/* Component wrapper */
const styles:CSSProperties = {
  textAlign: 'center',
};
const Wrapper = ({ children }:any) => <div style={styles}>{children}</div>;

/* Storie Title */
storiesOf('Notifier', module)
  .addDecorator(withKnobs)
  //.addDecorator(withActions('click .btn', () => action('clicked btn')))
  /* Sub Title */
  .add('Notifier Component', () => (
    <Wrapper>
      <Notifier 
        messages={
          [
            {
              room: {
                id: text('Room Id', '0'),
                name: 'Room Name'
              }, 
              messageDetail: {
                userName : 'User Name',
                message: text('Message Content', 'Posted Message')
              }
            },
            {
              room: {
                id: '1',
                name: 'Room Name'
              }, 
              messageDetail: {
                userName : 'User Name',
                message: 'Posted Message 2'
              }
            }
          ]
        }
        cancel={action(`Message Cancelled`)}
        accept={action(`Message Accepted`)}
        />
    </Wrapper>
  ))