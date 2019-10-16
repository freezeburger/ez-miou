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
    /**
     * Type of the button
     */
    btnTypes?: BtnTypes;

}

export enum BtnTypes{
    PRIMARY= 'btn-primary',
    SECONDARY= 'btn-secondary',
    SUCESS= 'btn-success',
    DANGER= 'btn-danger',
    WARNING= 'btn-warning',
    INFO= 'btn-info',

}

export default ButtonProps;