import React, { CSSProperties } from 'react';
import { action } from '@storybook/addon-actions';
import { default as Welcome } from '../app/components/me/me.component';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withMarkdownNotes} from '@storybook/addon-notes';


/* Component wrapper */
const styles:CSSProperties = {
  textAlign: 'center',
};
const Wrapper = ({ children }:any) => <div style={styles}>{children}</div>;

/* Storie Title */
storiesOf('Configuration', module)
  .addDecorator(withKnobs) 
  /* Sub Title */
  .add('Try The Knobs', () => (
    <Wrapper>
      <Welcome>{text('Input Text','Use The Knobs')}</Welcome>
      <button className="btn btn-primary" onClick={action('clicked')}>Next Story</button>
    </Wrapper>
  ),
  { notes:'A Simple Comment Note'})