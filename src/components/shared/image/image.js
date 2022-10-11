import React from 'react'
import PropTypes from 'prop-types'

const Image = ({className,src,alt,height,width,onClick,htmlFor}) => {
  return (

      <img className={className} htmlFor={htmlFor} src={src} alt={alt} height={height} width={width} onClick= {onClick} />

  )
}

Image.defaultProps = {
alt: "Image"
}

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    height: PropTypes.string,
    width: PropTypes.string,
    onClick: PropTypes.func,
}

export default Image