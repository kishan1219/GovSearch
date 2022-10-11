import React from 'react'
import { Button, CheckBox } from '../../components/shared/index'
import styles from './styleguide.module.scss'
const Styleguide = ({ }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.checboxMain}>
                <CheckBox labelName={"dfndfg"} />
                <Button size={"lg"} variant={"solidPrimary"}> Civilian </Button>
                <Button size={"lg"} variant={"disaled"}> Defense</Button>
                <Button size={"lg"} variant={"solidPrimary"}> State & Local </Button>
                <Button size={"sm01"} variant={"solidSecondary"}>Search</Button>
                <Button size={"md"} variant={"solidSecondary"}>Search</Button>
               
            </div>

        </div>
    )
}


export default Styleguide
