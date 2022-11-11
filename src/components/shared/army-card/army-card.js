import React from 'react'
import styles from './army-card.module.scss'
import Image from "../image/image";
import Text from "../text/text";
import Icon from "../icon";
import propTypes from "prop-types";
const ArmyCard = ({ src, imageClass, departmentClass, isGreenBorder, isDownLacsText, isVirgina, istopLacsText, imageSize, isContactIcon, isArlingtonText }) => {
    return (
        <div className={`${styles.cardContainer} ${"dFlex"}`}>
            {isGreenBorder
                && <div className={styles.greenBorder} />}
            <div>
                <Image className={imageClass} src={src} alt="armySeal" />
            </div>
            <div className={`${styles.titleMain} ${departmentClass}`}>
                <Text color="gray01" variant="smText" strong="strong6" >Department of the Army</Text>
                {isVirgina && <Text color="gray" variant="smText" >Virginia</Text>}
                {isDownLacsText && <Text color="gray01" variant="smText" strong="strong6" >100,000</Text>}
            </div>
            <div className={styles.titleNumber}>
                {istopLacsText && <Text className={"ml5"} color="gray" variant="smText">100,000</Text>}
                {isContactIcon &&
                    <div>
                        <Icon type="linkedIn" variant="primary" size="icon_xsmall01" strong="strong6" />
                        <Icon className={"ml10 mr10"} type="web" variant="primary" size="icon_xsmall01" />
                        <Icon type="phone" variant="primary" size="icon_xsmall01" />
                    </div>}
                {isArlingtonText && <Text className={styles.vaText} color="gray" variant="smText">Arlington, VA</Text>}

            </div>
        </div>
    )
}
ArmyCard.defaultProps = {
    isGreenBorder: false,
    isContactIcon: true,
    isArlingtonText: true,
    istopLacsText: true,
    isVirgina: false,
    isDownLacsText: false,
}
ArmyCard.protoType = {
    isGreenBorder: propTypes.bool,
    isContactIcon: propTypes.bool,
    isArlingtonText: propTypes.bool,
    istopLacsText: propTypes.bool,
    isDownLacsText: propTypes.bool,
    isVirgina: propTypes.bool,
    imageSize: propTypes.string,
}
export default ArmyCard