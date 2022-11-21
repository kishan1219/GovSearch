import React from 'react'
import Styles from './card-items.module.scss'
import PropTypes from 'prop-types'
import {Text } from '../../../components/shared/index'


const CardItems = ({
    textFirst,
    textSecond,
    textThird,
    color1,
    color2,
    color3,
    isContactText,
    isAssetsText,
    isChildText,
    fontweight1,
    fontweight2,
    fontweight3


}) => {
    return (

        //   Main Container started header
        <div className={Styles.cardContainer}>
            {/* Content Box started here  */}
            {isContactText && <div className={Styles.contentBox}>
                <Text className={Styles.textFirst} variant="smText" color={color1} strong={fontweight1}>{textFirst}</Text>
                <Text className={Styles.textSecond} variant="smText" color={color2} strong={fontweight2}>{textSecond}</Text>
                <Text className={Styles.textThird} variant="smText" color={color3}  strong={fontweight3}>{textThird}</Text>
            </div>
            }
            {/* Content Box End here */}

            {isAssetsText && 
            <div className={Styles.contentBox}>
                <Text className={Styles.assetsFirst} variant="smText" color={color1} strong={fontweight1}>{textFirst}</Text>
                <Text className={Styles.assetsSecond} variant="smText" color={color2} strong={fontweight2}>{textSecond}</Text>
                <Text className={Styles.assetsThird} variant="smText" color={color3} strong={fontweight3}>{textThird}</Text>

            </div>}

            {isChildText && <div className={Styles.contentBox}>
                <Text className={Styles.childFirst} variant="smText" color={color1} strong={fontweight1} >{textFirst}</Text>
                <Text className={Styles.childSecond} variant="smText" color={color2} strong={fontweight2} >{textSecond}</Text>
                <Text className={Styles.childThird} variant="smText" color={color3} strong={fontweight3}>{textThird}</Text>
            </div>}


        </div>

    )
}
CardItems.defaultProps = {
    isContactText: true,
    isAssetsText: false,
    isChildText: false
}
CardItems.propTypes = {
    textFirst: PropTypes.bool,
    textSecond: PropTypes.bool,
    textThird: PropTypes.bool,
    color1:PropTypes.string,
    color2:PropTypes.string,
    color3:PropTypes.string,
    fontweight1:PropTypes.string,
    fontweight2:PropTypes.string,
    fontweight3:PropTypes.string

}

export default CardItems
