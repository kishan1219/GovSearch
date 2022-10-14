import React from 'react'
import Search from '../../components/shared/search/search'
import { CheckBox, Icon, Input, Button, NewsCard, Heading, Card, Text, Table, ListGroup, ListItem, LatestDeatils, } from '../../components/shared/index'
import Styles from './styleguide.module.scss'
import SearchBar from'../../components/common/searchbar'
import BarChart from '../../components/shared/barchart/barchart'

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
                <Button size={"lg"} variant={"solidPrimary"}> Demo </Button>
                <Button size={"lg"} variant={"disaled"}>      Demo</Button>
                <Button size={"lg"} variant={"solidPrimary"}> Demo</Button>
                <Button size={"sm01"} variant={"solidSecondary"}>Demo</Button>
                <Button size={"md"} variant={"solidSecondary"}>Demo</Button>
                <Button btnClass={Styles.mt30} size={"lg01"} variant={"solidPrimary"}>Demo</Button>
                <Button size={"lg01"} variant={"solidPrimary"}>Demo</Button>
                <Button size={"md03"} variant={"dangerPrimary"}>Demo</Button>
                <Button btnClass={Styles.mt30} size={"lg01"} variant={"solidPrimary"}>Demo</Button>
                <Button btnClass={Styles.mt30} size={"lg01"} variant={"solidPrimary"}>Demo</Button>
                <Button size={"sm02"} variant={"dangerPrimary"}>Demo</Button>
                <Button size={"md02"} variant={"transparent"}>Advanced</Button>
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
            <div className={`${Styles.colMd4} ${Styles.pLr12}  `}>
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
                <BarChart/>
            </div>
            <div className={Styles.logInmainBox}> 
                <div className={Styles.logInBox}>
                    <Card >
                        <Heading className={Styles.mainHead} color={"secondary"} headingType={"h1"}>Sign in</Heading>
                        <Text className={Styles.mainText} variant={"mlgText"} color={""} strong={"strong4"}>
                            Enter your email address to sign in.</Text>
                        <div className={Styles.inputMain} >
                            <Input className={Styles.mt30} placeholder="Enter Your Email" variant="border" />
                        </div>
                        <div className={Styles.btnMain} >
                            <Button size={"lg02"} variant={"disaled"}>Continue</Button>
                        </div>
                        <Text className={Styles.secText} variant={"smText"} color={"black"} strong={"strong4"}>Can’t Sign in?</Text>
                    </Card>
                </div>
                <div className={Styles.logInBox}>
                    <Card >
                        <Heading className={Styles.mainHead} color={"secondary"} headingType={"h1"}>Password</Heading>
                        <Text className={Styles.mainText} variant={"mlgText"} color={""} strong={"strong4"}>
                            Enter your password to continue.</Text>
                        <div className={Styles.inputMain} >
                            <Input className={Styles.mt30} placeholder="test@technomile.com" variant="border" />
                            <Input className={Styles.mt30} type="password" variant="border" />

                        </div>
                        <div className={Styles.forgotText}>
                            <Text variant={"smText"} color={"black"} strong={"strong4"}>forgot password?</Text>
                        </div>
                        <div className={Styles.btnMain} >
                            <Button size={"lg02"} variant={"solidPrimary"}>Continue</Button>
                        </div>
                        <Text className={Styles.secText} variant={"smText"} color={"black"} strong={"strong4"}>Can’t Login?</Text>

                    </Card>
                </div>
            </div>
        </div>

    )
}
export default Styleguide

