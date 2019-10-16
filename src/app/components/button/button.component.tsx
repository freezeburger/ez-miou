import React from 'react';
import ButtonProps from '../@prop-types/button.props';

const Button = (props: ButtonProps) => {
    console.log(props);

    /**
     * Function will handle click
     */
    const handleClick = () => {
        if (props.action) {
            props.action();
        }else {
            //Show Notif no action attached
            return;
        }
    }

    /**
     * Define name of the button
     */
    let nameShown = props.name;
    if (!nameShown) {
        nameShown = "Default cuz you can't read the spec you faggot";
    }
    return <div><button className="btn btn-dark" onClick={handleClick}>{props.icon} {nameShown}</button></div>
}

export default Button;


