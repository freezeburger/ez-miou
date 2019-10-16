interface ButtonProps{
    /**
     * Name shown
     */
    name: string;
    /**
     * Function we will call when the button will be clicked
     */
    action: Function;
    /**
     * Width of the button
     */
    width?: number;
    /**
     * Height of the button
     */
    height?: number;
    /**
     * Icon of the button based on reactIcon
     */
    icon?: JSX.Element;
    /**
    * tab of className for css custom
    */
   tabClassName?: string[];

}

export default ButtonProps;