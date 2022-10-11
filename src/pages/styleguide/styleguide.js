import React from 'react'
import { CheckBox, Icon, Input, Button, Heading } from '../../components/shared/index'
import styles from './styleguide.module.scss'
const Styleguide = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.checboxMain}>
                <CheckBox defaultChecked="checked" labelName={"This is a checkbox"} />
            </div>
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
                <Button size={"lg01"} variant={"solidPrimary"}>Demo</Button>
                <Button size={"md02"} variant={"dangerPrimary"}>Demo</Button>
                <Button btnClass={styles.checboxMain} size={"lg01"} variant={"solidPrimary"}>Demo</Button>
                <Button size={"sm02"} variant={"dangerPrimary"}>Demo</Button>
            </div>
            <div>
             <Heading headingType={"h1"} >Heading Demo</Heading>
             <Heading headingType={"h2"} >Heading Demo</Heading>
             <Heading headingType={"h3"} >Heading Demo</Heading>
             <Heading headingType={"h4"} >Heading Demo</Heading>
             <Heading headingType={"h5"} >Heading Demo</Heading>
             <Heading headingType={"h6"} >Heading Demo</Heading>

            </div>
        </div>
    )
}


export default Styleguide
