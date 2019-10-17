import React, { CSSProperties } from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Avatar from '../app/components/avatar/avatar.component';

/* Component wrapper */
const styles: CSSProperties = {
  textAlign: 'center'
};
const Wrapper = ({ children }: any) => <div style={styles}>{children}</div>;

/* Storie Title */
storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  /* Sub Title */
  .add('Use case', () => (
    <Wrapper>
      <Avatar rounded={boolean('rounded', true)} src={text('src', 'http://lorempixel.com/50/50')} size={number('size', 50)}></Avatar>
    </Wrapper>
  ));
