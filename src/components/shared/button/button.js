import React from 'react';
import PropTypes from 'prop-types';
import styles from '../button/button.module.scss';


const Button = ({
    variant,
    size,
    type,
    block,
    disabled,
    btnHandler,
    color,
    background,
    children,
    btnClass,

}) => {
    return (
        <button type={type}
            className={`${styles.button}
         ${styles[variant]} ${styles[size]} 
         ${btnClass ? btnClass : ''} ${styles[color]} 
         ${styles[background]}${block ? styles.block : ''} `}
            disabled={disabled}
            onClick={btnHandler}
        >
            {children}
        </button>
    );

};
Button.propTypes = {
    variant: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    btnHandler: PropTypes.func,
    children: PropTypes.any,
    text: PropTypes.string,
    color: PropTypes.string,
    background: PropTypes.string,
    btnClass: PropTypes.any

};


Button.defaultProps = {
    variant: "solidPrimary",
    size: "md",
    block: false,
    disabled: false,
    children: 'Button Title',
}
export default Button;