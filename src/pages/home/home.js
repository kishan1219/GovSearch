import React from 'react'
import { LatestDeatils, Layout, NewsCard, Search, Text } from '../../components/shared'
import Styles from './home.module.scss'
import BarChart from '../../components/shared/barchart/barchart'

const Home = () => {
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
        <Layout>
            <div className={Styles.searchMain}>
                <Search inputclassName={Styles.searchBox} placeholder={"Contacts, Offices, Vendors, Contracts..."} size={"icon_large"} iconColor={"gray04"} iconclassName={"icoClass"} />
            </div>
            <div className='alignBetween mt35'>
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
                <div className={`${Styles.newsCard} ${Styles.scrollBar} ${Styles.scrollWrapper}`}>
                    <NewsCard src='assets/images/officer.jpg'
                        textFirst={"FORCM Jason R. Dunn is the new Force Master Chief of Commander Navy Installations Command"}
                        textSecond="He succeeds former Chief, FORCM Greg A. Vidaurri, in the position. He served as Tomahawk LPO ..." />
                </div>
                <div className={Styles.chart}>
                    <Text className={"mB14 textCenter mB100"} variant="xbigtext" color="gray01" strong="strong3">Updates</Text>
                    <Text className={Styles.textbar} variant={"smText"} color={"white"} strong={"strong4"}>1000</Text>
                    <Text className={Styles.textbarone} variant={"smText"} color={"white"} strong={"strong4"}>1200</Text>
                    <Text className={Styles.textbartwo} variant={"smText"} color={"white"} strong={"strong4"}>300</Text>
                    <BarChart />
                </div>
            </div>

        </Layout>
    )
}


export default Home