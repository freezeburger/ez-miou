import { IconType } from "react-icons/lib/cjs/iconBase";

interface ButtonProps{
    name: string;
    action: Function;
    width?: number;
    height?: number;
    icon?: IconType;
}

export default ButtonProps;