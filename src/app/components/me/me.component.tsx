import React from 'react';
import MeProps from '../@prop-types/me.props';

export const Me = (props: MeProps) => {
  return (
    <div>
      {props.name}
     </div>
  );
};
Me.defaultProps = {
  name:'Hello'
}

export default Me;
