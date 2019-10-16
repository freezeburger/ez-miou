import React from 'react';
import ButtonProps from '../@prop-types/button.props';

const Button = (props: ButtonProps) => {
    console.log(props);
    const _defaultClass = ["btn", "btn-dark"];

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
     * Tab of overwrite css ClassName
     */
    let customTabClassName = props.tabClassName;
    if (!customTabClassName) {
        customTabClassName = [];
    }

    /**
     * Generate our className Property if some want to add their custom css
     */
    let cssClassName: string = "";
    props.tabClassName && props.tabClassName.map((value: string) => {
        cssClassName += cssClassName + " " + value;
    })
    _defaultClass.map((value: string) => {
        cssClassName += " " + value;
    })
    console.log(cssClassName);


    /**
     * Define name of the button
     */
    let nameShown = props.name;
    if (!nameShown) {
        nameShown = "Default cuz you can't read the spec you faggot";
    }


    /**
     * Return our component
     */
    return <div><button className={cssClassName} onClick={handleClick}>{props.icon} {nameShown}</button></div>
}

export default Button;


