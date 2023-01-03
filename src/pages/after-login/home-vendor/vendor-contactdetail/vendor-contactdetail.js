import React from "react";
import {
  listItems,
  listValue,
  items,
  contactCard,
} from "./vendor-contactdata";
import {
  Layout,
  CriteriaCard,
  Text,
  Icon,
  Card,
  CardItems,
  ContactCard,
} from "../../../../components/shared";
import Styles from "./vendor-contactdetail.module.scss";
import { Grid } from "@mui/material";
import Criteria from "../../../criteria/criteria";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { MapInteractionCSS } from "react-map-interaction";

const VendorContactDetail = () => {
 
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
                    const { DaleStrong,
                    
                    janHeller,travisGarriss,brainMackey
                     } = data;
                    return (
                      <div key={janHeller}>
                        <CriteriaCard
                          src={janHeller.logo}
                          isCriteriaFirst={false}
                          isCriteriaSecond={true}
                          heading={janHeller.heading}
                          designation={janHeller.designation}
                          webAddress={janHeller.webAddress}
                          emailText={janHeller.emailText}
                          phoneText={janHeller.phoneText}
                          positionText={janHeller.positionText}
                          // contact={DaleStrong.contact}
                          // addrsSecond={DaleStrong.addrsSecond}
                          // addrsFirst={DaleStrong.addrsFirst}
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
                        <div key={madisonDescription}>
                          <CriteriaCard
                            src={madisonDescription.logo}
                            isCriteriaInfo={true}
                            isCriteriaFirst={false}
                            isCriteriaSecond={false}
                            heading={madisonDescription.heading}
                            designation={madisonDescription.address}
                            webAddress={madisonDescription.webAddress}
                            contact={madisonDescription.contact}
                            description={madisonDescription.description}
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
       
      </div>
    </Layout>
  );
};

export default VendorContactDetail;
