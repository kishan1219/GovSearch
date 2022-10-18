import React from 'react'
import propTypes from 'prop-types'
import Styles from './newsCard.module.scss'
import Image from '../image'
import Text from '../text'
const NewsCard = ({
src,
textFirst,
textSecond,
}) => {
  return (
    <div className={Styles.wrapper}>
    <div className={Styles.newsCardMain}>
        <Image className={Styles.cardImage} src={src} alt='image' />
        <Text family='roboto' color={"black"} variant={"xxxlText"} className={Styles.textPrimary} strong='strong6' >{textFirst}</Text>
    </div>
    <Text color={"black"} variant={"smText"} className={Styles.textSecond} >{textSecond}</Text>
      
    </div>
  )
}

NewsCard.propTypes = {
src:propTypes.string,
textFirst:propTypes.string,
textSecond:propTypes.string,
}

export default NewsCard
