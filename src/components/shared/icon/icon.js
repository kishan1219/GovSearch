import React from 'react';
import PropTypes from 'prop-types';
import { ICONTYPES} from './constant';
import Styles from './icon.module.scss';

/**
 * Render Icon
 * @param {isRequired} type
 * @param {bool} disabled
 * @param {string} color
 * @param {string} className
 * @param {fun} onClick
 * @param {string} title
 * @param {string} active
 * @param {string} variant
 * @param {string} size
 */

const returnIconClass = (props) => {
  let iconClass = ''
  if (ICONTYPES[props.type] !== undefined) {
    iconClass = ICONTYPES[props.type].iconClass
  }
  if (props.active) {
    iconClass += ' ' + props.active
  }
  return iconClass
}

const returnIconTitle = (props) => {
  let iconTitle = ''
  if (props.title) {
    iconTitle = props.title
  } else if (ICONTYPES[props.type] !== undefined) {
    iconTitle += ' ' + ICONTYPES[props.type].iconTitle
  }
  return iconTitle
}

const Icon = (props) => {    
  const onClick = props.onClick && (e => props.onClick(e))
  return (
    <i
      className={`${returnIconClass(props)} ${props.color ? Styles[props.color] : ''} ${[props.className]} ${Styles[props.variant]} ${Styles[props.size]}`}
      onClick={onClick}
      id={props.id}
      title={returnIconTitle(props)}
    ></i>
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  active: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string
};

Icon.defaultProps = {
  disabled: false,
  type: ICONTYPES.profile,
  color: ''
}

export default Icon