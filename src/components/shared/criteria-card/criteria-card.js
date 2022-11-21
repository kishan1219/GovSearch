import React from 'react'
import Styles from './criteria-card.module.scss'
import { useState } from "react";
import { Heading, Card, Image, Text, Button, Icon } from '../../../components/shared/index'
const CriteriaCard = () => {
    const [show, setShowInfo] = useState(false);
    const [showHide, setShowHide] = useState(true);
    const[active,setActive]=useState();
    const showDetails = () => {
       
            if (setShowHide(!showHide)) {
               setShowInfo(false)
            }
            else if (setShowInfo(!show)) {
                setShowHide(false)
            }
    }

 return (
    // Main Container Started here 
        <div className={Styles.cardContainer}>
            <Card className={Styles.criteriaBox}>
                <div className={Styles.cardWrapper}>
                    <div className={Styles.imageBox} >
                        <Image className={Styles.armyImage} src="assets/images/armySeal.png" alt={"Logo"} />
                        <div className={Styles.contact}>
                            <Icon type="linkedIn" variant="primary" size="icon_xsmall01" strong="strong6" />
                            <Icon type="web" variant="primary" size="icon_xsmall01" />
                            <Icon type="phone" variant="primary" size="icon_xsmall01" />
                        </div>
                    </div>
                    <div className={Styles.contentBox} >
                        <div className={Styles.starBox}>
                            <Heading className={Styles.mainHead} headingType={"h4"} > Secretary of the Army </Heading>
                            <Icon className={` ${Styles.starIcon} `} type='star' color={active ?  "gray" : "yellow"}
                             variant='icon_large'  onClick={() => setActive(!active) } />
                        </div>

                        <Text className={Styles.identityText} variant={"mlgText"} color={"darkGray"} strong={"strong3"}>Madison County Courthouse </Text>

                        <div className={Styles.locationBox} >
                            <Text className={Styles.locateText} variant={"mlgText"} color={"darkGray"} strong={"strong3"}>100 Northside SQ, Huntsville, AL </Text>
                            <Icon className={Styles.userLocate} type="userlocation" variant="primary" />
                        </div>
                        {showHide && (
                        <>
                            <Text className={Styles.identityText} variant={"mlgText"} color={"darkGray"} strong={"strong6"}> https://army.mil</Text>
                            <Text className={Styles.identityText} variant={"mlgText"} color={"darkGray"} strong={"strong6"}> 100,000</Text>
                            <Text className={Styles.identityText} variant={"mlgText"} color={"darkGray"} strong={"strong6"}> 703-695-4311 </Text>
                        </>
                        )}

                        {show && (
                            <>
                                <Text className={Styles.identityText} variant={"mlgText"} color={"darkGray"} strong={"strong6"}> https://www.madisoncounty.gov/</Text>
                                <Text className={Styles.identityText} variant={"mlgText"} color={"darkGray"} strong={"strong6"}> 100,000</Text>
                                <Text className={Styles.identityText} variant={"mlgText"} color={"darkGray"} strong={"strong6"}> 703-695-4311 </Text>
                                <Text className={Styles.identityText} variant={"mlgText"} color={"darkGray"} strong={"strong6"}>703-697-8036</Text>
                                <Text className={Styles.descText} variant={"mlgText"} color={"gray07"} strong={"strong3"}> # of Employees -- </Text>
                                <Text className={Styles.descText} variant={"mlgText"} color={"gray07"} strong={"strong3"}>Description --</Text>
                            </>)}
                        <div className={Styles.btnBox}>
                            <Button size={"xxsm"} variant={"teritary"} btnHandler={() => showDetails(!showHide)}>More</Button>
                            <div> <Button size={"xxsm"} variant={"teritary"}>Call</Button></div>
                        </div>
                    </div>
                </div>

            </Card>
        </div>
    )
}

export default CriteriaCard
