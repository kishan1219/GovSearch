import React, { useState } from "react";
import Styles from "./state-dale.module.scss";
import {
  Button,
  Card,
  CheckBox,
  Icon,
  Layout,
  ContactCard,
  Text,
  ContactList,
} from "../../../../components/shared";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Tooltip } from "@mui/material";
import { DaleStrongData } from "../../../search-result/search-data";
import { useNavigate } from "react-router-dom";
const StateDale = () => {
  const [other, setOther] = useState(false);
  const [selectOther, setSelectOther] = useState("1");
  const [pluslist, setPlusList] = useState(false);
  const [selectPlusList, setSelectPlusList] = useState("1");
  const [tableHide, setTableHide] = useState(true);
  const [gridTableShow, setGridTableShow] = useState(false);
  const [openPlusCard, setOpenPlusCard] = useState(false);
  const [openExportCard, setopenExportCard] = useState(false);
  const navigate = useNavigate();
  const targetOther = (e) => {
    setSelectOther(e.target.value);
    setOther(false);
  };
  const gotoResultDetail = () => {
    navigate("/result-details");
  };
  const targetplusList = (e) => {
    setSelectPlusList(e.target.value);
    setPlusList(false);
  };
  const tableToggle = () => {
    if (setTableHide(!tableHide)) {
      setGridTableShow(false);
    } else if (setGridTableShow(!gridTableShow)) {
      setTableHide(false);
    }
  };

  const [checked, setChecked] = useState(false);
  const handleTextClick = () => {
    setChecked(!checked);
  };
  const CardItems = [
    {
      id: 1,
      logo: "assets/images/OfficialArmySeal.png",
      heading: "Department of the Army",
      country: "Virginia",
      value: "100,000",
    },
    {
      id: 2,
      logo: "assets/images/OfficialArmySeal.png",
      heading: "Department of the Army",
      country: "Virginia",
      value: "100,000",
    },
    {
      id: 3,
      logo: "assets/images/OfficialArmySeal.png",
      heading: "Department of the Army",
      country: "Virginia",
      value: "100,000",
    },
    {
      id: 4,
      logo: "assets/images/OfficialArmySeal.png",
      heading: "Department of the Army",
      country: "Virginia",
      value: "100,000",
    },
  ];

  return (
    <Layout isFederal={false} isProfessional={true}>
      <div className={Styles.container}>
        <div className={Styles.searchCriteria}>
          <Text variant={"mlgText"} color="darkGray">
            Search Criteria “Dale Strong Alabama”
          </Text>
          <div className="dFlex">
            <Tooltip title="Currently, Click event is not developed">
              <div>
                <Text className={"mr24 cursor"} variant={"smText"} color="gray">
                  Advanced
                </Text>
              </div>
            </Tooltip>
            <Tooltip title="Currently, Click event is not developed">
              <div>
                <Text className={"cursor"} variant={"smText"} color="gray">
                  Save Search{" "}
                </Text>
              </div>
            </Tooltip>
          </div>
          <div className={Styles.trioIcon}>
            <Icon
              onClick={tableToggle}
              color={"gray05"}
              type={tableHide ? "hierarchy" : "burger"}
              size="icon_xlarge"
            />
            <Icon
              onClick={() => {
                setOpenPlusCard(!openPlusCard);
                setopenExportCard(false);
              }}
              className={`${Styles.plusIconMain} ${"ml40 mr50"}`}
              color={openPlusCard ? "gray02" : "gray05"}
              type={"pluscircle"}
              size="icon_xlarge"
            />
            {openPlusCard && (
              <Card className={Styles.plusIconCard}>
                <div
                  className={`${
                    Styles.plusIcon
                  } ${"alignBetween alignItemsCenter mb20"}`}
                >
                  <Text className={"cursor"} variant={"xxxlText"} color="gray">
                    List
                  </Text>
                  <Icon
                    color={"gray05"}
                    type={"pluscircle"}
                    size="icon_large"
                  />
                </div>
                <div
                  className={`${Styles.plusIcon} ${"alignBetween ml20 mb30"}`}
                >
                  <CheckBox
                    className={`${"form-check-input"} ${Styles.tableCheckbox}`}
                    variant="grayFill"
                  />
                  <Text
                    className={Styles.plusIconCheckboxText}
                    variant={"xlText"}
                    color="gray"
                  >
                    10 Selected
                  </Text>
                </div>
                <div className={`${Styles.plusListMain} ${"mb20"}`}>
                  <Select
                    className={Styles.listSelect}
                    IconComponent={() => null}
                    sx={{
                      boxShadow: "none",
                      ".MuiOutlinedInput-notchedOutline": { border: "none" },
                    }}
                    value={selectPlusList}
                    onChange={targetplusList}
                    open={pluslist}
                  >
                    <MenuItem value={"1"}>
                      <Text variant={"mdText"}>Existing List Name</Text>
                    </MenuItem>
                    <MenuItem value={"2"}>list 1</MenuItem>
                    <MenuItem value={"3"}>list 2</MenuItem>
                    <MenuItem value={"4"}>list 3</MenuItem>
                  </Select>
                  <Icon
                    className={Styles.listIcon}
                    onClick={() => setPlusList(true)}
                    type="soliddownpolygon"
                    color={"darkGray"}
                    variant="icon_large"
                  />
                </div>
                <Button btnClass={Styles.addToBtn} size={"sm"}>
                  Add to List
                </Button>
              </Card>
            )}
            <Icon
              onClick={() => {
                setopenExportCard(!openExportCard);
                setOpenPlusCard(false);
              }}
              color={openExportCard ? "gray02" : "gray05"}
              type={"ExportButton"}
              size="icon_xlarge"
            />
            {openExportCard && (
              <Card className={Styles.plusIconCard}>
                <Text className={"ml10"} variant={"xbigText"} color="darkGray">
                  Share/Export
                </Text>
                <div
                  className={`${
                    Styles.plusIcon
                  } ${"alignBetween mt20 mt ml20 mb30"}`}
                >
                  <CheckBox
                    className={`${"form-check-input ml10"} ${
                      Styles.tableCheckbox
                    }`}
                    variant="grayFill"
                  />
                  <Text
                    className={Styles.plusIconCheckboxText}
                    variant={"xlText"}
                    color="gray"
                  >
                    10 Selected
                  </Text>
                </div>
                <div className="textRight">
                  <Text
                    className={"mb25"}
                    variant={"lgIconText"}
                    color="darkGray"
                  >
                    CSV
                  </Text>
                  <Text variant={"lgIconText"} color="darkGray">
                    CRM
                  </Text>
                </div>
              </Card>
            )}
          </div>
        </div>
        <Text
          className={`${Styles.resultText} ${"mt15 mb15"} `}
          strong="strong3"
          variant={"smText"}
          color="gray"
        >
          Showing 100 results out of 1000
        </Text>
        <div className={`${Styles.selectCriteria} ${"mB40"}`}>
          <Text
            handleClick={handleTextClick}
            className={"cursor"}
            strong="strong3"
            variant={"smText"}
            color="gray"
          >
            Select All
          </Text>
          <Text
            className={"cursor"}
            strong="strong3"
            variant={"smText"}
            color="gray"
          >
            Filters
          </Text>
          <Tooltip title="Currently, Click event is not developed">
            <div>
              <Icon
                className={Styles.closeIcon}
                color={"gray05"}
                type={"close"}
                size="icon_xsmall"
              />
            </div>
          </Tooltip>
          <div className={`${Styles.officeMain} ${Styles.otherSelectMain}`}>
            <Select
              className={Styles.officeSelect}
              IconComponent={() => null}
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: "none" },
              }}
              value={selectOther}
              onChange={targetOther}
              open={other}
            >
              <MenuItem value="1">other</MenuItem>
              <MenuItem value="2">other 2</MenuItem>
              <MenuItem value="3">other 3</MenuItem>
              <MenuItem value="4">other 4</MenuItem>
            </Select>
            <Icon
              className={Styles.straightIcon}
              type="straight"
              color={"gray01"}
              variant="icon_large"
            />
            <Icon
              className={Styles.selectIcon}
              onClick={() => setOther(true)}
              type="soliddownpolygon"
              color={"gray04"}
              variant="icon_large"
            />
          </div>
        </div>
        <div className={`${Styles.departmentTableMain} ${"alignBetween"}`}>
          {/* state and local search tables */}
          <div className={Styles.scrollBar}>
            {DaleStrongData.map((data) => (
              <ContactList
                imageClick={gotoResultDetail}
                isGrid={!tableHide ? true : false}
                isList={!gridTableShow ? true : false}
                isDesignation={true}
                expandSrcFirst={data.src}
                expandSrcSecond={data.expandlogoSecond}
                gridLogoSecond={data.gridlogoSecond}
                designation={data.designation}
                assist={data.assist}
                listSrc={data.src}
                id={data.id}
                name={data.name}
                vcb={data.vcb}
                vcbSecond={data.vcbSecond}
                value={data.value}
                country={data.country}
                designationRight={data.designationRight}
                gridLogo={data.gridLogo}
              />
            ))}
          </div>

          {/* state and local search tables */}

          <div className={`${Styles.colMd4} ${Styles.pLr12} $ ${Styles.w60}`}>
            <Text
              className={`${Styles.cardHeading} ${"mt30"}`}
              color="darkGray"
              strong="strong3"
            >
              Last Viewed
            </Text>
            <div className={Styles.homeCard}>
              {CardItems.map((data) => (
                <div className="mb12">
                  <ContactCard
                    departmentClass={Styles.armyDepartmentTextMain}
                    imageClass={`${Styles.lstViewedImage} ${"ml20"}`}
                    isGreenBorder={false}
                    istopLacsText={true}
                    isArlingtonText={false}
                    isVirgina={true}
                    src={data.logo}
                    heading={data.heading}
                    paraOne={data.country}
                    paraTwo={data.value}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StateDale;
