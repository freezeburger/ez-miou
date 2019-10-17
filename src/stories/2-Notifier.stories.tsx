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
        messages = {
          [
            {
              roomId: text('Room Id', '0'),
              message: {
                content: text('Message Content', 'Posted Message'),
                date: Date.now()
              }
            },
            {
              roomId: '1',
              message: {
                content: 'Posted Message 2',
                date: Date.now()
              }
            }
          ]
        }
        close={action(`Message Cancelled`)}
        show={action(`Message Accepted`)}
        />
    </Wrapper>
  ))