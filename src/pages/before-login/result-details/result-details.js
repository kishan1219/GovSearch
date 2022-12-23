import React, { useState } from "react";
import {
  Layout,
  CriteriaCard,
  Text,
  Icon,
  Card,
  CardItems,
  ContactCard,
} from "../../../components/shared";
import Styles from "./result-details.module.scss";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Criteria from "../../criteria/criteria";
import { MapInteractionCSS } from "react-map-interaction";
import { ContactCardData } from "./result-data";
const ResultDetails = () => {
  const [showHierarchy, setShowHierarchy] = useState(false);
  const [hideHierarchy, setHierarchyHide] = useState(true);

  const [show, setShow] = useState(false);
  const [showHide, setShowHide] = useState(true);
  const fullscreenWidth = () => {
    if (setShowHide(!showHide)) {
      setShow(false);
    } else if (setShow(!show)) {
      setShowHide(false);
    }
  };

  const [value, setValue] = useState(50);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const showHierarchyDetails = () => {
    if (setHierarchyHide(!hideHierarchy)) {
      setShowHierarchy(false);
    } else if (setShowHierarchy(!showHierarchy)) {
      setHierarchyHide(false);
    }
  };

  const resultDetailsitems = [
    {
      id: 1,
      heading: "Secretary of the Army",
      imageClass: "ml20 mr20",
      paraOne: "Virginia",
      paraTwo: "10000",
      src: "assets/images/OfficialArmySeal.png",
      isGreenBorder: false,
      istopLacsText: true,
      isArlingtonText: false,
      isVirgina: true,
    },
    {
      id: 2,
      heading: "Secretary of the Army",
      imageClass: "ml20 mr20",
      paraOne: "Virginia",
      paraTwo: "10000",
      src: "assets/images/OfficialArmySeal.png",
      isVirgina: true,
      isBorderColor: false,
      istopLacsText: true,
      isArlingtonText: false,
    },
    {
      id: 3,
      heading: "Dale Strong (R)",
      imageClass: "ml20 mr20",
      paraOne: "Virginia",
      paraTwo: "Madison County",
      src: "assets/images/contactSealsm.png",
      isVirgina: true,
      isBorderColor: false,
      istopLacsText: true,
      isArlingtonText: false,
    },
    {
      id: 4,
      heading: "Secretary of the Army",
      paraOne: "Virginia",
      imageClass: "ml20 mr20",
      paraTwo: "10000",
      src: "assets/images/OfficialArmySeal.png",
      isVirgina: true,
      isBorderColor: false,
      istopLacsText: true,
      isArlingtonText: false,
    },
    {
      id: 5,
      heading: "Dale Strong (R)",
      paraOne: "Commission Chairman",
      imageClass: "ml20 mr20",
      paraTwo: "Madison County",
      src: "assets/images/contactSealsm.png",
      isVirgina: true,
      isBorderColor: false,
      istopLacsText: true,
      isArlingtonText: false,
    },
  ];

  const latestList = [
    {
      id: 1,
      textFirst: "Jerry Reimers",
      textSecond: "Defense Intelligence S",
      textThird: "New",
      colorThree: "lightGray01",
      fontweightOne: "",
      fontweightTwo: "",
    },
    {
      id: 2,
      textFirst: "Gary Hausman",
      textSecond: "Commandant",
      textThird: "Update",
      colorThree: "lightGray01",
      fontweightOne: "",
      fontweightTwo: "",
    },
    {
      id: 3,
      textFirst: "Stephanie Kelley",
      textSecond: "Assistant Comman",
      textThird: "New",
      colorThree: "lightGray01",
      fontweightOne: "",
      fontweightTwo: "",
    },
    {
      id: 4,
      textFirst: "Thomas Donehue",
      textSecond: "Command Surgent",
      textThird: "Update",
      colorThree: "lightGray01",
      fontweightOne: "",
      fontweightTwo: "",
    },
    {
      id: 5,
      textFirst: "Steven Collins",
      textSecond: "Chief of Staff",
      textThird: "New",
      colorThree: "lightGray01",
      fontweightOne: "strong7",
      fontweightTwo: "strong7",
    },
  ];

  const trendingList = [
    {
      id: 1,
      textFirst: "Contact",
      textSecond: "Adam Stanley",
      textThird: "Commander",
      colorOne: "lightGray01",
      fontweightOne: "",
      fontweightTwo: "",
    },
    {
      id: 2,
      textFirst: "Contact",
      textSecond: "Gary Hausman",
      textThird: "Chief of Staff",
      colorOne: "lightGray01",
      fontweightOne: "",
      fontweightTwo: "",
    },
    {
      id: 3,
      textFirst: "Contact",
      textSecond: "Commandant",
      textThird: "Vacant",
      colorOne: "lightGray01",
      fontweightOne: "",
      fontweightTwo: "",
    },
    {
      id: 4,
      textFirst: "Contact",
      textSecond: "Office Name",
      textThird: "Top Level Office",
      colorOne: "lightGray01",
      fontweightOne: "",
      fontweightTwo: "",
    },
    {
      id: 5,
      textFirst: "Contact",
      textSecond: "XVIII Airborne Corps",
      textThird: "1st Infantry Divisio",
      colorOne: "lightGray01",
      fontweightTwo: "",
      fontweightThree: "",
    },
    {
      id: 6,
      textFirst: "Contact",
      textSecond: "Chief of Staff",
      textThird: "Commandant",
      colorOne: "lightGray01",
      fontweightTwo: "strong7",
      fontweightThree: "strong7",
    },
  ];

  const childList = [
    {
      id: 1,
      textFirst: "Office of the Asistant to Secretary of",
      textSecond: "Arlington, VA",
      fontweightOne: "strong7",
      isAssetsText: false,
      isChildText: true,
      isContactText: false,
    },
    {
      id: 2,
      textFirst: "Office of the Asistant to Secretary of",
      textSecond: "Arlington, VA",
      fontweightOne: "strong7",
      isAssetsText: false,
      isChildText: true,
      isContactText: false,
    },
    {
      id: 3,
      textFirst: "Auditor General   US Army Audit Agency",
      textSecond: "Arlington, VA",
      fontweightOne: "strong7",
      isAssetsText: false,
      isChildText: true,
      isContactText: false,
    },
    {
      id: 4,
      textFirst: "Chief of staff",
      textSecond: "Arlington, VA",
      fontweightOne: "strong7",
      isAssetsText: false,
      isChildText: true,
      isContactText: false,
    },
    {
      id: 5,
      textFirst: "General Counsel",
      textSecond: "Arlington, VA",
      fontweightOne: "strong7",
      isAssetsText: false,
      isChildText: true,
      isContactText: false,
    },
    {
      id: 6,
      textFirst: "Contact",
      textSecond: "Arlington, VA",
      fontweightOne: "strong7",
      isAssetsText: false,
      isChildText: true,
      isContactText: false,
    },
    {
      id: 7,
      textFirst: "Contact",
      textSecond: "Arlington, VA",
      fontweightOne: "strong7",
      isAssetsText: false,
      isChildText: true,
      isContactText: false,
    },
    {
      id: 8,
      textFirst: "Contact",
      textSecond: "Arlington, VA",
      fontweightOne: "strong7",
      isAssetsText: false,
      isChildText: true,
      isContactText: false,
    },
  ];
  return (
    <Layout isFederal={false} isProfessional={true}>
      <div className={Styles.mainContainer}>
        <div className={Styles.searchCriteria}>
          <Text
            className={Styles.departHead}
            variant={"mlgText"}
            color="darkGray"
          >
            Search Criteria “ Department of the Army ”
          </Text>
          <div className="dFlex">
            <Text
              className={`${Styles.departHead} ${"mr24"}`}
              variant={"smText"}
              color="gray"
            >
              Advanced
            </Text>
            <Text className={Styles.departHead} variant={"smText"} color="gray">
              Save Search{" "}
            </Text>
          </div>
          <div>
            <Icon
              className={Styles.headIcon}
              onClick={() => showHierarchyDetails(!hideHierarchy)}
              color={"gray05"}
              type={"hierarchy"}
              size="icon_xlarge"
            />
            <Icon
              className={`${Styles.plusIcon} ${"ml40 mr50"}`}
              color={"gray05"}
              type={"pluscircle"}
              size="icon_xlarge"
            />
            <Icon
              className={Styles.headIcon}
              color={"gray05"}
              type={"ExportButton"}
              size="icon_xlarge"
            />
          </div>
        </div>
        <div className={Styles.cardBox}>
          <Grid container spacing={0}>
            <Grid item lg={4} sm={12} md={4} xs={12}>
              {showHide && (
                <div className={Styles.detaisFirst}>
                  <div className={Styles.updateBox}>
                    <Text
                      className={Styles.updateText}
                      strong="strong3"
                      variant={"smText"}
                      color="gray"
                    >
                      Last Updated: 12:00 AM ET 05/31/2022
                    </Text>
                    <Text
                      className={Styles.requestText}
                      strong="strong3"
                      variant={"smText"}
                      color="gray"
                    >
                      request an update
                    </Text>
                    <Icon
                      type={"refresh"}
                      color={"black"}
                      size={"icon_small"}
                    />
                  </div>
                  {ContactCardData.map((data) => {
                    const { secretary, baeSystem } = data;

                    return (
                      <div key={baeSystem}>
                        <CriteriaCard
                          src={baeSystem.logo}
                          isCriteriaSecond={false}
                          heading={baeSystem.heading}
                          textFirst={baeSystem.addressFirst}
                          textSec={baeSystem.addressSecond}
                          // hideTxtFst={"https://army.mil"}
                          // hideTxtSec={"100,000"}
                          hideTxtThd={baeSystem.value}
                          paraTwo={baeSystem.contactNumberFirst}
                          paraOne={baeSystem.webAddress}
                          paraThree={baeSystem.contactNumberSecond}
                          paraFour={baeSystem.employee}
                          paraFive={baeSystem.description}
                        />
                      </div>
                    );
                  })}
                  {/* <CriteriaCard src={"assets/images/baeImage.png"} heading={"BAE Systems, Inc"}
                isCriteriaSecond={false}  textFirst={"Madison County Courthouse"} 
                textSec={"100 Northside SQ, Huntsville, AL "} hideTxtFst={"https://army.mil"}
                 hideTxtSec={"100,000"} hideTxtThd={"703-695-4311"} isClassiicationText={true} paraTwo={"703-697-8036"}
                  paraOne={"https://bae.com"} paraThree={"702-888-8036"} paraFour={"# of Employees --"}
                   paraFive={"Description --"}/> */}
                  <Text
                    className={`${Styles.requestText} ${"mt5 mB5 ml15"}`}
                    strong="strong3"
                    variant={"smText"}
                    color="gray"
                  >
                    Lastest Contacts{" "}
                  </Text>
                  <Card className={Styles.cardBoxOne}>
                    {latestList.map((data) => (
                      <CardItems
                        textFirst={data.textFirst}
                        textSecond={data.textSecond}
                        textThird={data.textThird}
                        colorThree={data.colorThree}
                      />
                    ))}
                  </Card>
                </div>
              )}
            </Grid>
            {showHierarchy && (
              <div
                className={!show ? Styles.criteriaBox : Styles.criteriaSecBox}
              >
                <div className={Styles.screenIcon}>
                  <Box className={Styles.boxIcon} sx={{ width: 200 }}>
                    <Stack
                      spacing={2}
                      direction="row"
                      sx={{ mb: 1 }}
                      alignItems="center"
                    >
                      <Icon
                        type="minus"
                        color={"gray05"}
                        size={"icom_xsmall"}
                      />
                      <Slider
                        className={Styles.sliderValue}
                        aria-label="Volume"
                        value={value}
                        onChange={handleChange}
                      />
                      <Icon type="plus" color={"gray05"} size={"icom_xsmall"} />
                      <Icon
                        type="fullscreen"
                        onClick={() => fullscreenWidth(!show)}
                        color={"gray05"}
                        size={"icom_big"}
                      />
                    </Stack>
                  </Box>
                </div>
                <MapInteractionCSS>
                  <div className={Styles.criterBox}>
                    <Criteria isCriteriaThird={true} isCriteriaFirst={false} />
                  </div>
                </MapInteractionCSS>
              </div>
            )}
            {hideHierarchy && (
              <>
                <Grid item lg={4} sm={12} md={4} xs={12}>
                  <div className={Styles.trendingBox}>
                    <div>
                      <Text
                        className={`${Styles.requestText} ${"mt5 mB5 ml15"}`}
                        strong="strong3"
                        variant={"smText"}
                        color="gray"
                      >
                        Trending Assets
                      </Text>
                      <Card className={Styles.cardBoxOne}>
                        {trendingList.map((item) => (
                          <CardItems
                            textFirst={item.textFirst}
                            textSecond={item.textSecond}
                            textThird={item.textThird}
                            colorThree={item.colorThree}
                            fontweightOne={item.fontweightOne}
                            fontweightTwo={item.fontweightTwo}
                          />
                        ))}
                      </Card>
                    </div>
                    <div>
                      <Text
                        className={`${Styles.requestText} ${"mt5 mB5 ml15"}`}
                        strong="strong3"
                        variant={"smText"}
                        color="gray"
                      >
                        Child Offices
                      </Text>
                      <Card
                        className={`${Styles.cardthirdBox} ${
                          Styles.scrollBar
                        } ${"pt24 pb20"} `}
                      >
                        {childList.map((value) => (
                          <CardItems
                            textFirst={value.textFirst}
                            textSecond={value.textSecond}
                            colorThree={value.colorThree}
                            fontweightOne={value.fontweightOne}
                            fontweightThree={value.fontweightThree}
                            isAssetsText={value.isAssetsText}
                            isChildText={value.isChildText}
                            isContactText={value.isContactText}
                          />
                        ))}
                      </Card>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} sm={12} md={4} xs={12}>
                  <div className={Styles.armyMain}>
                    <Text
                      className={Styles.recomendText}
                      strong="strong3"
                      variant={"smText"}
                      color="gray"
                    >
                      Recommendation
                    </Text>
                    <div className={`${Styles.armyBox} ${"mt15"}`}>
                      {resultDetailsitems.map((item) => (
                        <ContactCard
                          src={item.src}
                          heading={item.heading}
                          paraOne={item.paraOne}
                          paraTwo={item.paraTwo}
                          isVirgina={item.isVirgina}
                          isArlingtonText={item.isArlingtonText}
                          imageClass={item.imageClass}
                        />
                      ))}
                    </div>
                  </div>
                </Grid>
              </>
            )}
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export default ResultDetails;
