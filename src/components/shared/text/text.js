import React from 'react';
import PropTypes from 'prop-types';
import Styles from './text.module.scss';

/**
 * Name: Text
 * Desc: Render text
 * @param {node} children
 * @param {string} color
 * @param {isRequired} text
 * @param {string} variant
 * @param {string} className
 */

const Text = ({
  children,
  color,
  strong,
  variant,
  className,
  handleClick,
  htmlfor,
  family,
  underline,
  value,
}) => {
  const fontColor = color ? Styles[color] : ''
  const fontWeight = strong ? Styles[strong] : ''
  const fontFamily = family ? Styles[family] : ''
  return (
    <div
      htmlFor={htmlfor}
      className={`${Styles[variant]} ${fontColor} ${value} ${underline} ${fontWeight} ${fontFamily} ${[className]}`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

// Default Props
Text.defaultProps = {
  variant: 'mdText',
  className: '',
  color: '',
  children: '',
  family:'poppins',
  strong:''
}
// PropTypes Validation
Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  fontFamily: PropTypes.string,
}

export default Text
