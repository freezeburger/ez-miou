import React from 'react';
import ButtonProps, { BtnTypes } from '../@prop-types/button.props';
import { FaBeer } from 'react-icons/fa';
import YouTube, { Options } from 'react-youtube';

/**
 * generate the CSS string we will pass to the classnames attribute.
 * @param cssClassNames 
 * @param btnTypes 
 */
const getClassNames =  (cssClassNames:string[] = [], btnTypes?: BtnTypes):string => cssClassNames.reduce( (cssBase,cssName) => cssBase + ' ' + cssName ,'btn '+ btnTypes)  || 'btn btn-primary';

/**
 * Button component will show a button
 * @param props 
 */
const Button = (props: ButtonProps) => {
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

    const onHover = () => {
        props.actionOnHover && props.actionOnHover();
    }


    /**
     * Return our component
     */
    return <button 
    className={getClassNames(props.cssClassNames, props.btnTypes)} 
    onClick={handleClick} 
    onMouseEnter={onHover}
    >
        {props.icon} {props.children || <p> Default cuz you can't read the spec you faggot </p>}
    </button>
}

const opts:Options = {
    height: '0',
    width: '0',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      start: 8
    }
}
Button.defaultProps = {
    children:<YouTube opts={opts} videoId="Eb3PQmao7QE"></YouTube>,
    btnTypes: BtnTypes.SUCESS,
    action: () => {},
    icon:<FaBeer />
};


export default Button;


