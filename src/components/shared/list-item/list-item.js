import React from 'react'
import PropTypes from 'prop-types'
import Styles from './list-item.module.scss';

/**
 * Render ListItem
 * @param {any} children
 * @param {func} handleClick
 * @param {string} className
 * @returns node
 */

const ListItem = ({
    children,
    handleClick,
    className,
  }) => {
  return (
    <li
      className={`${Styles.listItem} ${[className]}`}
      onClick={handleClick}
    >
      {children}
    </li>
  )}

ListItem.propTypes = {
  children: PropTypes.any,
  handleClick: PropTypes.func,
  className: PropTypes.string,
}

export default ListItem
