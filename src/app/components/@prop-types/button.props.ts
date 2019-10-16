interface ButtonProps{
    /**
     * Element Show in the button
     */
    children: string;
    /**
     * Function we will call when the button will be clicked
     */
    action: Function;
    /**
     * Icon of the button based on reactIcon
     */
    icon?: JSX.Element;
    /**
    * tab of className for css custom
    */
    cssClassNames?: string[];

}

export default ButtonProps;