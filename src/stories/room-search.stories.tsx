import React, { CSSProperties } from 'react';
import RoomSearch from '../app/components/room-search/room-search.component';
import { storiesOf } from '@storybook/react';
import { withKnobs, array } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';


/* Component wrapper */
const styles:CSSProperties = {
  textAlign: 'center',
};
const Wrapper = ({ children }:any) => <div style={styles}>{children}</div>;

/* Storie Title */
storiesOf('Room Search', module)
  .addDecorator(withKnobs) 
  /* Sub Title */
  // DDE Comment passer une fonction dans le knob ?
  .add('Try The Knobs', () => (
    <Wrapper>
      <RoomSearch
        rooms={array('Rooms (rooms)', ["Room1", "Room2", "Room3"], ',')}
        onSearchCompleted={action('Room to search (onSearchCompleted)')}></RoomSearch>
    </Wrapper>
  ),
  { notes:'Component that allows the user to search for a room and trigger some action.'})