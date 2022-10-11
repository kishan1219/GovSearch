
import React from 'react'
import {  Text } from '../../components/shared/index'
import Search from '../../components/shared/search/search'
import { CheckBox, Icon, Input, Button, } from '../../components/shared/index'
import styles from './styleguide.module.scss'
const Styleguide = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.checboxMain}>
                <CheckBox defaultChecked="checked" labelName={"This is a checkbox"} />
            </div>
            <div className={styles.search}>
                <Search inputclassName={styles.searchBox} placeholder={"search"} size={"icon_large"} iconColor={"gray05"} iconclassName={"icoClass"}/>
            </div>
            <Icon type="pluscircle" color={"black"}/>
            <div>
            <div className={styles.btnMain}>
            <div className={styles.checboxMain}>
                <Icon type={"refresh"} variant="primary" size={"icon_xlarge"} />
            </div>
            <div className={styles.inputMain}>
                <Input placeholder="Input Box" />
                <Input placeholder="Input Box" variant="border" />
                <Input placeholder="Input Box" variant="grey" />
            </div>

            <div className={styles.buttonMain}>
                <Button size={"lg"} variant={"solidPrimary"}> Demo </Button>
                <Button size={"lg"} variant={"disaled"}>      Demo</Button>
                <Button size={"lg"} variant={"solidPrimary"}> Demo</Button>
                <Button size={"sm01"} variant={"solidSecondary"}>Demo</Button>
                <Button size={"md"} variant={"solidSecondary"}>Demo</Button>
                <Button btnClass={styles.checboxMain} size={"lg01"} variant={"solidPrimary"}>Demo</Button>
            </div>
            <div >
                <Text className={styles.text} variant={"xxlText"} color={"red"} strong={"strong7"}>hello</Text>
            </div>

        </div>
        </div>
        </div>
    )
}


export default Styleguide
