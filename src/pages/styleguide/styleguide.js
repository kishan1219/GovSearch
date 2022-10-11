
import React from 'react'
import { CheckBox, Icon } from '../../components/shared/index'
import Search from '../../components/shared/search/search'
import styles from './styleguide.module.scss'
const Styleguide = ({ }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.checboxMain}>
                <CheckBox labelName={"dfndfg"} />
            </div>
            <div className={styles.search}>
                <Search className={styles.searchBox} placeholder={"search"} type="search"/>
            </div>
            <Icon type="pluscircle" color={"black"}/>
        </div>
    )
}


export default Styleguide
