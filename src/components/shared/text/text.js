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
}) => {
  const fontColor = color ? Styles[color] : ''
  const fontWeight = strong ? Styles[strong] : ''
  const fontFamily = family ? Styles[family] : ''
  return (
    <div
      htmlFor={htmlfor}
      className={`${Styles[variant]} ${fontColor} ${fontWeight} ${fontFamily} ${[className]}`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

// Default Props
Text.defaultProps = {
  variant: 'xxlText',
  className: '',
  color: 'primary',
  children: '',
  family:'',
  strong:'strong4'
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
