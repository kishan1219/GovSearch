import React from 'react'
import Styles from './search.module.scss';

import {
  Input,
  Icon
} from "../index";
import propTypes from 'prop-types'

export default function Search({ type, placeholder,onClick,inputclassName,iconclassName,size,iconColor }) {
  return (
    <div className={Styles.search}>
      
      <Input className={`${Styles.inputMain} ${inputclassName}`} placeholder={placeholder}  />
       <div className={Styles.rightIcon}><Icon  type="search" size={size} color={iconColor} onClick={onClick} className={`${Styles.iconMain} ${iconclassName}`}/></div>
      

    </div >



  );
}
Search.propTypes = {
  // label: propTypes.string,
  placeholder: propTypes.string,
  className: propTypes.any,
  type: propTypes.any,
  onClick: propTypes.func,
}
