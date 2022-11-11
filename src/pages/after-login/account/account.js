import React from 'react'
import Styles from './account.module.scss'
import { Grid } from '@mui/material'
import { Heading, CheckBox, Card, Image, Text, Layout } from '../../../components/shared/index'
import {
    NavLink
} from "react-router-dom";

const Account = () => {
    return (
        <Layout isHeader={false} isTechnomile={true} isSidebar={false} isFederal={false} isGovSearchProfessional={true}>
            <div className={Styles.wrapper}>

                <div className={Styles.productHead}>
                
                        <Heading className={Styles.prodHead} color={"secondary"} headingType={"h1"} > TechnoMile Products </Heading>
                    
                    <div className={Styles.checboxMain}>

                        <CheckBox checked="checked" labelName="remember my preference" variant="grayFill" />
                    </div>
                </div>
                <Heading className={Styles.suiteHead} color={"secondary"} >  Intelligence Suite</Heading>
                <div className={`${Styles.MainBox} ${Styles.scrollBar} ${Styles.scrollWrapper} `}>
                    <div className={Styles.inteliMainBox}>
                        <Grid container spacing={4}>
                            <Grid item lg={6} sm={12} md={6} xs={12}>
                                <Card className={Styles.accountCard} >
                                    <div className={Styles.comptetiveCard} >
                                        <div className={Styles.imageCard}>
                                            <Image src="assets/images/account1.jpg" alt={"Logo"} />
                                        </div>
                                        <div className={Styles.contentBox} >
                                            <Heading className={Styles.accountHead} color={"gray"} >Competitive Insights</Heading>

                                            <Text className={Styles.identityText} variant={"mlgText"} color={"gray"} strong={"strong4"}>
                                                Easily identify new opportunities and sharpen win strategies.
                                                <span className={Styles.spanText}><NavLink to="/" style={{ color: "gray" }}>Learn More</NavLink></span></Text>
                                        </div>
                                    </div>
                                </Card>
                            </Grid>



                            <Grid item lg={6} sm={12} md={6} xs={12} >

                                <Card className={Styles.accountCard} >

                                    <div className={Styles.comptetiveCard} >
                                        <div className={Styles.imageCard}>
                                            <Image src="assets/images/account1.jpg" alt={"Logo"} />
                                        </div>

                                        <div className={Styles.contentBox} >
                                            <Heading className={Styles.accountHead} color={"gray"} >GovSearch</Heading>

                                            <Text className={Styles.identityText} variant={"mlgText"} color={"gray"} strong={"strong4"}>
                                                Reach the right decision makers with your BD and marketing efforts. </Text>

                                        </div>
                                    </div>

                                </Card>

                            </Grid>
                        </Grid>
                    </div>
                    <div className={Styles.inteliMainBox}>
                        <Heading className={Styles.growthHead} color={"secondary"} >Growth Suite</Heading>
                        <Grid container spacing={4}>
                            <Grid item lg={6} sm={12} md={6} xs={12}>
                                <Card className={Styles.accountCard} >

                                    <div className={Styles.insightCard} >
                                        <div className={Styles.imageCard}>
                                            <Image src="assets/images/account2.jpg" alt={"Logo"} />
                                        </div>

                                        <div className={Styles.contentBox} >

                                            <Heading className={Styles.accountHead} color={"gray"} >Capture Management</Heading>
                                            <Text className={Styles.identityText} variant={"mlgText"} color={"gray"} strong={"strong4"}>
                                                Transform BD and capture processes and boost win rates </Text>

                                        </div>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} >
                                <div>
                                    <Card className={Styles.accountCard} >

                                        <div className={Styles.insightCard} >
                                            <div className={Styles.imageCard}>
                                                <Image src="assets/images/account2.jpg" alt={"Logo"} />
                                            </div>

                                            <div className={Styles.contentBox} >

                                                <Heading className={Styles.accountHead} color={"gray"} >Taskorder Management</Heading>
                                                <Text className={Styles.identityText} variant={"mlgText"} color={"gray"} strong={"strong4"}>

                                                    Simplify and streamline task order management.</Text>

                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} >
                                <div>
                                    <Card className={Styles.accountCard} >

                                        <div className={Styles.insightCard} >
                                            <div className={Styles.imageCard}>
                                                <Image src="assets/images/account2.jpg" alt={"Logo"} />
                                            </div>

                                            <div className={Styles.contentBox} >

                                                <Heading className={Styles.accountHead} color={"gray"} >Account Management</Heading>
                                                <Text className={Styles.identityText} variant={"mlgText"} color={"gray"} strong={"strong4"}>

                                                    Strenger enpand Customer streamline task order management.</Text>

                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} >
                                <div>
                                    <Card className={Styles.accountCard} >

                                        <div className={Styles.insightCard} >
                                            <div className={Styles.imageCard}>
                                                <Image src="assets/images/account2.jpg" alt={"Logo"} />
                                            </div>

                                            <div className={Styles.contentBox} >

                                                <Heading className={Styles.accountHead} color={"gray"} >Partner Portal</Heading>
                                                <Text className={Styles.identityText} variant={"mlgText"} color={"gray"} strong={"strong4"}>

                                                    Securaly efficentialy and streamline task order management.</Text>

                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </Grid>
                            
                        </Grid>
                        
                    </div>
                    <div className={Styles.inteliMainBox}>
                        <Heading className={Styles.growthHead} color={"secondary"} >GRC Suite</Heading>
                        <Grid container spacing={4}>
                            <Grid item lg={6} sm={12} md={6} xs={12}>
                                <Card className={Styles.accountCard} >

                                    <div className={Styles.insightCard} >
                                        <div className={Styles.imageCard}>
                                            <Image src="assets/images/account2.jpg" alt={"Logo"} />
                                        </div>

                                        <div className={Styles.contentBox} >

                                            <Heading className={Styles.accountHead} color={"gray"} >Contract Life Cycle Management</Heading>
                                            <Text className={Styles.identityText} variant={"mlgText"} color={"gray"} strong={"strong4"}>
                                                Transform BD and capture processes and boost win rates </Text>

                                        </div>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} >
                                <div>
                                    <Card className={Styles.accountCard} >

                                        <div className={Styles.insightCard} >
                                            <div className={Styles.imageCard}>
                                                <Image src="assets/images/account2.jpg" alt={"Logo"} />
                                            </div>

                                            <div className={Styles.contentBox} >

                                                <Heading className={Styles.accountHead} color={"gray"} >Agreement Management</Heading>
                                                <Text className={Styles.identityText} variant={"mlgText"} color={"gray"} strong={"strong4"}>

                                                   streamline and acclerate Agreement review and negotiations cycles.</Text>

                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xs={12} >
                                <div>
                                    <Card className={Styles.accountCard} >

                                        <div className={Styles.insightCard} >
                                            <div className={Styles.imageCard}>
                                                <Image src="assets/images/account2.jpg" alt={"Logo"} />
                                            </div>

                                            <div className={Styles.contentBox} >

                                                <Heading className={Styles.accountHead} color={"gray"} >Inteligent Contact Ingestion</Heading>
                                                <Text className={Styles.identityText} variant={"mlgText"} color={"gray"} strong={"strong4"}>

                                 Save Hours off contracts sets up and shift your focus to risk management</Text>

                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </Grid>
                         
                            
                        </Grid>
                        
                    </div>




                </div>

            </div>
        </Layout>
    )
}

export default Account
