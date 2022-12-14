import React, { useState } from "react";
import styles from './criteria.module.scss'
import { Icon, Cardtab } from "../../components/shared";
const Criteria = ({ isCriteriaFirst, isCriteriaSecond,isCriteriaThird }) => {
    const [show, setShow] = useState(false);
    const [show01, setShow01] = useState(false);
    return (
        <div className={styles.criteria}>
            {isCriteriaFirst &&
                <>
                    <div className={styles.tab}>
                        <Cardtab src={"assets/images/OfficialArmySeal.png"} heading={"Department of the Army"} number={"10000"}/>
                        <div className={styles.tabIcon} onClick={() => { setShow(!show); setShow01(false) }}>
                            <div className={show ? styles.sign : ""}>{show ? <Icon type="minuscircle" size={"icom_big"} /> : <Icon type="pluscircle" size={"icom_big"} />}
                            </div>
                        </div>

                    </div>
                    {show && (
                        <div className={styles.tab}>
                            <Cardtab src={"assets/images/OfficialArmySeal.png"}  className={styles.line} heading={"Department of the Army"} number={"10000"} />
                            <div className={styles.tabIcon} onClick={() => setShow01(!show01)}>
                                <div className={show01 ? styles.sign : ""}>{show01 ? <Icon type="minuscircle" size={"icom_big"} /> : <Icon type="pluscircle" size={"icom_big"} />}
                                </div>
                            </div>
                        </div>
                    )}

                    {show01 && (
                        <div className={styles.tabRight}>
                            <div className={styles.tab01}>
                                <Cardtab src={"assets/images/OfficialArmySeal.png"}  heading={"Department of the Army"} number={"10000"} />
                                <div className={styles.tabIcon}>
                                    <Icon type="pluscircle" size={"icom_big"} />
                                </div>
                            </div>
                            <div className={styles.tab02}>
                                <Cardtab  heading={"Department of the Army"} number={"10000"}/>
                            </div>
                            <div className={styles.tab02}>
                                <Cardtab src={"assets/images/OfficialArmySeal.png"}  heading={"Department of the Army"} number={"10000"} />
                                <div className={styles.tabIcon}>
                                    <Icon type="pluscircle" size={"icom_big"} />
                                </div>
                            </div>
                            <div className={styles.tab02}>
                                <Cardtab src={"assets/images/OfficialArmySeal.png"}  heading={"Department of the Army"} number={"10000"} />
                                <div className={styles.tabIcon}>
                                    <Icon type="pluscircle" size={"icom_big"} />
                                </div>
                            </div>


                        </div>

                    )}
                </>
            }
            {isCriteriaSecond &&
                <>
                    <div className={styles.tab}>
                        <Cardtab src={"assets/images/OfficialArmySeal.png"}  variant={"enable"}  heading={"Dale Strong (R)"} number={"Commission Chair"}/>
                        <div className={styles.tabIcon} onClick={() => { setShow(!show); setShow01(false) }}>
                            <div className={show ? styles.sign : ""}>{show ? <Icon type="minuscircle" size={"icom_big"} /> : <Icon type="pluscircle" size={"icom_big"} />}
                            </div>
                        </div>

                    </div>
                    {show && (
                        <div className={styles.tab}>
                            <Cardtab src={"assets/images/OfficialArmySeal.png"}  variant={"enable"}  heading={"Violet Edwards (D)"} number={"Commission Chair"} className={styles.line} />
                            <div className={styles.tabIcon} onClick={() => setShow01(!show01)}>
                                <div className={show01 ? styles.sign : ""}>{show01 ? <Icon type="minuscircle" size={"icom_big"} /> : <Icon type="pluscircle" size={"icom_big"} />}
                                </div>
                            </div>
                        </div>
                    )}

                    {show01 && (
                        <div className={styles.tabRight}>
                            <div className={styles.tab01}>
                                <Cardtab src={"assets/images/OfficialArmySeal.png"}  variant={"enable"} heading={"Steve Haraway (R)"} number={"Commission Chair"}/>
                                <div className={styles.tabIcon}>
                                    <Icon type="pluscircle" size={"icom_big"} />
                                </div>
                            </div>
                            <div className={styles.tab02}>
                                <Cardtab src={"assets/images/OfficialArmySeal.png"}  variant={"enable"}  heading={"Craig Hill (R)"} number={"Commission Chair"} />
                            </div>
                            <div className={styles.tab02}>
                                <Cardtab src={"assets/images/OfficialArmySeal.png"}  variant={"enable"}  heading={"Phil Vandiver (R)"} number={"Commission Chair"}/>
                                <div className={styles.tabIcon}>
                                    <Icon type="pluscircle" size={"icom_big"} />
                                </div>
                            </div>
                            <div className={styles.tab02}>
                                <Cardtab src={"assets/images/OfficialArmySeal.png"}  variant={"enable"}  heading={"Phir Dcuza"} number={"Commision Chair"} />
                                <div className={styles.tabIcon}>
                                    <Icon type="pluscircle" size={"icom_big"} />
                                </div>
                            </div>


                        </div>

                    )}
                </>
            }

{isCriteriaThird &&
   <>
   <div className={styles.tab}>
       <Cardtab src={"assets/images/baeShortImage.png"} heading={"BAE Systems, Plc"} number={"10000"}/>
       <div className={styles.tabIcon} onClick={() => { setShow(!show); setShow01(false) }}>
           <div className={show ? styles.sign : ""}>{show ? <Icon type="minuscircle" size={"icom_big"} /> : <Icon type="pluscircle" size={"icom_big"} />}
           </div>
       </div>

   </div>
   {show && (
       <div className={styles.tab}>
           <Cardtab src={"assets/images/baeLongImage.png"}  className={styles.line} heading={"BAE Systems, Plc"} number={"10000"} />
           <div className={styles.tabIcon} onClick={() => setShow01(!show01)}>
               <div className={show01 ? styles.sign : ""}>{show01 ? <Icon type="minuscircle" size={"icom_big"} /> : <Icon type="pluscircle" size={"icom_big"} />}
               </div>
           </div>
       </div>
   )}

   {show01 && (
       <div className={styles.tabRight}>
           <div className={styles.tab01}>
               <Cardtab src={"assets/images/baeLongImage.png"}  heading={"BAE Systems, Plc"} number={"10000"} />
               <div className={styles.tabIcon}>
                   <Icon type="pluscircle" size={"icom_big"} />
               </div>
           </div>
           <div className={styles.tab02}>
               <Cardtab src={"assets/images/baeLongImage.png"}  heading={"BAE Systems, Plc"} number={"10000"}/>
           </div>
           <div className={styles.tab02}>
               <Cardtab src={"assets/images/baeLongImage.png"}  heading={"BAE Systems, Plc"} number={"10000"} />
               <div className={styles.tabIcon}>
                   <Icon type="pluscircle" size={"icom_big"} />
               </div>
           </div>
           <div className={styles.tab02}>
               <Cardtab src={"assets/images/baeLongImage.png"}  heading={"BAE Systems, Plc"} number={"10000"} />
               <div className={styles.tabIcon}>
                   <Icon type="pluscircle" size={"icom_big"} />
               </div>
           </div>


       </div>

   )}
</>
}
               
        </div>
    )
}
export default Criteria;
Criteria.defaultProps = {
    isCriteriaFirst: true,
    isCriteriaSecond: false,
    isCriteriaThird: false,
}




