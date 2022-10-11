import React from 'react'
import { Button, CheckBox,Heading } from '../../components/shared/index'
import styles from './styleguide.module.scss'
const Styleguide = ({ }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.checboxMain}>
                <CheckBox labelName={"dfndfg"} />
            </div>
            <div>
                <Button size={"lg"} variant={"solidPrimary"}> Demo </Button>
                <Button size={"lg"} variant={"disaled"}> Demo</Button>
                <Button size={"lg"} variant={"solidPrimary"}> Demo</Button>
                <Button size={"sm01"} variant={"solidSecondary"}>Demo</Button>
                <Button size={"md"} variant={"solidSecondary"}>Demo</Button>
                <Button size={"lg01"} variant={"solidPrimary"}>Demo</Button>
            </div>

            <div>
             <Heading headingType={"h1"} > Heading Demo</Heading>
            </div>

        </div>
    )
}


export default Styleguide
