import React from 'react'
import PropTypes from 'prop-types'
import  Styles from './modalBody.module.scss'
const ModalBody = ({
    children,
    className,
}) => {
  return (
    <div className={`${Styles.container} ${className}`}>
      {children}
    </div>
  )
}

ModalBody.propTypes = {
children:PropTypes.node,
className:PropTypes.string,
}

export default ModalBody
