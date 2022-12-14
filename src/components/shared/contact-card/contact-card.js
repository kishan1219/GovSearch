import React from 'react'
import styles from './contact-card.module.scss'
import Image from "../image/image";
import Text from "../text/text";
import Icon from "../icon";
import propTypes from "prop-types";
const ContactCard = ({ src, imageClass, departmentClass, isGreenBorder, isDownLacsText, isVirgina, istopLacsText, imageSize, isContactIcon, isArlingtonText,heading,paraOne,paraTwo}) => {
    return (
        <div className={`${styles.cardContainer} ${"dFlex"} ${'mt15'} `}>
            {isGreenBorder
                && <div className={styles.greenBorder} />}
            <div>
                <Image className={`${styles.cardImage} ${imageClass}`} src={src} alt="armySeal" />
            </div>
            <div className={`${styles.titleMain} ${departmentClass}`}>
            <Text className={styles.cardHeading} color="gray01" variant="smText" strong="strong6" >{heading}</Text>
                {/* <Text className={styles.cardHeading} color="gray01" variant="smText" strong="strong6" >Department of the Army</Text> */}
                {isVirgina && 
                // <Text className={styles.cityText} color="gray" variant="smText" >Virginia</Text>
               <Text className={styles.cityText} color="gray" variant="smText" >{paraOne}</Text> }
                {isDownLacsText && <Text  color="gray01" variant="smText" strong="strong6" >100,000</Text>}
            </div>
            <div className={styles.titleNumber}>
                {istopLacsText && <Text  className={`${styles.countText} ${'ml5'}`} color="gray" variant="smText">{paraTwo}</Text>}
                {isContactIcon &&
                    <div className={styles.iconBox}>
                        <Icon type="linkedIn" variant="primary" size="icon_xsmall01" strong="strong6" />
                        <Icon className={"ml10 mr10"} type="web" variant="primary" size="icon_xsmall01" />
                        <Icon type="phone" variant="primary" size="icon_xsmall01" />
                    </div>}
                {isArlingtonText && <Text className={styles.vaText} color="gray" variant="smText">Arlington, VA</Text>}

            </div>
        </div>
    )
}
ContactCard.defaultProps = {
    isGreenBorder: false,
    isContactIcon: true,
    isArlingtonText: true,
    istopLacsText: true,
    isVirgina: false,
    isDownLacsText: false,
}
ContactCard.protoType = {
    isGreenBorder: propTypes.bool,
    isContactIcon: propTypes.bool,
    isArlingtonText: propTypes.bool,
    istopLacsText: propTypes.bool,
    isDownLacsText: propTypes.bool,
    isVirgina: propTypes.bool,
    imageSize: propTypes.string,
}
export default ContactCard
