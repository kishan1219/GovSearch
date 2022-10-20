import React from 'react'
import PropTypes from 'prop-types'
import styles from './latest-deatils.module.scss'
import Image from "../image";
import Text from "../text";


const LatestDeatils = ({
  latestImage,
  latestHeadingFirst,
  latestHeadingNumber,
  latestHeadingSecond,
  latestHeadingThird,
  postion,
  name
}) => {
  return (
    <div className={`${styles.row} ${styles.mB13} ${styles.pR30}`}>
      <div className={`${styles.colMd6} ${styles.pR12} `}>
        <div className={`${styles.row} `}>
            <div className={`${styles.colMd3} ${styles.textCenter}`}>
              <Image src={latestImage} alt="armyseal" className={styles.imgFluid} />
            </div>
            <div className={`${styles.colMd9} ${styles.pL12}`}>
              <div className={`${styles.mB8}`}>
                <Text className={`${styles.latestHeading}`} variant="smText" color="darkGray" strong="strong6">{latestHeadingFirst} {postion}</Text>
              </div>
              <div>
                <Text className={`${styles.latestHeading}`} variant="smText" color="darkGray" strong="strong6">{name}</Text>
              </div>
              <div className={`${styles.textRight}`}>
                <Text className={`${styles.latestHeading}`} variant="smText" color="darkGray" strong="strong6">{latestHeadingNumber}</Text>
              </div>
            </div>
        </div>
      </div>
      <div className={`${styles.colMd6} ${styles.pR12}`}>                
        <div className={`${styles.textRight} ${styles.mB8}`}>
          <Text className={`${styles.latestHeading}`} variant="smText" color="darkGray" strong="strong6">{latestHeadingSecond}</Text>
        </div>
        <div className={`${styles.textRight}`}>                     
          <Text className={`${styles.latestHeading}`} variant="smText" color="darkGray" strong="strong3">{latestHeadingThird}</Text>                      
        </div>                
      </div>
    </div>    
  )
};

LatestDeatils.propTypes = {
  latestHeadingFirst: PropTypes.string,
  latestHeadingSecond: PropTypes.string,
  latestHeadingThird: PropTypes.string,
  latestHeadingNumber: PropTypes.number,
  latestImage: PropTypes.string,
  postion: PropTypes.string
}


export default LatestDeatils;
