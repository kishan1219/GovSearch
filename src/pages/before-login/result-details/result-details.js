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
      cityname: "Virginia",
      count: "10000",
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
      cityname: "Virginia",
      count: "10000",
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
      cityname: "Virginia",
      count: "Madison County",
      src: "assets/images/contactSealsm.png",
      isVirgina: true,
      isBorderColor: false,
      istopLacsText: true,
      isArlingtonText: false,
    },
    {
      id: 4,
      heading: "Secretary of the Army",
      cityname: "Virginia",
      imageClass: "ml20 mr20",
      count: "10000",
      src: "assets/images/OfficialArmySeal.png",
      isVirgina: true,
      isBorderColor: false,
      istopLacsText: true,
      isArlingtonText: false,
    },
    {
      id: 5,
      heading: "Dale Strong (R)",
      cityname: "Commission Chairman",
      imageClass: "ml20 mr20",
      count: "Madison County",
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
      updates: "Jerry Reimers",
      companyname: "Defense Intelligence S",
      position: "New",
      grayThirdRow: "lightGray01",
      strongFirst: "",
      strongSecond: "",
    },
    {
      id: 2,
      updates: "Gary Hausman",
      companyname: "Commandant",
      position: "Update",
      grayThirdRow: "lightGray01",
      strongFirst: "",
      strongSecond: "",
    },
    {
      id: 3,
      updates: "Stephanie Kelley",
      companyname: "Assistant Comman",
      position: "New",
      grayThirdRow: "lightGray01",
      strongFirst: "",
      strongSecond: "",
    },
    {
      id: 4,
      updates: "Thomas Donehue",
      companyname: "Command Surgent",
      position: "Update",
      grayThirdRow: "lightGray01",
      strongFirst: "",
      strongSecond: "",
    },
    {
      id: 5,
      updates: "Steven Collins",
      companyname: "Chief of Staff",
      position: "New",
      grayThirdRow: "lightGray01",
      strongFirst: "strong7",
      strongSecond: "strong7",
    },
  ];

  const trendingList = [
    {
      id: 1,
      updates: "Contact",
      companyname: "Adam Stanley",
      position: "Commander",
      grayFirstRow: "lightGray01",
      strongFirst: "",
      strongSecond: "",
      strongThird: "",
    },
    {
      id: 2,
      updates: "Contact",
      companyname: "Gary Hausman",
      position: "Chief of Staff",
      grayFirstRow: "lightGray01",
      strongFirst: "",
      strongSecond: "",
      strongThird: "",
    },
    {
      id: 3,
      updates: "Contact",
      companyname: "Commandant",
      position: "Vacant",
      grayFirstRow: "lightGray01",
      strongFirst: "",
      strongSecond: "",
      strongThird: "",
    },
    {
      id: 4,
      updates: "Contact",
      companyname: "Office Name",
      position: "Top Level Office",
      grayFirstRow: "lightGray01",
      strongFirst: "",
      strongSecond: "",
      strongThird: "",
    },
    {
      id: 5,
      updates: "Contact",
      companyname: "XVIII Airborne Corps",
      position: "1st Infantry Divisio",
      grayFirstRow: "lightGray01",
      strongSecond: "",
      strongThird: "",
    },
    {
      id: 6,
      updates: "Contact",
      companyname: "Chief of Staff",
      position: "Commandant",
      grayFirstRow: "lightGray01",
      strongSecond: "strong7",
      strongThird: "strong7",
    },
  ];

  const childList = [
    {
      id: 1,
      updates: "Office of the Asistant to Secretary of",
      companyname: "Arlington, VA",
      strongFirst: "strong7",
      isAssetsText: false,
      isChildText: true,
      isContactText: false,
    },
    {
      id: 2,
      updates: "Office of the Asistant to Secretary of",
      companyname: "Arlington, VA",
      strongFirst: "strong7",
      isAssetsText: false,
      isChildText: true,
      isContactText: false,
    },
    {
      id: 3,
      updates: "Auditor General   US Army Audit Agency",
      companyname: "Arlington, VA",
      strongFirst: "strong7",
      isAssetsText: false,
      isChildText: true,
      isContactText: false,
    },
    {
      id: 4,
      updates: "Chief of staff",
      companyname: "Arlington, VA",
      strongFirst: "strong7",
      isAssetsText: false,
      isChildText: true,
      isContactText: false,
    },
    {
      id: 5,
      updates: "General Counsel",
      companyname: "Arlington, VA",
      strongFirst: "strong7",
      isAssetsText: false,
      isChildText: true,
      isContactText: false,
    },
    {
      id: 6,
      updates: "Contact",
      companyname: "Arlington, VA",
      strongFirst: "strong7",
      isAssetsText: false,
      isChildText: true,
      isContactText: false,
    },
    {
      id: 7,
      updates: "Contact",
      companyname: "Arlington, VA",
      strongFirst: "strong7",
      isAssetsText: false,
      isChildText: true,
      isContactText: false,
    },
    {
      id: 8,
      updates: "Contact",
      companyname: "Arlington, VA",
      strongFirst: "strong7",
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
                          addrsFirst={baeSystem.addressFirst}
                          addrsSecond={baeSystem.addressSecond}
                          // hideTxtFst={"https://army.mil"}
                          // hideTxtSec={"100,000"}
                         
                          contactFirst={baeSystem.contactNumberFirst}
                          webAddress={baeSystem.webAddress}
                          contactSecond={baeSystem.contactNumberSecond}
                          employee={baeSystem.employee}
                          description={baeSystem.description}
                        />
                      </div>
                    );
                  })}
                  {/* <CriteriaCard src={"assets/images/baeImage.png"} heading={"BAE Systems, Inc"}
                isCriteriaSecond={false}  updates={"Madison County Courthouse"} 
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
                        updates={data.updates}
                        companyname={data.companyname}
                        position={data.position}
                        grayThirdRow={data.grayThirdRow}
                        strongFirst={data.strongFirst}
                        strongSecond={data.strongSecond}
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
                            updates={item.updates}
                            companyname={item.companyname}
                            position={item.position}
                            grayFirstRow={item.grayFirstRow}
                            strongSecond={item.strongSecond}
                            strongThird={item.strongThird}
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
                            updates={value.updates}
                            companyname={value.companyname}
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
                          cityname={item.cityname}
                          count={item.count}
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
