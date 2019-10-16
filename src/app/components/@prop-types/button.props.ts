interface ButtonProps{
    /**
     * Element Show in the button
     */
    children: React.ReactElement;
    /**
     * Function we will call when the button will be clicked
     */
    action: Function;
    /**
     * Icon of the button based on reactIcon
     * Url : https://react-icons.netlify.com/#/icons/fa
     */
    icon?: React.ReactElement;
    /**
    * tab of className for css custom
    */
    cssClassNames?: string[];

}

export default ButtonProps;