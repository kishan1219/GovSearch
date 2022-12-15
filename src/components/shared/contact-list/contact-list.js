import React, { useState } from "react";
import Icon from "../icon";
import Image from "../image";
import Styles from "./contact-list.module.scss";
import Text from "../text";
import CheckBox from "../checkbox/checkbox";
import propTypes from "prop-types";

const ContactList = ({
  isList,
  isGrid,
  imageClick,
  id,
  vcbSecond,
  value,
  country,
  vcb,
  name,
  listSrc,
  isDesignation,
  designation,
  assist,
  expandSrcFirst,
  expandSrcSecond,
  gridLogoSecond,
  designationRight,
  exapndRowRightValue,
}) => {
  const [iconFavorite, setIconFavorite] = useState();
  const [rowTab, setRowTab] = useState(true);
  const [rowExpand, setRowExpand] = useState(false);
  const [checked, setChecked] = useState(false);
  const tabListToggle = () => {
    if (setRowTab(!rowTab)) {
      setRowExpand(false);
    } else if (setRowExpand(!rowExpand)) {
      setRowTab(false);
    }
  };

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };
  // console.log(handleCheck)
  return (
    <div className={`${"flexCenter mB24 pr40"} ${Styles.container}`}>
      {isList && (
        <div className={Styles.chackMain}>
          <CheckBox
            checked={checked}
            className={`${"form-check-input"} ${Styles.tableCheckbox}`}
            id="rowcheck{user.id}"
            onChange={handleCheck}
            variant="grayFill"
          />
        </div>
      )}
      {isGrid && rowExpand && (
        <div className={Styles.chackMain}>
          <CheckBox
            checked={checked}
            className={`${"form-check-input"} ${Styles.tableCheckbox}`}
            id="rowcheck{user.id}"
            onChange={handleCheck}
            variant="grayFill"
          />
        </div>
      )}
      {rowTab && (
        <>
          {isList && (
            <div className={Styles.gridDevide}>
              <div
                className={`${Styles[vcb]} ${
                  Styles.background
                } ${"dFlex alignItemsCenter"}`}
              >
                <div
                  className={`${
                    Styles.officerName
                  } ${"dFlex alignItemsCenter"}`}
                >
                  <Image
                    onClick={imageClick}
                    width={40}
                    height={40}
                    className={`${Styles.contactImage} ${"mr12 ml25 cursor"}`}
                    src={listSrc}
                    alt="logo"
                  />
                  <Text
                    strong="strong6"
                    handleClick={tabListToggle}
                    variant="mlgText"
                    className={`${Styles.officerName} ${"cursor textEllipse"}`}
                  >
                    {name}
                  </Text>
                </div>
                {isDesignation && (
                  <div
                    className={`${
                      Styles.designationMain
                    } ${"dFlex alignItemsCenter justifyContentEnd"}`}
                  >
                    <Text
                      color={"gray"}
                      variant="mlgText"
                      className={`${Styles.designationText} ${"op5 mr17"}`}
                    >
                      {designation}
                    </Text>
                    <Text
                      strong="strong6"
                      variant="mlgText"
                      className={Styles.designationText}
                    >
                      {assist}
                    </Text>
                  </div>
                )}
                <div
                  className={`${
                    Styles.valCountryMain
                  } ${"dFlex alignItemsCenter"}`}
                >
               {id && designation ? "" :   <Text
                    strong="strong6"
                    variant="mlgText"
                    className={`${"textEllipse"} ${Styles.value}`}
                  >
                    {value}
                  </Text>}
                  <Text
                    variant="mlgText"
                    className={`${Styles.country} ${"op5"}`}
                  >
                    {country}
                  </Text>
                </div>
              </div>
            </div>
          )}
          {isGrid && (
            <div className={Styles.Gridcontainer}>
              <div className={Styles.gridMain}>
                <div className={Styles.chackMain}>
                  <CheckBox
                    checked={checked}
                    className={`${"form-check-input"} ${Styles.tableCheckbox}`}
                    id="rowcheck{user.id}"
                    onChange={handleCheck}
                    variant="grayFill"
                  />
                </div>
                <div
                  className={`${Styles[vcb]} ${
                    Styles.background
                  } ${"dFlex alignItemsCenter cursor"}`}
                >
                  <Image
                    onClick={imageClick}
                    width={75}
                    height={75}
                    className={`${Styles.contactImage} ${
                      Styles.gridLogoFirst
                    } ${"mr12 ml20"}`}
                    src={listSrc}
                    alt="logo"
                  />
                  <div
                    className={`${
                      Styles.officerName
                    } ${"dFlex alignItemsCenter"}`}
                  >
                    <Text
                      strong="strong6"
                      handleClick={tabListToggle}
                      variant="mlgText"
                      className={` ${"cursor textEllipse mw190"}`}
                    >
                      {name}
                    </Text>
                    {id && designation ? (
                      ""
                    ) : (
                      <Text
                        strong="strong6"
                        variant="mlgText"
                        className={`${
                          Styles.officeValue
                        } ${"cursor textEllipse mw190"}`}
                      >
                        {value}
                      </Text>
                    )}
                  </div>
                  {isDesignation && (
                    <div
                      className={` ${"dFlex alignItemsCenter justifyContentEnd"}`}
                    >
                      <div
                        className={
                          id && gridLogoSecond
                            ? Styles.designationMain
                            : Styles.gridDesignation
                        }
                      >
                        <Text
                          color={"gray"}
                          variant="mlgText"
                          className={`${Styles.designationText} ${"op5"}`}
                        >
                          {designation}
                        </Text>
                        <Text
                          strong="strong6"
                          variant="mlgText"
                          className={Styles.designationText}
                        >
                          {assist}
                        </Text>
                      </div>
                      {id && gridLogoSecond ? (
                        <Image
                          width={75}
                          height={75}
                          className={`${Styles.gridLogoSecond} ${"mr20"}`}
                          src={gridLogoSecond}
                          alt="logo"
                        />
                      ) : (
                        <div className={`${Styles.valCountryMain}`}>
                          <Text
                            variant="mlgText"
                            className={`${Styles.gridCountry} ${
                              Styles.country
                            } ${"op5"}`}
                          >
                            {country}
                          </Text>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div>
                  {id === iconFavorite ? (
                    <Icon
                      variant={"icon_xllg"}
                      type="star"
                      onClick={() => setIconFavorite(id)}
                    />
                  ) : (
                    <Icon
                      variant={"icon_xllg"}
                      onClick={(e) => setIconFavorite(!iconFavorite)}
                      type={"star"}
                      className={
                        iconFavorite ? Styles.iconYellow : Styles.iconGray
                      }
                    />
                  )}
                </div>
              </div>
              <div className={`${Styles.gridMain} ${Styles.gridSecondMain}`}>
                <div className={Styles.chackMain}>
                  <CheckBox
                    checked={checked}
                    className={`${"form-check-input"} ${Styles.tableCheckbox}`}
                    id="rowcheck{user.id}"
                    onChange={handleCheck}
                    variant="grayFill"
                  />
                </div>
                <div
                  className={`${Styles[vcb]} ${
                    Styles.background
                  } ${"dFlex alignItemsCenter cursor"}`}
                >
                  <Image
                    onClick={imageClick}
                    width={75}
                    height={75}
                    className={`${Styles.contactImage} ${
                      Styles.gridLogoFirst
                    } ${"mr12 ml20"}`}
                    src={listSrc}
                    alt="logo"
                  />
                  <div
                    className={`${
                      Styles.officerName
                    } ${"dFlex alignItemsCenter"}`}
                  >
                    <Text
                      strong="strong6"
                      handleClick={tabListToggle}
                      variant="mlgText"
                      className={` ${"cursor textEllipse"}`}
                    >
                      {name}
                    </Text>
                    <Text
                      strong="strong6"
                      variant="mlgText"
                      className={`${
                        Styles.officeValue
                      } ${"cursor textEllipse"}`}
                    >
                      {value}
                    </Text>
                  </div>
                  {isDesignation && (
                    <div
                      className={` ${"dFlex alignItemsCenter justifyContentEnd"}`}
                    >
                      <div
                        className={
                          id && gridLogoSecond
                            ? Styles.designationMain
                            : Styles.gridDesignation
                        }
                      >
                        <Text
                          color={"gray"}
                          variant="mlgText"
                          className={`${Styles.designationText} ${"op5"}`}
                        >
                          {designation}
                        </Text>
                        <Text
                          strong="strong6"
                          variant="mlgText"
                          className={Styles.designationText}
                        >
                          {assist}
                        </Text>
                      </div>
                      {id && gridLogoSecond ? (
                        <Image
                          width={75}
                          height={75}
                          className={`${Styles.gridLogoSecond} ${"mr20"}`}
                          src={gridLogoSecond}
                          alt="logo"
                        />
                      ) : (
                        <div className={`${Styles.valCountryMain}`}>
                          <Text
                            variant="mlgText"
                            className={`${Styles.gridCountry} ${
                              Styles.country
                            } ${"op5"}`}
                          >
                            {country}
                          </Text>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div>
                  {id === iconFavorite ? (
                    <Icon
                      variant={"icon_xllg"}
                      type="star"
                      onClick={() => setIconFavorite(id)}
                    />
                  ) : (
                    <Icon
                      variant={"icon_xllg"}
                      onClick={(e) => setIconFavorite(!iconFavorite)}
                      type={"star"}
                      className={
                        iconFavorite ? Styles.iconYellow : Styles.iconGray
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
      {rowExpand && (
        <div
          className={`${Styles[vcbSecond]} ${Styles.background} ${
            isGrid && rowExpand
              ? Styles.rowExpandCollapse
              : Styles.backgroundCollapse
          }`}
        >
          <div className="dFlex">
            <Image
              width={75}
              height={75}
              className={`${Styles.contactImage} ${"mr5 ml25"}`}
              src={expandSrcFirst}
              alt="logo"
            />
            <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
              <Text
                handleClick={tabListToggle}
                strong="strong6"
                variant="mlgText"
                className={`${"cursor textEllipse"} ${Styles.size}`}
              >
                {name}
              </Text>
              {id && designation ? (
                ""
              ) : (
                <Text variant="mlgText" className={Styles.size}>
                  {value}
                </Text>
              )}
            </div>
          </div>
          <div className={`${Styles.centerExpand} ${"dFlex"}`}>
            {id && designation ? (
              <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                <Text
                  className={`${"op5 textEllipse"} ${Styles.size} ${
                    Styles.expandDesignation
                  }`}
                  variant="mlgText"
                >
                  {designation}
                </Text>
                <div className={"textRight"}>
                  <Icon type="envelope" variant="primary" size="icon_xl" />
                  <Icon
                    className={"ml10 mr10"}
                    type="phone"
                    variant="primary"
                    size="icon_xl"
                  />
                  <Icon type="linkedIn" variant="primary" size="icon_xl" />
                </div>
              </div>
            ) : (
              <div className={Styles.designationleftText} />
            )}
            <Image
              width={75}
              height={75}
              className={`${Styles.expandImageTwo} ${"mr12"}`}
              src={expandSrcSecond}
              alt="logo"
            />
            <div className={`${Styles.bgCollapseText} ${"dGrid pt5"}`}>
              <Text
                variant="mlgText"
                strong="strong6"
                className={
                  id && exapndRowRightValue
                    ? "textEllipse"
                    : Styles.designationRightText
                }
              >
                {designationRight}
              </Text>
              <Text variant="mlgText" className={Styles.size}>
                {exapndRowRightValue}
              </Text>
            </div>
          </div>
          <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
            <Text variant="mlgText" className={Styles.country}>
              {country}
            </Text>
            <div className={`${Styles.contactRightIconMain} ${"textRight ml25"}`}>
              <Icon type="linkedIn" variant="primary" size="icon_xl" />
              <Icon
                className={"ml10 mr10"}
                type="web"
                variant="primary"
                size="icon_xl"
              />
              <Icon type="phone" variant="primary" size="icon_xl" />
            </div>
          </div>
        </div>
      )}
      {isList && (
        <div>
          {id === iconFavorite ? (
            <Icon
              variant={"icon_xllg"}
              type="star"
              onClick={() => setIconFavorite(id)}
            />
          ) : (
            <Icon
              variant={"icon_xllg"}
              onClick={(e) => setIconFavorite(!iconFavorite)}
              type={"star"}
              className={iconFavorite ? Styles.iconYellow : Styles.iconGray}
            />
          )}
        </div>
      )}
      {isGrid && rowExpand && (
        <div>
          {id === iconFavorite ? (
            <Icon
              variant={"icon_xllg"}
              type="star"
              onClick={() => setIconFavorite(id)}
            />
          ) : (
            <Icon
              variant={"icon_xllg"}
              onClick={(e) => setIconFavorite(!iconFavorite)}
              type={"star"}
              className={iconFavorite ? Styles.iconYellow : Styles.iconGray}
            />
          )}
        </div>
      )}
    </div>
  );
};
ContactList.defaultProps = {
  isDesignation: false,
  isGrid: false,
  isList: true,
};
ContactList.protoType = {
  isDesignation: propTypes.bool,
  id: propTypes.string,
  vcbSecond: propTypes.string,
  value: propTypes.string,
  country: propTypes.string,
  vcb: propTypes.string,
  name: propTypes.string,
  listSrc: propTypes.string,
  handleClick: propTypes.func,
  imageClick: propTypes.func,
  exapndRowRightValue: propTypes.string,
};
export default ContactList;
