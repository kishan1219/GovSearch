import React from "react";
import {
  listItems,
  listValue,
  items,
  contactCard,
} from "./federal-contactdata";
import {
  Layout,
  CriteriaCard,
  Text,
  Icon,
  Card,
  CardItems,
  ContactCard,
  // Button,
  // Heading,
  // Input,
} from "../../../../components/shared";
import Styles from "./federal-contactdetail.module.scss";
import { Grid } from "@mui/material";
import Criteria from "../../../criteria";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { MapInteractionCSS } from "react-map-interaction";
// import { Modal } from "@material-ui/core";
const FederalContactDetail = () => {
  // const handleOpen = () => setShow(true);
  // const handleClose = () => setShow(false);
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
  return (
    <Layout isFederal={false} isProfessional={true}>
      <div className={Styles.Container}>
        <div className={Styles.searchCriteria}>
          <Text
            className={Styles.departHead}
            variant={"mlgText"}
            color="darkGray"
          >
            Search Criteria “ Markowitz Army ”
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
            {/* onClick={handleOpen} */}
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
                  {contactCard.map((data) => {
                    const { davidMarkoData,
                    DaleStrong,
                    janHeller,travisGarriss,brainMackey
                     } = data;
                    return (
                      <div key={davidMarkoData}>
                        <CriteriaCard
                          src={davidMarkoData.logo}
                          isCriteriaFirst={false}
                          isCriteriaSecond={true}
                          heading={davidMarkoData.heading}
                          designation={davidMarkoData.designation}
                          webAddress={davidMarkoData.webAddress}
                          emailText={davidMarkoData.emailText}
                          phoneText={davidMarkoData.phoneText}
                          positionText={davidMarkoData.positionText}
                          contact={davidMarkoData.contact}
                          addrsSecond={davidMarkoData.addrsSecond}
                          addrsFirst={davidMarkoData.addrsFirst}
                        />
                      </div>
                    );
                  })}
                  <Text
                    className={`${Styles.requestText} ${"mt5 mB5 ml15"}`}
                    strong="strong3"
                    variant={"smText"}
                    color="gray"
                  >
                    Past Position{" "}
                  </Text>
                  <Card className={Styles.cardBoxOne}>
                    {listItems.map((data) => (
                      <CardItems
                        isPositionFirst={data.isPositionFirst}
                        isPosition={data.isPosition}
                        isAssetsText={data.isAssetsText}
                        isChildText={data.isChildText}
                        isContactText={data.isContactText}
                        personposition={data.personposition}
                        personname={data.personname}
                        year={data.year}
                        fontweightOne={data.fontweightOne}
                        fontweightTwo={data.fontweightTwo}
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
                    <Criteria isCriteriaFirst={false} isCriteriaSecond={true} />
                  </div>
                </MapInteractionCSS>
              </div>
            )}
            {hideHierarchy && (
              <>
                <Grid item lg={4} sm={12} md={4} xs={12}>
                  <div className={Styles.trendingBox}>
                    {contactCard.map((data) => {
                      const { ArmyChiefDescription,
                        madisonDescription,baeDescription
                        } = data;
                      return (
                        <div key={ArmyChiefDescription}>
                          <CriteriaCard
                            src={ArmyChiefDescription.logo}
                            isCriteriaInfo={true}
                            isCriteriaFirst={false}
                            isCriteriaSecond={false}
                            heading={ArmyChiefDescription.heading}
                            designation={ArmyChiefDescription.address}
                            webAddress={ArmyChiefDescription.webAddress}
                            contact={ArmyChiefDescription.contact}
                            description={ArmyChiefDescription.description}
                          />
                        </div>
                      );
                    })}
                    <div>
                      <Text
                        className={`${Styles.requestText} ${"mt5 mB5 ml15"}`}
                        strong="strong3"
                        variant={"smText"}
                        color="gray"
                      >
                        Past Postion Holders
                      </Text>
                      <Card
                        className={`${Styles.cardthirdBox} ${Styles.scrollBar} `}
                      >
                        {listValue.map((data) => (
                          <CardItems
                            isPositionFirst={data.isPositionFirst}
                            isPosition={data.isPosition}
                            isAssetsText={data.isAssetsText}
                            isChildText={data.isChildText}
                            isContactText={data.isContactText}
                            year={data.year}
                            personname={data.personname}
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
                      Recommendations
                    </Text>
                    <div className={`${Styles.armyBox} ${"mt15"} `}>
                      {items.map((item) => (
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
        {/* <Modal
          open={show}
          onClose={handleClose}
          style={{ backdropFilter: "blur(2px)" }}>
          <div className={Styles.profileModel}>
            <Card className={Styles.profileCard}>
              <div className={Styles.modalContentBox}>
                <Heading className={Styles.modalHeading} color={"secondary"} headingType={"h1"} strong={"strong6"}>Refresh Content Request</Heading>
                <Text className={Styles.emailText} color={"gray"} variant={"xxxlText"}>hunter@technomile.com</Text>
                <Text className={Styles.nameText} color={"primary"} variant={"xxxlText"}>David Markowitz</Text>
                <Input placeholder={"Email is wrong"} className={`${Styles.textAreabox} ${'mt25'}`} type="textarea" />
                <div className={Styles.modalBtn}>
                  <Button btnClass={Styles.mainBtn} size={"lg"} variant={"solidPrimary"}>Send Request</Button>
                  <Button btnClass={Styles.mainBtn} size={"lg"} variant={"solidPrimary"}>Cancel</Button>
                </div>
              </div>
            </Card>
          </div>
        </Modal> */}
      </div>
    </Layout>
  );
};

export default FederalContactDetail;
