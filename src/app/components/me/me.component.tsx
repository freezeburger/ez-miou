import React from 'react';
import Avatar from '../avatar/avatar.component';

export const Me = (props: any) => {
  console.log(props); //readonly
  return (
    <div>
      Me <Avatar rounded={true} />
    </div>
  );
};

export default Me;
