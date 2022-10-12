import React from 'react'
import PropTypes from 'prop-types'
import styles from './list-group.module.scss'

/**
 * Render ListGroup
 * @param {node} children
 * @param {string} variant
 * @param {string} customClass
 * @returns node
 */

const ListGroup = ({
    children,
    variant,
    className
  }) => {
  return (
    <ul className={`${styles[variant]} ${[className]}`}>
      {children}
    </ul>
  )
}

ListGroup.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  customClass: PropTypes.string
}

export default ListGroup
