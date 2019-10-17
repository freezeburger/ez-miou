import React, { CSSProperties } from 'react';
import { action } from '@storybook/addon-actions';
import { default as Welcome } from '../app/components/me/me.component';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withMarkdownNotes} from '@storybook/addon-notes';
import ImageSlider from '../app/components/image-slider/image-slider.component';
import { bool } from 'prop-types';
import defaultProps from '../app/components/image-slider/image-slider.default-props';


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
      imageList={[text('Pic 1', defaultProps.imageList[0]),
                  text('Pic 2', defaultProps.imageList[1]),
                  text('Pic 3', defaultProps.imageList[2])]
      }
      ></ImageSlider>
    </Wrapper>
  ),
  { notes:'Not yet finished... '})