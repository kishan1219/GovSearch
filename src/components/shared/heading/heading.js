import React from 'react'
import PropTypes from 'prop-types'
import { HEADINGTYPES } from './constant'
import styles from './heading.module.scss'

const renderHeading = ({
  headingType,
  children,
  className,
  color, 
  lineThrough, 
  fontWeight,
  onClick
}) => {
  const fontColor = color ? styles[color] : ''
  const strikeThrough = lineThrough ? styles[lineThrough] : ''
  const textVariant = fontWeight ? styles[fontWeight] : ''
  switch (headingType) {
    case 'h1': {
      return <h1  onClick={onClick} className={`${styles[headingType]} ${[className]} ${fontColor} ${textVariant} ${strikeThrough} `}>{children}</h1>
    }
    case 'h2': {
      return <h2  onClick={onClick}  className={`${styles[headingType]} ${[className]} ${fontColor} ${textVariant} ${strikeThrough}`}>{children}</h2>
    }
    case 'h3': {
      return <h3  onClick={onClick}  className={`${styles[headingType]} ${[className]} ${fontColor} ${textVariant} ${strikeThrough}`}>{children}</h3>
    }
    case 'h4': {
      return <h4 onClick={onClick} className={`${styles[headingType]} ${[className]} ${fontColor} ${textVariant} ${strikeThrough}`}>{children}</h4>
    }
    case 'h5': {
      return <h5 onClick={onClick}  className={`${styles[headingType]} ${[className]} ${fontColor} ${textVariant} ${strikeThrough}`}>{children}</h5>
    }
    case 'h6': {
      return <h6 onClick={onClick}  className={`${styles[headingType]} ${[className]} ${fontColor} ${textVariant} ${strikeThrough}`}>{children}</h6>
    }
    default: {
      return <h5 onClick={onClick}  className={`${styles[headingType]} ${[className]} ${fontColor} ${textVariant} ${strikeThrough}`}>{children}</h5>
    }
  }
}

const Heading = (props) => {
  return (
    renderHeading(props)
  )
}

Heading.defaultProps = {
  type: HEADINGTYPES.TEXT,
  headingType: 'h4',
  color: 'primary',
}

Heading.propTypes = {
  headingType: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  lineThrough: PropTypes.string,
  fontWeight: PropTypes.string,
  onClick:PropTypes.func
}

export default Heading

