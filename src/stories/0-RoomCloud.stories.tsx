import React, { CSSProperties } from 'react';
import { linkTo } from '@storybook/addon-links';
import { default as Welcome } from '../app/components/me/me.component';
import { storiesOf } from '@storybook/react';
import RoomCloud from '../app/components/room-cloud/room-cloud.component';

/* Component wrapper */
const styles:CSSProperties = {
  textAlign: 'center'
};
const Wrapper = ({ children }:any) => <div style={styles}>{children}</div>;

/* Storie Title */
export default {
  title: 'Room Cloud'
};

export const toStorybook = () => (
  <Wrapper>
    <RoomCloud></RoomCloud>
  </Wrapper>
);

/* Sub Title */
toStorybook.story = {
  name: 'Example',
  addons:{
    notes: 'A simple example.'
  }
};

// export const thereIsMyUseCase = () => (
//   <Wrapper>
//     <Welcome>'A Simple Use Case of Me Component'</Welcome>
//     <button className="btn btn-primary">Next Story</button>
//   </Wrapper>
// );

// /* Sub Title */
// thereIsMyUseCase.story = {
//   name: 'A Simple Use Case of Me Component',
// };


