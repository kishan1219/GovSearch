import React from 'react'
import propTypes from 'prop-types'
import Styles from './newsCard.module.scss'
import Image from '../image'
const NewsCard = ({
className
}) => {
  return (
    <div className={Styles.wrapper}>
    <div>
        <Image src='images/newsCardImage.png' alt='image' />
    </div>
      
    </div>
  )
}

NewsCard.propTypes = {
className:propTypes.string,
}

export default NewsCard
