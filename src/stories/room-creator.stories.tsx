import React, { CSSProperties } from 'react';
import RoomCreator from '../app/components/room-creator/room-creator.component';
import { storiesOf } from '@storybook/react';
import { withKnobs, array } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';


/* Component wrapper */
const styles:CSSProperties = {
  textAlign: 'center',
};
const Wrapper = ({ children }:any) => <div style={styles}>{children}</div>;

storiesOf('Room Creator', module)
  .addDecorator(withKnobs)
  .add('Try The Knobs', () => (
    <Wrapper>
      <RoomCreator onCreationRequested={action('Room to create (onCreationRequested)')}></RoomCreator>
    </Wrapper>
  ),
  { notes:'Component that allows the user to search for a room and trigger some action.'})