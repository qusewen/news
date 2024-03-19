import classes from './index.module.scss'
import {memo} from "react";
import {ButtonType} from "../../types/enums/buttonEnum.ts";

interface ButtonProps {
    title: string;
    type: ButtonType;
    onClick?: () => void;
}

const Button = memo(({title, type, onClick}: ButtonProps) => {
    return (
        <button onClick={onClick}
                className={type === ButtonType.BACK ? classes.backButton : classes.button}>{title}</button>
    )
})

export default Button
