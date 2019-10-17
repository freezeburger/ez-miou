import React, { CSSProperties } from 'react';
import { action } from '@storybook/addon-actions';
import { default as Welcome } from '../app/components/me/me.component';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withMarkdownNotes} from '@storybook/addon-notes';
import ImageSlider from '../app/components/image-slider/image-slider.component';
import { bool } from 'prop-types';


/* Component wrapper */
const styles:CSSProperties = {
  textAlign: 'center',
};
const Wrapper = ({ children }:any) => <div style={styles}>{children}</div>;

/* Storie Title */
storiesOf('ImageSlider', module)
  .addDecorator(withKnobs) 
  /* Sub Title */
  .add('Try The Knobs', () => (
    <Wrapper>
      <ImageSlider 
      delay={number('Display Time in ms', 1500)}
      loop={boolean('loop or back', true)}
      ></ImageSlider>
    </Wrapper>
  ),
  { notes:'A Simple Comment Note'})