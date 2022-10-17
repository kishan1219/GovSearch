import React, { useState } from "react";
import Cardtab from "../../components/shared/Cardtab";
import styles from './Criteria.module.scss'
import Icon from "../../components/shared/icon/icon";


const Criteria = () => {
    const [show, setShow] = useState(false);
    const [show01, setShow01] = useState(false);
    return (
        <>
            <div className={styles.Criteria}>
                <div className={styles.tab}>
                    <Cardtab />
                    <div className={styles.accordianheader} onClick={() => { setShow(!show); setShow01(false) }}>
                        <div className={styles.sign}>{show ? <Icon type="minuscircle" size={"icom_big"} /> : <Icon type="pluscircle" size={"icom_big"} />}</div>
                    </div>
                </div>
                {show && (
                    <div className={styles.tab}>
                        <Cardtab />
                        <div className={styles.accordianheader} onClick={() => setShow01(!show01)}>
                            <div className={`${styles.sign} ${show ? "" : "dNone"}`}>{show01 ? <Icon type="minuscircle" size={"icom_big"} /> : <Icon type="pluscircle" size={"icom_big"} />}</div>
                        </div>
                    </div>
                )}
                {show01 && (
                
                    <div className={styles.tab}>
                        <Cardtab />
                        <div className={styles.accordianheader} onClick={() => { setShow(!show); setShow01(false) }}>
                            <div className={`${styles.sign} ${show ? "" : "dNone"}`}>{show ? <Icon type="pluscircle" size={"icom_big"} /> : <Icon type="minuscircle" size={"icom_big"} />}</div>
                        </div>
                    </div>
                )}
                
            </div>
        </>
    )
}
export default Criteria;