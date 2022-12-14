import React from 'react'
import Styles from './card-items.module.scss'
import PropTypes from 'prop-types'
import { Text, Icon } from '../../../components/shared/index'


const CardItems = ({
    isContactText,
    isAssetsText,
    isChildText,
    isPosition,
    isPositionFirst,
    textFirst,
    textSecond,
    textThird,
    colorOne,
    colorTwo,
    colorThree,
    fontweightOne,
    fontweightTwo,
    fontweightThree,
    accountOne,
    accountTwo,
    paraFirst,
    paraSecond,
    paraThird,
   


}) => {
    return (
        <div className={Styles.cardContainer}>
            {isContactText && <div className={Styles.contentBox}>
                <Text className={Styles.textFirst} variant="smText" color={colorOne} strong={fontweightOne}>{textFirst}</Text>
                <Text className={Styles.textSecond} variant="smText" color={colorTwo} strong={fontweightTwo}>{textSecond}</Text>
                <Text className={Styles.textThird} variant="smText" color={colorThree} strong={fontweightThree}>{textThird}</Text>
            </div>
            }
            {isAssetsText &&
                <div className={Styles.contentBox}>
                    <Text className={Styles.assetsFirst} variant="smText" color={colorOne} strong={fontweightOne}>{textFirst}</Text>
                    <Text className={Styles.assetsSecond} variant="smText" color={colorTwo} strong={fontweightTwo}>{textSecond}</Text>
                    <Text className={Styles.assetsThird} variant="smText" color={colorThree} strong={fontweightThree}>{textThird}</Text>
                </div>
            }

            {isChildText && <div className={Styles.contentBox}>
                <Text className={Styles.childFirst} variant="smText" color={colorOne} strong={fontweightOne} >{textFirst}</Text>
                <Text className={Styles.childSecond} variant="smText" color={colorTwo} strong={fontweightTwo} >{textSecond}</Text>
                <Text className={Styles.childThird} variant="smText" color={colorTwo} strong={fontweightThree}>{textThird}</Text>
            </div>}
            {isPosition && <div className={Styles.contentBox}>
                <Text className={Styles.accountfirst} variant="lgText" color={colorOne} strong={fontweightOne}>{accountOne}</Text>
                <Text className={Styles.accountSec} variant="lgText" color={colorTwo} strong={fontweightTwo}>{accountTwo}</Text>

                <div className={Styles.accountThird}>
                    <Icon className={Styles.listIcon} type="linkedIn" variant="primary" size="icon_medium" />
                    <Icon className={Styles.listIcon} type={"envelope"} variant="primary" size="icon_medium" />
                    <Icon className={Styles.listIcon} type={"phone"}  variant="primary" size="icon_medium" />
                    <Icon className={Styles.listIcon} type={"userinfo"} variant="primary" size="icon_medium" />
                
                </div>
            </div>
            }
            {isPositionFirst && <div className={Styles.contentBox}>
                <Text className={Styles.posTextOne} variant="smText" color={colorOne} strong={fontweightOne}>{paraFirst}</Text>
                <Text className={Styles.posTextSec} variant="smText" color={colorTwo} strong={fontweightTwo}>{paraSecond}</Text>
                <Text className={Styles.posTextThd} variant="smText" color={colorThree} strong={fontweightThree}>{paraThird}</Text>
            </div>
            }


        </div>

    )
}
CardItems.defaultProps = {
    isContactText: true,
    isAssetsText: false,
    isChildText: false,
    isPosition: false,
    isPositionFirst: false,
}
CardItems.propTypes = {
    textFirst: PropTypes.bool,
    textSecond: PropTypes.bool,
    textThird: PropTypes.bool,
    color1: PropTypes.string,
    color2: PropTypes.string,
    color3: PropTypes.string,
    fontweight1: PropTypes.string,
    fontweight2: PropTypes.string,
    fontweight3: PropTypes.string

}

export default CardItems
