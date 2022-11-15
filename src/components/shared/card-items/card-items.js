import React from 'react'
import Styles from './card-items.module.scss'
import { Card, Text} from '../../../components/shared/index'

const CardItems = ({
    textFirst,
    textSecond,
    textThird

}) => {
  return (
    <div className={Styles.cardContainer}>
        <Card className={Styles.cardBox}>
        <Text className={`${Styles.latestHeading}`} variant="smText" color="darkGray" strong="strong6">{textFirst}</Text>
        <Text className={`${Styles.latestHeading}`} variant="smText" color="darkGray" strong="strong6">{textSecond}</Text>
        <Text className={`${Styles.latestHeading}`} variant="smText" color="darkGray" strong="strong6">{textThird}</Text>
        </Card>
    
    </div>
  )
}

export default CardItems
