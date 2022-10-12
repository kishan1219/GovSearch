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
      <div className={`${Styles.checkboxWrapper} ${className}`}>
        <label className={`${Styles.checkedSection} ${Styles[variant]} ${labelClass}
         ${labelName === undefined ? Styles.displayBlock : ""}`}>
          <input
           defaultChecked ={checked}
            type="checkbox"
            onChange={onChange}
            reference={reference}
            name={checkBoxName}
            value={value}
            disabled={disabled}
            id={id}
          />
          <Text htmlFor={id} className={Styles.checkmark} />
          <Text htmlFor={id} className={`${Styles.nameWrapper} ${[customClass]} ${Styles[color]}`}>{labelName}</Text>
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
    labelName: PropTypes.string,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    variant: PropTypes.string,
    customClass: PropTypes.string,
    color: PropTypes.string,
  }
  export default CheckBox;