import React from 'react'
import PropTypes from 'prop-types'
import Styles from './modal-header.module.scss'
import Icon from '../../icon'
import Text from '../../text'

/**
 * Render Icon
 
 * @param {string} modalHeading
 * @param {fun} handler
 * @param {fun} iconHandler
 * @param {string} className
 * @param {bool} isIcon
 * @param {bool} headShow
 */
const ModalHeader = ({
    headShow,
    isIcon,
    iconHandler,
    modalHeading,
    handler,
    className,
}) => {
    return (
        <>
            {headShow &&
                <div className={`${Styles.container} ${className}`}>
                    {isIcon && <Icon onClick={iconHandler} className={Styles.closeIcon} type='close' color={"black"} variant="xxxlText" />}
                    <Text strong='strong7' family='poppins' color={"secondary "} handler={handler} className={Styles.headClass}>
                        {modalHeading}
                    </Text>
                </div>
            }
        </>
    )
}
ModalHeader.defaultProps = {
    headShow: '',
    isIcon: '',
}
ModalHeader.propTypes = {
    modalHeading: PropTypes.string,
    iconHandler: PropTypes.func,
    handler: PropTypes.func,
    headShow: PropTypes.any,
    isIcon: PropTypes.any,
    className: PropTypes.string,

}

export default ModalHeader
