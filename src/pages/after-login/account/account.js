import React from 'react'
import Styles from './account.module.scss'
import { Header, Heading, CheckBox, Card, Image, Text } from '../../../components/shared/index'

const Account = () => {
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.imageBox}>
                <Header isTechnomileLogo={true} isGovSearchLogo={false} isSearch={false} isRightNav={true} isFederal={false} isProfessionalEdition={true} />
            </div>
            <div className={Styles.productHead}>
                <div>
                    <Heading className={Styles.prodHead} color={"secondary"} > TechnoMile Products </Heading>
                </div>
                <div className={Styles.checboxMain}>

                    <CheckBox checked="checked" labelName="remember my preference" variant="grayFill" />
                </div>
            </div>
            <div> <Heading className={Styles.suiteHead} color={"secondary"} headingType={"h1"}>  Intelligence Suite</Heading> </div>
            <div  className={`${Styles.MainBox} ${Styles.scrollBar} ${Styles.scrollWrapper} `}>
                <div className={Styles.inteliMainBox}>
                   
                    
                    <div className={Styles.inteliText}>

                        <Card className={Styles.mainCard}>
                            <div className={Styles.cardBox}>
                                <div>
                                    <Image src="assets/images/account1.jpg" alt={"Logo"} />
                                </div>
                                <div className={Styles.contentBox} >
                                    <Heading className={Styles.accountHead} color={"gray"} headingType={"h1"}>Competitive Insights</Heading>
                                    <Text className={Styles.identityText} variant={"mlgText"} color={"gray"} strong={"strong4"}>
                                        Easily identify new opportunities and sharpen win strategies.</Text>
                                        {/* <Text  variant={"mlgText"} color={"gray"} strong={"strong4"}>
                                        Learn More</Text> */}
                                       
                                </div>
                            </div>
                        </Card>
                        <div className={Styles.rightCard}>
                            <Card className={Styles.mainCard}>
                                <div className={Styles.cardBox}>
                                    <div>
                                        <Image src="assets/images/account1.jpg" alt={"Logo"} />
                                    </div>
                                    <div className={Styles.contentBox} >
                                        <Heading className={Styles.accountHead} color={"gray"} headingType={"h1"}>GovSearch</Heading>
                                        <Text className={Styles.identityText} variant={"mlgText"} color={"gray"} strong={"strong4"}>
                                            Reach the right decision makers with your BD and marketing efforts.  </Text>

                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className={Styles.inteliMainBox}>

                    <div>

                        <Heading className={Styles.growthtHead} color={"secondary"} headingType={"h1"}>Growth Suite</Heading>
                    </div>
                    <div className={Styles.inteliText}>

                        <Card className={Styles.mainCard}>
                            <div className={Styles.cardBox}>
                                <div>
                                    <Image src="assets/images/account2.jpg" alt={"Logo"} />
                                </div>
                                <div className={Styles.contentBox} >
                                    <Heading className={Styles.accountHead} color={"gray"} headingType={"h1"}>Capture Management</Heading>
                                    <Text className={Styles.identityText} variant={"mlgText"} color={"gray"} strong={"strong4"}>
                                    Transform BD and capture processes and boost win rates.</Text>
                                </div>
                            </div>
                        </Card>
                        <div className={Styles.rightCard}>
                            <Card className={Styles.mainCard}>
                                <div className={Styles.cardBox}>
                                    <div>
                                        <Image src="assets/images/account2.jpg" alt={"Logo"} />
                                    </div>
                                    <div className={Styles.contentBox} >
                                        <Heading className={Styles.accountHead} color={"gray"} headingType={"h1"}>Taskorder</Heading>
                                        <Heading className={Styles.manageHead} color={"gray"} headingType={"h1"}>Management</Heading>
                                        <Text className={Styles.identityText} variant={"mlgText"} color={"gray"} strong={"strong4"}>
                                        Simplify and streamline task order management.</Text>

                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Account
