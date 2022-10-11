import React from 'react'
import PropTypes from 'prop-types'
import styles from './checkbox.module.scss'
const CheckBox = ({
    onChange,
    labelClass,
    defaultChecked,
    reference,
    checkBoxName,
    labelName,
    value,
    disabled,
    variant,
    customClass,
    className,
    color
  }) => {
    return (
      <div className={`${styles.checkboxWrapper} ${className}`}>
        <label className={`${styles.checkedSection} ${styles[variant]} ${labelClass}
         ${labelName === undefined ? styles.displayBlock : ""}`}>
          <input
            checked={defaultChecked}
            type="checkbox"
            onChange={onChange}
            reference={reference}
            name={checkBoxName}
            value={value}
            disabled={disabled}
          />
          {/* <Text className={styles.checkmark} />
          <Text className={`${styles.nameWrapper} ${[customClass]} ${styles[color]}`}>{labelName}</Text> */}
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