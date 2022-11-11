import React from "react";
import styles from './Cardtab.module.scss'
import Image from "../image/image";
import CheckBox from "../checkbox/checkbox";
import Text from "../text/text";
import Icon from "../icon";
const Cardtab = () => {
    return (
        <div className={styles.tab}>
            <div className={styles.tabWrapper}>
                <CheckBox variant="grayFill" size="" className={styles.CheckBox} />
                <Image src="assets/images/OfficialArmySeal.png" alt="armySeal" className={styles.imgFluid} />
            </div>
            <div className={styles.titleMain}>
                <Text color="gray01" variant="xsText" strong="strong6" className={styles.tagName}>Department of the Army</Text>
                <div className={styles.titleNumber}>
                    <Text color="gray01" variant="xsText" strong="strong6">100,000</Text>
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