import React from 'react'
import { CheckBox, Card, Icon, Input, Button, NewsCard, Heading, Text, Tables, ListGroup, ListItem, LatestDeatils, Search, ArmyCard, CriteriaCard, CardItems } from '../../components/shared/index'
import Styles from './styleguide.module.scss'
import SearchBar from '../../components/common/searchbar'
import BarChart from '../../components/shared/barchart/barchart'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Header from '../../components/common/header/header'
import Cardtab from '../../components/shared/cardtab/cardtab'
import Criteria from '../criteria'
const Styleguide = () => {

    const views = [
        {
            id: 1,
            img: 'assets/images/armySeal.png',
            positionFirst: "Department of the Army",
            name: "",
            number: "7",
            positionSecond: "Department of Defense",
            place: "Arlington, VA",
        },
        {
            id: 2,
            img: 'assets/images/armySeal.png',
            positionFirst: "Department of the Army",
            name: "",
            number: "7",
            positionSecond: "Department of Defense",
            place: "Arlington, VA",
        },
        {
            id: 3,
            img: 'assets/images/armySeal.png',
            positionFirst: "Department of the Army",
            name: "",
            number: "7",
            positionSecond: "Department of Defense",
            place: "Arlington, VA",
        },
        {
            id: 4,
            img: 'assets/images/armySeal.png',
            positionFirst: "Department of the Army",
            name: "",
            number: "7",
            positionSecond: "Department of Defense",
            place: "Arlington, VA",
        },
        {
            id: 5,
            img: 'assets/images/armySeal.png',
            positionFirst: "Department of the Army",
            name: "",
            number: "7",
            positionSecond: "Department of Defense",
            place: "Arlington, VA",
        },
        {
            id: 6,
            img: 'assets/images/armySeal.png',
            positionFirst: "Department of the Army",
            name: "",
            number: "7",
            positionSecond: "Department of Defense",
            place: "Arlington, VA",
        },
    ];
    return (
        <div className={Styles.wrapper}>
            <div >
                <Switch />
                <FormControlLabel control={<Switch defaultChecked />} label="Label" />
            </div>
            <Header />
            <Header isSearch={false} />
            <Header isRightNav={true} isFederal={false} isProfessional={true} />
            <Header isSearch={false} isRightNav={true} isFederal={false} isProfessional={true} />
            <Header isSearch={true} isRightNav={true} isFederal={false} isGovSearchProfessional={true} />
            <Header isSearch={false} isRightNav={true} isFederal={false} isStateLocal={true} />
            <Header isTechnomileLogo={true} isGovSearchLogo={false} />
            <Header isTechnomileLogo={true} isGovSearchLogo={false} isSearch={false} />
            <Header isTechnomileLogo={true} isGovSearchLogo={false} isSearch={false} isRightNav={true} isFederal={false} isAdmin={true} />
            <Header isTechnomileLogo={true} isGovSearchLogo={false} isSearch={false} isRightNav={true} isFederal={false} isProfessionalEdition={true} />
            <Header isTechnomileLogo={true} isGovSearchLogo={false} isSearch={false} isRightNav={false} isFederal={false} />
            <Header size="sm" isTechnomileLogo={true} isGovSearchLogo={false} isSearch={false} isRightNav={true} isFederal={false} />
            <div className={Styles.checboxMain}>
                <CheckBox checked="checked" labelName="primary" variant="primary" className={Styles.mb20} />
                <CheckBox checked="checked" labelName="gray" variant="gray" className={Styles.mb20} />
                <CheckBox checked="checked" labelName="gray" variant="grayFill" className={Styles.mb20} />
            </div>
            <div className={Styles.search}>
                <Search inputclassName={Styles.searchBox} placeholder={"Contacts, Offices, Vendors, Contracts..."} size={"icon_large"} iconColor={"gray"} iconclassName={"icoClass"} />
            </div>
            <div className={Styles.iconMain}>
                <Icon type={"refresh"} variant="primary" size={"icon_xlarge"} />
            </div>
            <div className={Styles.inputMain}>
                <Input placeholder="Input Box" />
                <Input className={Styles.mt30} placeholder="Input Box" variant="border" />
                <Input className={Styles.mt30} placeholder="Input Box" variant="grey" />
            </div>

            <div className={Styles.buttonMain}>
                <Button size={"xlg"} variant={"solidPrimary"}> Demo </Button>
                <Button size={"xlg"} variant={"disaled"}>      Demo</Button>
                <Button size={"xlg"} variant={"solidPrimary"}> Demo</Button>
                <Button size={"sm"} variant={"solidSecondary"}>Demo</Button>
                <Button size={"xmd"} variant={"solidSecondary"}>Demo</Button>
                <Button btnClass={Styles.mt30} size={"xxlg"} variant={"solidPrimary"}>Demo</Button>
                <Button size={"lg"} variant={"solidPrimary"}>Demo</Button>
                <Button size={"xxlmd"} variant={"dangerPrimary"}>Demo</Button>
                <Button btnClass={Styles.mt30} size={"xxlg"} variant={"solidPrimary"}>Demo</Button>
                <Button btnClass={Styles.mt30} size={"xxlg"} variant={"solidPrimary"}>Demo</Button>
                <Button size={"xlsm"} variant={"dangerPrimary"}>Demo</Button>
                <Button size={"xlmd"} variant={"transparent"}>Advanced</Button>
            </div>
            <div>
                <Text className={Styles.text} variant={"xxlText"} color={"red"} strong={"strong7"}>hello</Text>
            </div>

            <div>
                <Heading headingType={"h1"} >Heading Demo</Heading>
                <Heading headingType={"h2"} >Heading Demo</Heading>
                <Heading headingType={"h3"} >Heading Demo</Heading>
                <Heading headingType={"h4"} >Heading Demo</Heading>
                <Heading headingType={"h5"} >Heading Demo</Heading>
                <Heading headingType={"h6"} >Heading Demo</Heading>
            </div>
            <div className={Styles.newsCard}>
                <NewsCard src='assets/images/officer.jpg'
                    textFirst={"FORCM Jason R. Dunn is the new Force Master Chief of Commander Navy Installations Command"}
                    textSecond="He succeeds former Chief, FORCM Greg A. Vidaurri, in the position. He served as Tomahawk LPO ..." />

            </div>




            <div>
                <Tables />
            </div>
            {/* LatestDeatils */}
            <div className={`${Styles.colMd4} ${Styles.pLr12} $ ${Styles.w60}`}>
                <Text className={`${Styles.cardHeading}`} color="darkGray" strong="strong3">Latest Detail Views</Text>
                <div className={`${Styles.homeCard} ${Styles.scrollBar} ${Styles.mb40}`}>
                    {views.map((item) => (
                        <LatestDeatils latestImage={item.img}
                            name={item.name}
                            postion={item.positionFirst}
                            latestHeadingNumber={item.number}
                            latestHeadingSecond={item.positionSecond}
                            latestHeadingThird={item.place}
                        />
                    ))}
                </div>
            </div>
            {/* LatestDeatils */}
            <div className={Styles.List}>
                <ListGroup >
                    <ListItem children={"List"} />
                    <ListItem children={"List"} />
                    <ListItem children={"List"} />
                    <ListItem children={"List"} />
                </ListGroup>
            </div>
            <div className={Styles.searchbar}>
                <SearchBar inputclassName={Styles.s} placeholder={"Search"} size={"icon_large"} iconColor={"gray05"} iconclassName={"icoClass"} />
            </div>

            <div className={Styles.chart} style={{ width: 500, }}>
                <BarChart />
            </div>
            <div className='mt30 mb50'>
                <Cardtab />
            </div>
            {/* Army car */}
            <div className='mt40 mb50'>
                <ArmyCard src={"assets/images/OfficialArmySeal.png"} imageClass={"ml20"} isGreenBorder={false} istopLacsText={true} isArlingtonText={false} isVirgina={true} imageSize="imgLarge" />
            </div>
            <div className='mt40 mb50'>
                <ArmyCard src={"assets/images/armySeal.png"} imageClass={"mt10 mr10 w75px"} departmentClass={Styles.departmentArmyTab} istopLacsText={false} isDownLacsText={true} isContactIcon={false} isGreenBorder={true} imageSize="imgLarge" />
            </div>
            {/* army card */}
            <div className='mt40 mb50'>
                <Criteria />
            </div>
            {/* Criteria Card  */}
            <div className='mt40 mb50'>
                <CriteriaCard />
            </div>
            {/* Card Items component Start */}
            <Card className={Styles.cardBoxOne} >
                <CardItems textFirst={"Jerry Reimers"} textSecond={"Defense Intelligence S"} textThird={"New"} color3="lightGray01" />
                <CardItems textFirst={"Gary Hausman"} textSecond={"Commandant"} textThird={"update"} color3="lightGray01" />
                <CardItems textFirst={"Stephanie Kelley"} textSecond={"Assistant Commanda"} textThird={"New"} color3="lightGray01" />
                <CardItems textFirst={"Thomas Donehue"} textSecond={"Command Sergeant"} textThird={"update"} color3="lightGray01" />
                <CardItems textFirst={"Steven Collins"} textSecond={"Chief of Staff"} textThird={"New"} color3="lightGray01" fontweight1={"strong7"} fontweight2={"strong7"} />
            </Card>
            <Card className={Styles.cardBox} >
                <CardItems isAssetsText={true} isChildText={false} isContactText={false} textFirst={"Contact"} textSecond={"Adam Stanley"} textThird={"Commander"} color1="lightGray01" />
                <CardItems isAssetsText={true} isChildText={false} isContactText={false} textFirst={"Contact"} textSecond={"Gary Hausman"} textThird={"Chief of Staff"} color1="lightGray01" />
                <CardItems isAssetsText={true} isChildText={false} isContactText={false} textFirst={"Position"} textSecond={"Commandant"} textThird={"Vacant"} color1="lightGray01" />
                <CardItems isAssetsText={true} isChildText={false} isContactText={false} textFirst={"Office"} textSecond={"Office Name"} textThird={"Top Level Office"} color1="lightGray01" />
                <CardItems isAssetsText={true} isChildText={false} isContactText={false} textFirst={"Office"} textSecond={"XVIII Airborne Corps"} textThird={"1st Infantry Divisio"} color1="lightGray01" />
                <CardItems isAssetsText={true} isChildText={false} isContactText={false} textFirst={"Contact"} textSecond={"John Cogbill"} textThird={"Commandant"} color1="lightGray01" fontweight2={"strong7"} fontweight3={"strong7"} />
            </Card>
            <Card className={Styles.cardBox} >
                <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"Office of the Secretary of the Army"} textSecond={"Arlington, VA"} />
                <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"Office of the Asistant to Secretary of"} textSecond={"Arlington, VA"} />
                <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"Auditor General   US Army Audit Agency"} textSecond={"Arlington, VA"} />
                <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"Chief of Staff"} textSecond={"Arlington, VA"} />
                <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"General Counsel"} textSecond={"Arlington, VA"} fontweight1={"strong7"} />
                <CardItems isAssetsText={false} isChildText={true} isContactText={false} textFirst={"General Counsel"} textSecond={"Arlington, VA"} fontweight1={"strong7"} />
            </Card>
           

        </div>

    )
}
export default Styleguide

