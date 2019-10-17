import React, { CSSProperties } from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Avatar from '../app/components/avatar/avatar.component';
import Message from '../app/components/message/message.component';

/* Component wrapper */
const styles: CSSProperties = {
  textAlign: 'center'
};
const Wrapper = ({ children }: any) => <div style={styles}>{children}</div>;

/* Storie Title */
storiesOf('Message', module)
  .addDecorator(withKnobs)
  /* Sub Title */
  .add('Markdown support', () => (
    <Wrapper>
      <Message content="**Lorem** *ipsum* Wazaaaaa" date={1234} />
    </Wrapper>
  ));
