import React from 'react'
import { CheckBox, Icon, Input, Button, NewsCard, Heading, Text, Table, ListGroup, ListItem, LatestDeatils, Search } from '../../components/shared/index'
import Styles from './styleguide.module.scss'
import SearchBar from '../../components/common/searchbar'
import BarChart from '../../components/shared/barchart/barchart'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Header } from '../../components/common'
import Cardtab from '../../components/shared/Cardtab'
import Criteria from '../Criteria/Criteria'
// import { useState } from 'react'


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
    // const [openModal, setOpenModal] = useState(false);
    return (
        <div className={Styles.wrapper}>
            <div >
        <Switch/>
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
                <Table />
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

            <div className={Styles.chart} style={{ width: 300 }}>
            <Text className={Styles.textbar} variant={"smText"} color={"white"} strong={"strong4"}>1000</Text>
            <Text className={Styles.textbarone} variant={"smText"} color={"white"} strong={"strong4"}>1200</Text>
            <Text className={Styles.textbartwo} variant={"smText"} color={"white"} strong={"strong4"}>300</Text>
                <BarChart />
            </div>
            
            <Cardtab />
             <Criteria/>
        </div>

    )
}
export default Styleguide

