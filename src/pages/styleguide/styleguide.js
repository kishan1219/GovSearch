import React from 'react'
import { CheckBox, Icon, Input } from '../../components/shared/index'
import styles from './styleguide.module.scss'
const Styleguide = ({ }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.checboxMain}>
                <CheckBox checked="checked" labelName={"This is a checkbox"} />
            </div>
            <div className={styles.checboxMain}>
                <Icon type={"refresh"} variant="primary" size={"icon_xlarge"} />
            </div>
            <div className={styles.inputMain}>
                <Input placeholder="Input Box" />
                <Input placeholder="Input Box" variant="border" />
                <Input placeholder="Input Box" variant="grey" />
            </div>


        </div>
    )
}


export default Styleguide
