import React from 'react';
import MeProps from '../@prop-types/me.props';
import defaultProps from './me.default-props';

export const Me = (props: MeProps) => {
  return (
    <div>
      {props.name}
     </div>
  );
};

Me.defaultProps = defaultProps;

export default Me;
