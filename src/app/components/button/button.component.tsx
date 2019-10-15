import React from 'react';

const Button = (props: any) => {
    console.log(props);
    return <div><button style={{backgroundColor: props.color}} >{props.name}</button></div>
}

export default Button;


