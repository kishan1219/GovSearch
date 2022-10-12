import React from 'react'
import PropTypes from 'prop-types'
import Styles from './modalHeader.module.scss'
import Icon from '../icon'

/**
 * Render Icon
 
 * @param {string} modalHeading
 * @param {fun}  handler
 * @param {string} className
 * @param {bool} isIcon
 */
const ModalHeader = ({
    modalHeading,
    handler,
    className,
    isIcon,
}) => {
    return (
      <>
         {isIcon &&
        <>
        <Icon className={Styles.closeIcon} type='close' color={"black"} variant="xxxlText" />
        <div className={`${Styles.container} ${className}`}>
            {modalHeading}
        </div>
        </>
        }
      </>
    )
}
ModalHeader.defaultProps = {
    isIcon: true,
}
ModalHeader.propTypes = {
modalHeading:PropTypes.string,
handler:PropTypes.func,
isIcon:PropTypes.bool,
className:PropTypes.string,

}

export default ModalHeader
