import React, { useState } from 'react'
import Styles from './criteria-card.module.scss'
import propTypes from 'prop-types'
import { Heading, Card, Image, Text, Button, Icon } from '../../../components/shared/index'
const CriteriaCard = ({ isCriteriaFirst, isCriteriaSecond,isClassiicationText, 
isCriteriaInfo, 
heading, 
src,
addrsFirst,
designation,
webAddress,
emailText,
phoneText,
positionText,
contact,
addrsSecond,
contactFirst,
contactSecond,
employee,
description
}) => {
    const [active, setActive] = useState();
    return (
        <div className={Styles.cardContainer}>
            <Card className={Styles.criteriaBox}>
                {isCriteriaFirst &&
                <div className={Styles.cardWrapper}>
                        <div className={Styles.imageBox} >
                            <Image className={Styles.armyImage} src={src} alt={"Logo"} />
                            <div className={Styles.contact}>
                                <Icon type="linkedIn" variant="primary" size="icon_xsmall01" />
                                <Icon type="web" variant="primary" size="icon_xsmall01" />
                                <Icon type="phone" variant="primary" size="icon_xsmall01" />
                            </div>
                            {isClassiicationText && 
                            <div>
                            <Text className={Styles.classificText} variant={"mlgText"} color={"darkGray"} strong={"strong3"}>Classiication</Text>
                            <Text className={Styles.classificText} variant={"mlgText"} color={"darkGray"} strong={"strong3"}>-NA-</Text>
                        </div>}
                        </div>
                        <div className={Styles.contentBox} >
                            <div className={Styles.starBox}>
                                <Heading className={Styles.mainHead} headingType={"h4"} > {heading} </Heading>
                                <Icon className={` ${Styles.starIcon} `} type='star' color={active ? "gray" : "yellow"}
                                    variant='icon_large' onClick={() => setActive(!active)} />
                            </div>
                            <Text className={Styles.identityText} variant={"mlgText"} color={"darkGray"} strong={"strong3"}>{addrsFirst}</Text>
                            <div className={Styles.critLocBox} >
                                <Text className={Styles.locateText} variant={"mlgText"} color={"darkGray"} strong={"strong3"}>{addrsSecond}</Text>
                                <Icon className={Styles.userLocate} type="userlocation" variant="primary" size="icon_xsmall01" />
                            </div>
                            <Text className={Styles.identityText} variant={"mlgText"} color={"darkGray"} strong={"strong6"}>{webAddress}</Text>
                                    <Text className={Styles.identityText} variant={"mlgText"} color={"darkGray"} strong={"strong6"}>{contactFirst}</Text>
                                    <Text className={Styles.identityText} variant={"mlgText"} color={"darkGray"} strong={"strong6"}>{contactSecond}</Text>
                                    <Text className={Styles.descText} variant={"mlgText"} color={"gray07"} strong={"strong3"}>{employee}</Text>
                                    <Text className={Styles.descText} variant={"mlgText"} color={"gray07"} strong={"strong3"}>{description}</Text>
                           
                            <div className={Styles.btnBox}>
                                <div className={Styles.callBtnBox}> <Button btnClass={Styles.moreBtn} size={"xxsm"} variant={"teritary"}>Call</Button></div>
                            </div>
                        </div>

                    </div>}
                {isCriteriaSecond && 
                 <div>
                        <div className={Styles.cardWrapper}>
                            <div className={Styles.imageBox} >
                                <Image className={Styles.armyImage} src={src} alt={"Logo"} />

                                <div className={Styles.contactSec}>
                                    <Icon className={Styles.mainIcon} type={"userinfo"} variant="primary" size="icon_medium" />
                                    <Icon className={Styles.mainIcon} type="linkedIn" variant="primary" size="icon_medium" />
                                    <Icon className={Styles.mainIcon} type={"envelope"} variant="primary" size="icon_medium" />
                                    <Icon className={Styles.mainIcon} type={"phone"} variant="primary" size="icon_medium" />
                                    
                                </div>
                            </div>
                            <div className={Styles.contentBox} >
                                <div className={Styles.starBox}>
                                    <Text className={Styles.mainHead} variant={"mlgText"} > {heading} </Text>
                                    <Icon className={` ${Styles.starIcon} `} type='star' color={active ? "gray" : "yellow"}
                                        variant='icon_large' onClick={() => setActive(!active)} />
                                </div>
                                <Text className={Styles.identityText} variant={"mlgText"} color={"darkGray"} strong={"strong3"}>{designation}</Text>
                                <Text className={Styles.identityText} variant={"lgText"} color={"darkGray"} strong={"strong6"}>{webAddress}</Text>
                                <Text className={Styles.identityText} variant={"lgText"} color={"darkGray"} strong={"strong6"}>{emailText}</Text>
                                <Text className={Styles.identityText} variant={"lgText"} color={"darkGray"} strong={"strong3"}>{phoneText}</Text>
                                <div className={Styles.locationBox} >
                                    <Text className={Styles.locateText} variant={"lgText"} color={"darkGray"} strong={"strong3"}>{positionText}</Text>
                                    <Icon className={Styles.userLocate} type="userlocation" variant="primary" size="icon_xsmall01" />
                                </div>
                                        <Text className={Styles.descText} variant={"mlgText"} color={"gray07"} strong={"strong3"}>{contact}</Text>
                                        <Text className={Styles.descText} variant={"mlgText"} color={"gray07"} strong={"strong3"}>{addrsSecond}</Text>
                                        <Text className={Styles.descText} variant={"mlgText"} color={"gray07"} strong={"strong3"}>{addrsFirst}</Text>
                                        <div className={Styles.btnBox}>
                                       <Button btnClass={Styles.moreBtn} size={"xxsm"} variant={"teritary"}>Email</Button>
                                <div> <Button btnClass={Styles.moreBtn} size={"xxsm"} variant={"teritary"}>Call</Button></div>
                            </div>
                            </div>
                        </div>

                    </div>}

                {isCriteriaInfo &&
                <div>
                        <div className={Styles.cardMain}>
                            <div className={Styles.infoImageBox} >
                                <Image className={Styles.armyImage} src={src} alt={"Logo"} />

                                <div className={Styles.contactSec}>
                                <Icon type="linkedIn" variant="primary" size="icon_xsmall01" />
                                <Icon type="web" variant="primary" size="icon_xsmall01" />
                                <Icon type="phone" variant="primary" size="icon_xsmall01" />
                                 </div>
                            </div>
                            <div className={Styles.contentBox} >
                                <div className={Styles.starBox}> <Text className={Styles.mainHead} variant={"mlgText"} strong={"strong6"} > {heading} </Text> </div>
                                <div className={Styles.locationBox} >
                                    <Text className={Styles.mainText} variant={"mlgText"} color={"darkGray"} strong={"strong3"}>{designation}</Text>
                                    <Icon className={Styles.userLocate} type="userlocation" variant="primary" size="icon_xsmall01" />
                                </div>
                                <Text className={Styles.identityText} variant={"lgText"} color={"darkGray"} strong={"strong3"}>{webAddress}</Text>
                                <Text className={Styles.identityText} variant={"lgText"} color={"darkGray"} strong={"strong3"}>{emailText}</Text>
                            </div>
                        </div>
                        <Text className={Styles.infoText} color={"darkGray"} strong={"strong3"}>{description} </Text>

                    </div>}
            </Card>

        </div>
    )
}


CriteriaCard.defaultProps = {
    isCriteriaFirst: true,
    isCriteriaSecond: false,
    isCriteriaInfo: false,
    isClassiicationText:false,

}
CriteriaCard.propTypes = {
    src: propTypes.string,
    heading:propTypes.string,
    addrsFirst:propTypes.string,
    addrsSecond:propTypes.string,
    webAddress:propTypes.string,
    contactFirst:propTypes.string,
    contactSecond:propTypes.string,
    employee:propTypes.string,
    description:propTypes.string,
    hideTxtThd:propTypes.string,
    addrs:propTypes.string,
}
export default CriteriaCard;