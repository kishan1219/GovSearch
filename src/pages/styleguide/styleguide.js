
import React from 'react'
import {  Text } from '../../components/shared/index'
import Search from '../../components/shared/search/search'
import styles from './styleguide.module.scss'
import { CheckBox, Icon, Input, Button, NewsCard, Heading, Card } from '../../components/shared/index'
import Styles from './styleguide.module.scss'
const Styleguide = () => {
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.checboxMain}>
                <CheckBox defaultChecked="checked" labelName={"This is a checkbox"} />
            </div>
            <div className={styles.search}>
                <Search inputclassName={styles.searchBox} placeholder={"search"} size={"icon_large"} iconColor={"gray05"} iconclassName={"icoClass"}/>
            </div>
            <div className={Styles.checboxMain}>
                <Icon type={"refresh"} variant="primary" size={"icon_xlarge"} />
            </div>
            <div className={Styles.inputMain}>
                <Input placeholder="Input Box" />
                <Input placeholder="Input Box" variant="border" />
                <Input placeholder="Input Box" variant="grey" />
            </div>

            <div className={Styles.buttonMain}>
                <Button size={"lg"} variant={"solidPrimary"}> Demo </Button>
                <Button size={"lg"} variant={"disaled"}>      Demo</Button>
                <Button size={"lg"} variant={"solidPrimary"}> Demo</Button>
                <Button size={"sm01"} variant={"solidSecondary"}>Demo</Button>
                <Button size={"md"} variant={"solidSecondary"}>Demo</Button>
                <Button btnClass={Styles.checboxMain} size={"lg01"} variant={"solidPrimary"}>Demo</Button>
                <Button size={"lg01"} variant={"solidPrimary"}>Demo</Button>
                <Button size={"md02"} variant={"dangerPrimary"}>Demo</Button>
                <Button btnClass={Styles.checboxMain} size={"lg01"} variant={"solidPrimary"}>Demo</Button>
                <Button btnClass={Styles.checboxMain} size={"lg01"} variant={"solidPrimary"}>Demo</Button>
                <Button size={"sm02"} variant={"dangerPrimary"}>Demo</Button>
            </div>
            <div >
                <Text className={styles.text} variant={"xxlText"} color={"red"} strong={"strong7"}>hello</Text>
            </div>

            <div>
                <Heading headingType={"h1"} >Heading Demo</Heading>
                <Heading headingType={"h2"} >Heading Demo</Heading>
                <Heading headingType={"h3"} >Heading Demo</Heading>
                <Heading headingType={"h4"} >Heading Demo</Heading>
                <Heading headingType={"h5"} >Heading Demo</Heading>
                <Heading headingType={"h6"} >Heading Demo</Heading>
            </div>
            
            <div className={Styles.cardMain}>
                <Card children={"example card"} />
            </div>
            <NewsCard/>
        </div>
        
    )
}


export default Styleguide
