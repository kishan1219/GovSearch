import React from 'react'
import PropTypes from 'prop-types'
import Styles from './modal.module.scss'
import ModalHeader from './modal-header/modal-header'
import ModalBody from './modal-body'
/**
 * Render Icon
 * @param {string} size
 * @param {string} variant
 * @param {string} className
 * @param {string} bodyClass
 * @param {string} modalHeading
 * @param {fun} iconHandler
 * @param {fun} handler
 * @param {bool} headShow
 * @param {bool} isIcon
 * @param {string} modalHeading
 * @param {string} bodyVariant
 * @param {string} children
 */
const Modal = ({
    size,
    variant,
    className,
    bodyClass,
    iconHandler,
    handler,
    headShow,
    isIcon,
    modalHeading,
    bodyVariant,
    children,
}) => {
    return (
        <div className={Styles.modalOverlay} >
            <div className={`${Styles.container} ${size} ${variant} ${className}`}>
                <div className={`${Styles.bodyContainer} ${bodyClass}`}>
                    <ModalHeader headShow={headShow} iconHandler={iconHandler} handler={handler} isIcon={isIcon} modalHeading={modalHeading} />
                    <ModalBody className={`${Styles.bodyMain} ${bodyVariant}`} >{children}</ModalBody>
                </div>

            </div>
        </div>
    )
}

Modal.propTypes = {
    size: PropTypes.string,
    variant: PropTypes.string,
    className: PropTypes.string,
    bodyClass: PropTypes.string,
    iconHandler: PropTypes.func,
    handler: PropTypes.func,
    headShow: PropTypes.bool,
    isIcon: PropTypes.bool,
    modalHeading: PropTypes.string,
    bodyVariant: PropTypes.string,
    children: PropTypes.any,
}

export default Modal
