import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, array ,object } from '@storybook/addon-knobs';
import RoomCloud from '../app/components/room-cloud/room-cloud.component';
import defaultRoomCloudProps from '../app/components/room-cloud/room-cloud.default-props';

/* Component wrapper */
const styles:CSSProperties = {
  textAlign: 'center'
};
const Wrapper = ({ children }:any) => <div style={styles}>{children}</div>;

const value = object('Room cards', defaultRoomCloudProps.roomCards);

storiesOf('Room cloud component', module)
  .addDecorator(withKnobs) 
  /* Sub Title */
  .add('Usage', () => (
    <Wrapper>
      <RoomCloud roomCards={value}/>
    </Wrapper>
  ));