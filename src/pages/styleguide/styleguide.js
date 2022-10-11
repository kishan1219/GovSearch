
import React from 'react'
import { CheckBox, Icon, Text } from '../../components/shared/index'
import Search from '../../components/shared/search/search'
import { Button,  } from '../../components/shared/index'
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
            <div>
                <Button size={"lg"} variant={"solidPrimary"}> Demo </Button>
                <Button size={"lg"} variant={"disaled"}> Demo</Button>
                <Button size={"lg"} variant={"solidPrimary"}> Demo</Button>
                <Button size={"sm01"} variant={"solidSecondary"}>Demo</Button>
                <Button size={"md"} variant={"solidSecondary"}>Demo</Button>
                <Button size={"lg01"} variant={"solidPrimary"}>Demo</Button>
            </div>
            <div >
                <Text className={styles.text} variant={"xxlText"} color={"red"} strong={"strong7"}>hello</Text>
            </div>

        </div>
    )
}


export default Styleguide
