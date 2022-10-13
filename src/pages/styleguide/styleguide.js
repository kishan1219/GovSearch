import React from 'react'

import Search from '../../components/shared/search/search'
import styles from './styleguide.module.scss'
import { CheckBox, Icon, Input, Button, NewsCard, Heading, Card ,Text,Table, LatestDeatils} from '../../components/shared/index'
import Styles from './styleguide.module.scss'
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
            <div className={Styles.checboxMain}>
                <CheckBox defaultChecked="checked" labelName={"This is a checkbox"} />
                
            </div>
            <div className={styles.search}>
                <Search inputclassName={styles.searchBox} placeholder={"search"} size={"icon_large"} iconColor={"gray05"} iconclassName={"icoClass"}/>
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
                <Button size={"md02"} variant={"dangerPrimary"}>Demo</Button>
                <Button btnClass={Styles.mt30} size={"lg01"} variant={"solidPrimary"}>Demo</Button>
                <Button btnClass={Styles.mt30} size={"lg01"} variant={"solidPrimary"}>Demo</Button>
                <Button size={"sm02"} variant={"dangerPrimary"}>Demo</Button>
            </div>
            <div>
                <Text className={styles.text} variant={"xxlText"} color={"red"} strong={"strong7"}>hello</Text>
            </div>

            <div>
                <Heading headingType={"h1"} >Heading Demo</Heading>
                <Heading headingType={"h2"} >Heading Demo</Heading>
                <Heading headingType={"h3"} >Heading Demo</Heading>
                <Heading headingType={"h4"} >Heading Demo</Heading>
                <Heading headingType={"h5"} >Heading Demo</Heading>
                <Heading headingType={"h6"} >Heading Demo</Heading>
            </div>
           
            
            <div className={Styles.cardMain}>
                <Card children={"example card"} />
            </div>
            <div className={Styles.newsCard}>
            <NewsCard src='images/newsCardImage.png' textFirst={"FORCM Jason R. Dunn is the new Force Master Chief of Commander Navy Installations Command"} textSecond="He succeeds former Chief, FORCM Greg A. Vidaurri, in the position. He served as Tomahawk LPO ..." />
            </div>

            <div>
                <Table/>
            </div>
            <div className={`${styles.colMd4} ${styles.pLr12}  `}>
            <div className={`${styles.homeCard} ${styles.scrollBar} ${styles.mb40}`}>
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
        </div>
        
    )
}


export default Styleguide
