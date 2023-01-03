import React from "react";
import {
  CheckBox,
  Card,
  Icon,
  Input,
  Button,
  NewsCard,
  Heading,
  Text,
  Tables,
  ListGroup,
  ListItem,
  LatestDeatils,
  Search,
  ContactCard,
  // CriteriaCard,
  CardItems,
  Criteria,
} from "../../components/shared/index";
import Styles from "./styleguide.module.scss";
import SearchBar from "../../components/common/searchbar";
import BarChart from "../../components/shared/barchart/barchart";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Header from "../../components/common/header/header";
import Cardtab from "../../components/shared/cardtab/cardtab";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Styleguide = () => {
  const views = [
    {
      id: 1,
      img: "assets/images/armySeal.png",
      positionFirst: "Department of the Army",
      name: "",
      number: "7",
      positionSecond: "Department of Defense",
      place: "Arlington, VA",
    },
    {
      id: 2,
      img: "assets/images/armySeal.png",
      positionFirst: "Department of the Army",
      name: "",
      number: "7",
      positionSecond: "Department of Defense",
      place: "Arlington, VA",
    },
    {
      id: 3,
      img: "assets/images/armySeal.png",
      positionFirst: "Department of the Army",
      name: "",
      number: "7",
      positionSecond: "Department of Defense",
      place: "Arlington, VA",
    },
    {
      id: 4,
      img: "assets/images/armySeal.png",
      positionFirst: "Department of the Army",
      name: "",
      number: "7",
      positionSecond: "Department of Defense",
      place: "Arlington, VA",
    },
    {
      id: 5,
      img: "assets/images/armySeal.png",
      positionFirst: "Department of the Army",
      name: "",
      number: "7",
      positionSecond: "Department of Defense",
      place: "Arlington, VA",
    },
    {
      id: 6,
      img: "assets/images/armySeal.png",
      positionFirst: "Department of the Army",
      name: "",
      number: "7",
      positionSecond: "Department of Defense",
      place: "Arlington, VA",
    },
  ];
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    if (searchValue === "hello") {
      handleSearch();
      navigate(`/federale-department`); //navigate to the searched value
    }
  };
  console.log(searchValue);

  return (
    <div className={Styles.wrapper}>
      <div>
        <Switch />
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      </div>
      <Header />
      <Header isSearch={false} />
      <Header isRightNav={true} isFederal={false} isProfessional={true} />
      <Header
        isSearch={false}
        isRightNav={true}
        isFederal={false}
        isProfessional={true}
      />
      <Header
        isSearch={true}
        isRightNav={true}
        isFederal={false}
        isGovSearchProfessional={true}
      />
      <Header
        isSearch={false}
        isRightNav={true}
        isFederal={false}
        isStateLocal={true}
      />
      <Header isTechnomileLogo={true} isGovSearchLogo={false} />
      <Header
        isTechnomileLogo={true}
        isGovSearchLogo={false}
        isSearch={false}
      />
      <Header
        isTechnomileLogo={true}
        isGovSearchLogo={false}
        isSearch={false}
        isRightNav={true}
        isFederal={false}
        isAdmin={true}
      />
      <Header
        isTechnomileLogo={true}
        isGovSearchLogo={false}
        isSearch={false}
        isRightNav={true}
        isFederal={false}
        isProfessionalEdition={true}
      />
      <Header
        isTechnomileLogo={true}
        isGovSearchLogo={false}
        isSearch={false}
        isRightNav={false}
        isFederal={false}
      />
      <Header
        size="sm"
        isTechnomileLogo={true}
        isGovSearchLogo={false}
        isSearch={false}
        isRightNav={true}
        isFederal={false}
      />
      <div className={Styles.checboxMain}>
        <CheckBox
          checked="checked"
          labelName="primary"
          variant="primary"
          className={Styles.mb20}
        />
        <CheckBox
          checked="checked"
          labelName="gray"
          variant="gray"
          className={Styles.mb20}
        />
        <CheckBox
          checked="checked"
          labelName="gray"
          variant="grayFill"
          className={Styles.mb20}
        />
      </div>
      <div className={Styles.search}>
        <Search
          inputclassName={Styles.searchBox}
          placeholder={"Contacts, Offices, Vendors, Contracts..."}
          size={"icon_large"}
          iconColor={"gray"}
          iconclassName={"icoClass"}
        />
      </div>
      <div className={Styles.iconMain}>
        <Icon type={"refresh"} variant="primary" size={"icon_xlarge"} />
      </div>
      <div className={Styles.inputMain}>
        <Input placeholder="Input Box" />
        <Input
          className={Styles.mt30}
          placeholder="Input Box"
          variant="border"
        />
        <Input className={Styles.mt30} placeholder="Input Box" variant="grey" />
      </div>

      <div className={Styles.buttonMain}>
        <Button size={"xlg"} variant={"solidPrimary"}>
          Demo
        </Button>
        <Button size={"xlg"} variant={"disaled"}>
          Demo
        </Button>
        <Button size={"xlg"} variant={"solidPrimary"}>
          Demo
        </Button>
        <Button size={"sm"} variant={"solidSecondary"}>
          Demo
        </Button>
        <Button size={"xmd"} variant={"solidSecondary"}>
          Demo
        </Button>
        <Button btnClass={Styles.mt30} size={"xxlg"} variant={"solidPrimary"}>
          Demo
        </Button>
        <Button size={"lg"} variant={"solidPrimary"}>
          Demo
        </Button>
        <Button size={"xxlmd"} variant={"dangerPrimary"}>
          Demo
        </Button>
        <Button btnClass={Styles.mt30} size={"xxlg"} variant={"solidPrimary"}>
          Demo
        </Button>
        <Button btnClass={Styles.mt30} size={"xxlg"} variant={"solidPrimary"}>
          Demo
        </Button>
        <Button size={"xlsm"} variant={"dangerPrimary"}>
          Demo
        </Button>
        <Button size={"xlmd"} variant={"transparent"}>
          Advanced
        </Button>
      </div>
      <div>
        <Text
          className={Styles.text}
          variant={"xxlText"}
          color={"red"}
          strong={"strong7"}
        >
          hello
        </Text>
      </div>

      <div>
        <Heading headingType={"h1"}>Heading Demo</Heading>
        <Heading headingType={"h2"}>Heading Demo</Heading>
        <Heading headingType={"h3"}>Heading Demo</Heading>
        <Heading headingType={"h4"}>Heading Demo</Heading>
        <Heading headingType={"h5"}>Heading Demo</Heading>
        <Heading headingType={"h6"}>Heading Demo</Heading>
      </div>
      <div className={Styles.newsCard}>
        <NewsCard
          src="assets/images/officer.jpg"
          textFirst={
            "FORCM Jason R. Dunn is the new Force Master Chief of Commander Navy Installations Command"
          }
          textSecond="He succeeds former Chief, FORCM Greg A. Vidaurri, in the position. He served as Tomahawk LPO ..."
        />
      </div>

      <div>
        <Tables />
      </div>
      {/* {/ LatestDeatils /} */}
      <div className={`${Styles.colMd4} ${Styles.pLr12} $ ${Styles.w60}`}>
        <Text
          className={`${Styles.cardHeading}`}
          color="darkGray"
          strong="strong3"
        >
          Latest Detail Views
        </Text>
        <div
          className={`${Styles.homeCard} ${Styles.scrollBar} ${Styles.mb40}`}
        >
          {views.map((item) => (
            <LatestDeatils
              latestImage={item.img}
              name={item.name}
              postion={item.positionFirst}
              latestHeadingNumber={item.number}
              latestHeadingSecond={item.positionSecond}
              latestHeadingThird={item.place}
            />
          ))}
        </div>
      </div>
      {/* {/ LatestDeatils /} */}
      <div className={Styles.List}>
        <ListGroup>
          <ListItem children={"List"} />
          <ListItem children={"List"} />
          <ListItem children={"List"} />
          <ListItem children={"List"} />
        </ListGroup>
      </div>
      <div className={Styles.searchbar}>
        <SearchBar
          inputclassName={Styles.s}
          placeholder={"Search"}
          size={"icon_large"}
          iconColor={"gray05"}
          iconclassName={"icoClass"}
        />
      </div>

      <div className={Styles.chart} style={{ width: 500 }}>
        <BarChart />
      </div>
      <div className="mt30 mb50">
        <Cardtab />
      </div>
      {/*  Army card */}
      <div className="mt40 mb50">
        <ContactCard
          src={"assets/images/OfficialArmySeal.png"}
          imageClass={"ml20"}
          isGreenBorder={false}
          istopLacsText={true}
          isArlingtonText={false}
          isVirgina={true}
          imageSize="imgLarge"
        />
      </div>
      <div className="mt40 mb50">
        <ContactCard
          src={"assets/images/armySeal.png"}
          imageClass={"mt10 mr10 w75px"}
          departmentClass={Styles.departmentArmyTab}
          istopLacsText={false}
          isDownLacsText={true}
          isContactIcon={false}
          isGreenBorder={true}
          imageSize="imgLarge"
        />
      </div>
      {/* {/ army card /} */}
      <div className="mt40 mb50">
        <Criteria />
      </div>

      <Card className={Styles.cardBox}>
        <CardItems
          isPosition={true}
          isAssetsText={false}
          isChildText={false}
          isContactText={false}
          accountOne={"2021-2021"}
          accountTwo={"Tom Jones"}
        />
        <CardItems
          isPosition={true}
          isAssetsText={false}
          isChildText={false}
          isContactText={false}
          accountOne={"2021-2021"}
          accountTwo={"Jeff Koons"}
        />
        <CardItems
          isPosition={true}
          isAssetsText={false}
          isChildText={false}
          isContactText={false}
          accountOne={"2021-2021"}
          accountTwo={"Dale Strong"}
        />
        <CardItems
          isPosition={true}
          isAssetsText={false}
          isChildText={false}
          isContactText={false}
          accountOne={"2021-2021"}
          accountTwo={"Janice Yellen"}
        />
        <CardItems
          isPosition={true}
          isAssetsText={false}
          isChildText={false}
          isContactText={false}
          accountOne={"2021-2021"}
          accountTwo={"William Ford"}
        />
        <CardItems
          isPosition={true}
          isAssetsText={false}
          isChildText={false}
          isContactText={false}
          accountOne={"2021-2021"}
          accountTwo={"Tom Jones"}
        />
      </Card>
      <form>
        <Input value={searchValue} onChange={handleSearchInputChanges} />
        <Button
          type={"submit"}
          btnHandler={callSearchFunction}
          size={"xlg"}
          variant={"solidPrimary"}
        >
          Demo
        </Button>
      </form>
    </div>
  );
};
export default Styleguide;
