import React, { CSSProperties } from 'react';
import ButtonProps, { BtnTypes } from '../@prop-types/button.props';
import { FaBeer } from 'react-icons/fa';

/**
 * generate the CSS string we will pass to the classnames attribute.
 * @param cssClassNames 
 * @param btnTypes 
 */
const getClassNames =  (cssClassNames:string[] = [], btnTypes: BtnTypes = BtnTypes.PRIMARY):string => {
 return cssClassNames.reduce( 
     (cssBase,cssName) => cssBase + ' ' + cssName ,'btn '+ btnTypes
    )  || 'btn btn-primary';
}

/**
 * Button component will show a button
 * @param props 
 */
const Button = (props: ButtonProps) => {



    const snd: HTMLAudioElement = new Audio("./souris.wav");
    let currentStyle:CSSProperties = {};
    /**
     * Function will handle click
     */
    const handleClick = (event:any) => {
        snd.play();
        if (props.action) {
            //Throw an event for notify the user we clicked
            props.action(event);
        }else {
            //Throw an event to catch
            return;
        }
        snd.currentTime=0;
    }

    const onHover = (event:any) => {
        let currentStyle:String='top:'+ (Math.random()*200)+'px ;right:'+ (Math.random()*200)+'px ; position: absolute';
        // currentStyle.top = (Math.random()*200) + "px";
        // currentStyle.right = (Math.random()*200) + "px";
        props.actionOnHover && props.actionOnHover();
        // event.target.style = currentStyle;
    }


    /**
     * Return our component
     */
    return (
        <button 
        className={getClassNames(props.cssClassNames, props.btnTypes)} 
        onClick={handleClick} 
        onMouseEnter={onHover}
        style={currentStyle}
        >
        {props.icon} { props.children || <p> Default cuz you can't read the spec you faggot </p> }
     </button>
    )
}
Button.defaultProps = {
    children:<span>test</span>,
    btnTypes: BtnTypes.SUCESS,
    action: () => {},
    icon:<FaBeer />
};


export default Button;