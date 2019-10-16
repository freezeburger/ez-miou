import React from 'react';
import ButtonProps from '../@prop-types/button.props';

const Button = (props: ButtonProps) => {
    console.log(props);

    const handleClick = () => {
        console.log('button clicked');
        if (props.action) {
            props.action();
        }
    }

    /**
     * Define name of the button
     */
    let nameShown = props.name;
    if (!nameShown) {
        nameShown = "Default cuz you can't read the spec you faggot";
    }
    return <div><button className="btn btn-dark" onClick={handleClick}>{nameShown}</button></div>
}

export default Button;


