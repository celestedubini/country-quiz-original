import React from 'react';
import Icon from "../../atoms/Icon/Icon";
import styles from './Button.module.css'

interface ButtonProps{
    label: string
    onClick?: (arg0: any) => void
    className: string
    optionAnswer?: boolean
    value?: string
    optionLetter?: string
    typeIcon?: boolean | null
}

function Button({label, onClick, className, optionAnswer, value, optionLetter, typeIcon}:ButtonProps) {
    return (
        <>
            {!optionAnswer && <button onClick={onClick} className={className}>{label}</button>}
            {optionAnswer && <button onClick={onClick} value={value} className={className}>
                <span className={styles.optionLetter}>{optionLetter}</span>
                <span className={styles.containerLabelIcon}><span>{label}</span><Icon icon={typeIcon}/></span></button>}
        </>

    );
}

export default Button;