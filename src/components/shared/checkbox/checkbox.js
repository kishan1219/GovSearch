import React from 'react'
import PropTypes from 'prop-types'
import Styles from './checkbox.module.scss'
import Text from '../text'
const CheckBox = ({
    onChange,
    labelClass,
    checked,
    reference,
    checkBoxName,
    labelName,
    value,
    disabled,
    variant,
    customClass,
    className,
    color,
    id
  }) => {
    return (
      <div className={`${Styles.checkboxContainer} ${className}`}>
        <label className={`${Styles.labelChecked} ${Styles[variant]} ${labelClass}
         ${labelName === undefined ? Styles.displayBlock : ""}`}>
          <input
           defaultChecked ={checked}
            type="checkbox"
            onChange={onChange}
            {...reference}
            name={checkBoxName}
            value={value}
            disabled={disabled}
            id={id}
          />
          <Text htmlFor={id} className={Styles.labelmark} />
          <Text htmlFor={id} className={`${Styles.labelWrapper} ${[customClass]} ${Styles[color]}`}>{labelName}</Text>
        </label>
      </div>
    )
  }
  
  CheckBox.defaultProps = {
    labelClass: ''
  }
  
  CheckBox.propTypes = {
    onChange: PropTypes.func,
    labelClass: PropTypes.string,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    reference: PropTypes.any,
    checkBoxName: PropTypes.string,
    labelName: PropTypes.any,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    variant: PropTypes.string,
    customClass: PropTypes.string,
    color: PropTypes.string,
  }
  export default CheckBox;