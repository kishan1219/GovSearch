import React from "react";
import styles from './cardtab.module.scss'
import Image from "../image/image";
import CheckBox from "../checkbox/checkbox";
import Text from "../text/text";
import Icon from "../icon";
const Cardtab = ({variant,heading,number,src}) => {
    return (
         <div className={`${styles.tab} ${styles[variant]}`} >
            <div className={styles.tabWrapper}>
                <CheckBox variant="grayFill"  className={styles.CheckBox} />
                <Image src={src} alt="army" className={styles.imgFluid} />
                {/* <Image src="assets/images/baeShortImage.png" alt="armySeal" className={styles.imgFluid} /> */}
            </div>
            <div className={styles.titleMain}>

                <Text color="gray01" variant="xsText" strong="strong6" >{heading}</Text>
                <div className={styles.titleNumber}>
                    <Text className={styles.tagName} color="gray01" variant="xsText" strong="strong6">{number}</Text>
                    <div className={styles.contect}>
                        <Icon type="linkedIn" variant="primary" size="icon_xsmall01" strong="strong6" />
                        <Icon type="web" variant="primary" size="icon_xsmall01" />
                        <Icon type="phone" variant="primary" size="icon_xsmall01" />
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Cardtab;