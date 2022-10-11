import React from 'react'
import './search.module.scss';
import {
  Input,
  Icon
} from "../index";
import propTypes from 'prop-types'


import { useState } from 'react';
export default function Search({ type, placeholder,onClick,className }) {
  return (
    <div className=' search'>
      
      <Input className={className}placeholder={placeholder} />
      <div className='rightIcon'><Icon type={type} onClick={onClick} />
      </div>

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
