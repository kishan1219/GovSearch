import React from 'react'
import { CheckBox } from '../../components/shared/index'
import styles from './styleguide.module.scss'
const Styleguide = ({ }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.checboxMain}>
                <CheckBox checked="checked" labelName={"This is a checkbox"} />
            </div>

        </div>
    )
}


export default Styleguide
