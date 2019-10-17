import React, { CSSProperties } from 'react';
import { linkTo } from '@storybook/addon-links';
import { default as Welcome } from '../app/components/me/me.component';
import { storiesOf } from '@storybook/react';

/* Component wrapper */
const styles:CSSProperties = {
  textAlign: 'center'
};
const Wrapper = ({ children }:any) => <div style={styles}>{children}</div>;

/* Storie Title */
export default {
  title: 'Welcome'
};

export const toStorybook = () => (
  <Wrapper>
    <Welcome>'Hello World'</Welcome>
  </Wrapper>
);

/* Sub Title */
toStorybook.story = {
  name: 'to Storybook',
  addons:{
    notes: 'A simple comment note.'
  }
};

export const thereIsMyUseCase = () => (
  <Wrapper>
    <Welcome>'A Simple Use Case of Me Component'</Welcome>
    <button className="btn btn-primary">Next Story</button>
  </Wrapper>
);

/* Sub Title */
thereIsMyUseCase.story = {
  name: 'A Simple Use Case of Me Component',
};


