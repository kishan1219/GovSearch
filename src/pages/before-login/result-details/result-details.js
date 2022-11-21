import React from 'react'
import { Layout, CriteriaCard, Text, Icon, Card, CardItems, ContactCard } from '../../../components/shared'
import Styles from './result-details.module.scss'
import { Grid } from '@mui/material'

const ResultDetails = () => {
  return (
    <Layout isFederal={false} isProfessional={true}>
      <div className={Styles.mainContainer}>
        <div className={Styles.searchCriteria}>
          <Text variant={"mlgText"} color="darkGray">Search Criteria “ Department of the Army ”</Text>
          <div className='dFlex'>
            <Text className={"mr24"} variant={"smText"} color="gray">Advanced</Text>
            <Text variant={"smText"} color="gray">Save Search </Text>
          </div>
          <div>
            <Icon color={"gray05"} type={"hierarchy"} size="icon_xlarge" />
            <Icon className={"ml40 mr50"} color={"gray05"} type={"pluscircle"} size="icon_xlarge" />
            <Icon color={"gray05"} type={"ExportButton"} size="icon_xlarge" />
          </div>
        </div>

        <div className={Styles.cardBox}>
          {/* First Box */}
          <Grid container spacing={2}>
            <Grid item lg={4} sm={12} md={4} xs={12}>
              <div className={Styles.detaisFirst}>
                <div className={Styles.updateBox}>
                  <Text className={Styles.updateText} strong='strong3' variant={"smText"} color="gray">Last Updated: 12:00 AM ET 05/31/2022</Text>

                  <Text className={Styles.requestText} strong='strong3' variant={"smText"} color="gray">request an update</Text>
                  <Icon type={"refresh"} color={"black"} size={"icon_small"} />
                </div>
                <CriteriaCard />
                <Text className={Styles.requestText} strong='strong3' variant={"smText"} color="gray">Lastest Contacts </Text>
                  <Card className={Styles.cardBoxOne} >
                  <CardItems textFirst={"Jerry Reimers"} textSecond={"Defense Intelligence S"} textThird={"New"} color3="lightGray01" />
                  <CardItems textFirst={"Gary Hausman"} textSecond={"Commandant"} textThird={"update"} color3="lightGray01" />
                  <CardItems textFirst={"Stephanie Kelley"} textSecond={"Assistant Commanda"} textThird={"New"} color3="lightGray01" />
                  <CardItems textFirst={"Thomas Donehue"} textSecond={"Command Sergeant"} textThird={"update"} color3="lightGray01" />
                  <CardItems textFirst={"Steven Collins"} textSecond={"Chief of Staff"} textThird={"New"} color3="lightGray01" fontweight1={"strong7"} fontweight2={"strong7"} />
                </Card>
              </div>
            </Grid>
            {/* First Div close */}
            {/* second Box started here  */}
            <Grid item lg={4} sm={12} md={4} xs={12}>
              <div className={Styles.trendingBox} >
                <div>
                  <Text className={Styles.secondText} strong='strong3' variant={"smText"} color="gray">Trending Assets</Text>
                  <Card className={Styles.cardBoxOne} >
                    <CardItems isAssetsText={true} isChildText={false} isContactText={false} textFirst={"Contact"} textSecond={"Adam Stanley"} textThird={"Commander"} color1="lightGray01" />
                    <CardItems isAssetsText={true} isChildText={false} isContactText={false} textFirst={"Contact"} textSecond={"Gary Hausman"} textThird={"Chief of Staff"} color1="lightGray01" />
                    <CardItems isAssetsText={true} isChildText={false} isContactText={false} textFirst={"Position"} textSecond={"Commandant"} textThird={"Vacant"} color1="lightGray01" />
                    <CardItems isAssetsText={true} isChildText={false} isContactText={false} textFirst={"Office"} textSecond={"Office Name"} textThird={"Top Level Office"} color1="lightGray01" />
                    <CardItems isAssetsText={true} isChildText={false} isContactText={false} textFirst={"Office"} textSecond={"XVIII Airborne Corps"} textThird={"1st Infantry Divisio"} color1="lightGray01" />
                    <CardItems isAssetsText={true} isChildText={false} isContactText={false} textFirst={"Contact"} textSecond={"John Cogbill"} textThird={"Commandant"} color1="lightGray01" fontweight2={"strong7"} fontweight3={"strong7"} />
                  </Card>
                </div>
                <div>
                  <Text className={Styles.secondText} strong='strong3' variant={"smText"} color="gray">Child Offices</Text>
                  <Card className={`${Styles.cardthirdBox} ${Styles.scrollBar} `} >
                    <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"Office of the Secretary of the Army"} textSecond={"Arlington, VA"} />
                    <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"Office of the Asistant to Secretary of"} textSecond={"Arlington, VA"} />
                    <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"Auditor General   US Army Audit Agency"} textSecond={"Arlington, VA"} />
                    <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"Chief of Staff"} textSecond={"Arlington, VA"} />
                    <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"General Counsel"} textSecond={"Arlington, VA"} fontweight1={"strong7"} />
                    <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"General Counsel"} textSecond={"Arlington, VA"} fontweight1={"strong7"} />
                    <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"General Counsel"} textSecond={"Arlington, VA"} fontweight1={"strong7"} />
                    <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"General Counsel"} textSecond={"Arlington, VA"} fontweight1={"strong7"} />
                    <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"General Counsel"} textSecond={"Arlington, VA"} fontweight1={"strong7"} />
                    <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"General Counsel"} textSecond={"Arlington, VA"} fontweight1={"strong7"} />
                    <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"General Counsel"} textSecond={"Arlington, VA"} fontweight1={"strong7"} />
                    <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"General Counsel"} textSecond={"Arlington, VA"} fontweight1={"strong7"} />
                  </Card>
                </div>
              </div>
            </Grid>
            {/* Second Box end here  */}
            {/* Army Box start here  */}
            <Grid item lg={4} sm={12} md={4} xs={12}>
              <div className={Styles.armyMain}>
                <Text className={Styles.recomendText} strong='strong3' variant={"smText"} color="gray">Recommendation</Text>
                <div className={Styles.armyBox}>
                  <ContactCard src={"assets/images/OfficialArmySeal.png"} imageClass={"ml20 mr20"} isGreenBorder={false} istopLacsText={true} isArlingtonText={false} isVirgina={true} imageSize="imgLarge" />
                </div>
                <div className={Styles.armyBox}>
                  <ContactCard src={"assets/images/OfficialArmySeal.png"} imageClass={"ml20 mr20"} isGreenBorder={false} istopLacsText={true} isArlingtonText={false} isVirgina={true} imageSize="imgLarge" />
                </div>
                <div className={Styles.armyBox}>
                  <ContactCard src={"assets/images/OfficialArmySeal.png"} imageClass={"ml20 mr20"} isGreenBorder={false} istopLacsText={true} isArlingtonText={false} isVirgina={true} imageSize="imgLarge" />
                </div>
                <div className={Styles.armyBox}>
                  <ContactCard src={"assets/images/OfficialArmySeal.png"} imageClass={"ml20 mr20"} isGreenBorder={false} istopLacsText={true} isArlingtonText={false} isVirgina={true} imageSize="imgLarge" />
                </div>
                <div className={Styles.armyBox}>
                  <ContactCard src={"assets/images/OfficialArmySeal.png"} imageClass={"ml20 mr20"} isGreenBorder={false} istopLacsText={true} isArlingtonText={false} isVirgina={true} imageSize="imgLarge" />
                </div>
              </div>
            </Grid>
          </Grid>

        </div>

      </div>
    </Layout>
  )
}

export default ResultDetails
