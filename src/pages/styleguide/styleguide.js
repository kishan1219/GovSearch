import React from 'react'
import { CheckBox } from '../../components/shared/index'
import styles from './styleguide.module.scss'
const Styleguide = ({ }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.checboxMain}>
                <CheckBox labelName={"dfndfg"} />
            </div>

        </div>
    )
}


export default Styleguide
