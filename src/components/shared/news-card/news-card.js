import React from 'react'
import propTypes from 'prop-types'
import Styles from './news-card.module.scss'
import Image from '../image'
import Text from '../text'
const NewsCard = ({
src,
textFirst,
textSecond,
}) => {
  return (
    <div className={Styles.wrapper}>
    <Text className={"mB14 textCenter"} variant="xbigText" color="darkGray" strong="strong3">News</Text>
   <div className={`${Styles.scrollbar} ${Styles.scrollBar} ${Styles.scrollWrapper}`}>
    <div className={Styles.newsCardMain}>
        <Image className={Styles.cardImage} src={src} alt='image' />
        <Text family='roboto' color={"black"} variant={"xxxlText"} className={Styles.textPrimary} strong='strong6' >{textFirst}</Text>
    </div>
    <Text color={"black"} variant={"smText"} className={Styles.textSecond} >{textSecond}</Text>
   </div>
      
    </div>
  )
}

NewsCard.propTypes = {
src:propTypes.string,
textFirst:propTypes.string,
textSecond:propTypes.string,
}

export default NewsCard
