import React, { CSSProperties } from 'react';
import { action } from '@storybook/addon-actions';
import { default as Welcome } from '../app/components/me/me.component';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { withMarkdownNotes} from '@storybook/addon-notes';
import Button from '../app/components/button/button.component';
import { BtnTypes } from '../app/components/@prop-types/button.props';


/* Component wrapper */
const styles:CSSProperties = {
  textAlign: 'center',
};
const Wrapper = ({ children }:any) => 
<div style={styles}>
  {children}
  <pre>
    {'<Button btnTypes=' + select('ClassCss', BtnTypes, BtnTypes.PRIMARY) + ' action=yourOnClickAction() actionOnHover=yourOnHoverAction()><span>'+ text('Input Text','pass the mouse on me you pervert')+'</span></Button>'}
  </pre>
</div>
;

/* Storie Title */
storiesOf('ButtonConfig', module)
  .addDecorator(withKnobs) 
  /* Sub Title */
  .add('Button change text', () => (
    <Wrapper>
      <Button action={action('click')}>{<span>{text('Input Text','Change me')}</span>}</Button>
    </Wrapper>
  ),
  { notes:'Simple click notification'})
  .add('Button change actionFunction', () => (
    <Wrapper>
      <Button action={action('click')}>{<span>{text('Input Text','Click me you morron')}</span>}</Button>
    </Wrapper>
  ),
  { notes:'Simple click action'})
  .add('Button change actionOnHover', () => (
    <Wrapper>
      <Button action={action('click')} actionOnHover={action('MouseHover')}>{<span>{text('Input Text','pass the mouse on me you pervert')}</span>}</Button>
    </Wrapper>
  ),
  { notes:'Simple onHover'})
  .add('Button custom my class', () => (
    <Wrapper>
      <Button btnTypes={select('ClassCss', BtnTypes, BtnTypes.PRIMARY)} action={action('click')} actionOnHover={action('MouseHover')}>{<span>{text('Input Text','pass the mouse on me you pervert')}</span>}</Button>
    </Wrapper>
  ),
  { notes:''})