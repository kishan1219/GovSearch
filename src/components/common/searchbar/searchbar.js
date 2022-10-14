import React from 'react'
import Styles from './searchbar.module.scss';

import {
  Input,
  Icon,
  Button,
  Text
} from "../../shared/index";
import propTypes from 'prop-types'

export default function SearchBar({ type, placeholder,onClick,inputclassName,iconclassName,size,iconColor }) {
  return (
    <div className={Styles.search}>
      
 <div className={Styles.mainIco}>
                <Input className={`${Styles.inputcla} ${inputclassName}`} placeholder={placeholder} />
                <Icon  type="search" size={size} color={iconColor} onClick={onClick} className={`${Styles.rightIcon} ${iconclassName}`} />
               
                </div>
       <Button size={"md"} variant={"solidSecondary"}>Search</Button>
       <Text className={Styles.textAdv} variant={"smText"} color={"gray"} strong={"strong4"}>Advanced</Text>

    </div >



  );
}
SearchBar.propTypes = {
  // label: propTypes.string,
  placeholder: propTypes.string,
  className: propTypes.any,
  type: propTypes.any,
  onClick: propTypes.func,
}
