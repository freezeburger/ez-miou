import React from 'react';
import ButtonProps from '../@prop-types/button.props';
import { FaBeer } from 'react-icons/fa';
/**
 * Button component will show a button
 * @param props 
 */
const Button = (props: ButtonProps) => {
    console.log(props);
    const _defaultClass = ["btn", "btn-dark"];

    /**
     * Function will handle click
     */
    const handleClick = () => {
        if (props.action) {
            //Throw an event for notify the user we clicked
            props.action();
        }else {
            //Throw an event to catch
            return;
        }
    }
    /**
     * Tab of overwrite css ClassName
     */
    const _generateCustomTabClassNames = ():string[] => {
        let customTabClassName = props.cssClassNames;
        if (!customTabClassName) {
            customTabClassName = [];
        }
        return customTabClassName;
    }
    /**
     * Generate our className Property if some want to add their custom css
     */
    const _generateClassNames = ():string => {
        _generateCustomTabClassNames();
        let cssClassNameGenerated: string = "";
        props.cssClassNames && props.cssClassNames.map((value: string) => {
            cssClassNameGenerated += cssClassNameGenerated + " " + value;
        })
        _defaultClass.map((value: string) => {
            cssClassNameGenerated += " " + value;
        })
        return cssClassNameGenerated;
    }

    /**
     * Define name of the button
     */
    let childrenContent = props.children;
    if (!childrenContent) {
        childrenContent = <p> Default cuz you can't read the spec you faggot </p>;
    }


    /**
     * Return our component
     */
    return <button className={_generateClassNames()} onClick={handleClick}>{props.icon} {childrenContent}</button>
}

Button.defaultProps = {
    children:<h2>test</h2>,
    action:() => {console.log('test')},
    icon:<FaBeer />
};

export default Button;


