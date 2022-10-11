import React from 'react'
import propTypes from 'prop-types'
import Styles from './newsCard.module.scss'
import Image from '../image'
import Text from '../text'
const NewsCard = ({
className
}) => {
  return (
    <div className={Styles.wrapper}>
    <div className={Styles.newsCardMain}>
        <Image className={Styles.cardImage} src='images/newsCardImage.png' alt='image' />
        <Text className={Styles.textPrimary} strong='strong6' family='roboto' >FORCM Jason R. Dunn is the new Force Master Chief of Commander Navy Installations Command</Text>
    </div>
    <Text className={Styles.textSecond} family='poppins'>He succeeds former Chief, FORCM Greg A. Vidaurri, in the position. He served as Tomahawk LPO ...</Text>
      
    </div>
  )
}

NewsCard.propTypes = {
className:propTypes.string,
}

export default NewsCard
