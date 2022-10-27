import React, { useState } from "react";
import styles from './criteria.module.scss'
import {Icon, Cardtab} from "../../components/shared";

const Criteria = () => {
    const [show, setShow] = useState(false);
    const [show01, setShow01] = useState(false);

    return (
            <div className={styles.criteria}>
                <div className={styles.tab}>
                    <Cardtab/>
                    <div className={styles.tabIcon} onClick={() => { setShow(!show); setShow01(false) }}>
                        <div className={show ? styles.sign : ""}>{show ? <Icon type="minuscircle" size={"icom_big"} /> : <Icon type="pluscircle" size={"icom_big"} />}
                        </div>
                    </div>
                </div>
                {show && (
                    <div className={styles.tab}>
                        <Cardtab className={styles.line}/>
                        <div className={styles.tabIcon} onClick={() => setShow01(!show01)}>
                            <div className={show01 ? styles.sign : ""}>{show01 ? <Icon type="minuscircle" size={"icom_big"} /> : <Icon type="pluscircle" size={"icom_big"} />}
                            </div>
                        </div>
                    </div>
                )}

                {show01 && (
                    <div className={styles.tabRight}>
                        <div className={styles.tab01}>
                            <Cardtab />
                            <div className={styles.tabIcon}>
                                <Icon type="pluscircle" size={"icom_big"}/>
                            </div>
                        </div>
                        <div className={styles.tab02}>
                            <Cardtab />
                        </div>
                        <div className={styles.tab02}>
                            <Cardtab/>
                             <div className={styles.tabIcon}>
                                <Icon type="pluscircle" size={"icom_big"}/>
                            </div>                            
                        </div>
                        <div className={styles.tab02}>
                            <Cardtab />
                            <div className={styles.tabIcon}>
                                <Icon type="pluscircle" size={"icom_big"}/>
                            </div>
                        </div>
                        
                                                                   
                    </div>

                )}

            </div>
    )
}
export default Criteria;