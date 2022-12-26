import React from "react";
import Styles from "./card-items.module.scss";
import PropTypes from "prop-types";
import { Text, Icon } from "../../../components/shared/index";

const CardItems = ({
  personposition,
  personname,
  year,
  updates,
  companyname,
  position,
  strongFirst,
  strongSecond,
  strongThird,
  isContactText,
  isAssetsText,
  isChildText,
  isPosition,
  isPositionFirst,
  grayFirstRow,
  graySecondRow,
  grayThirdRow,
}) => {
  return (
    <div className={Styles.cardContainer}>
      {isContactText && (
        <div className={Styles.contentBox}>
          <Text
            className={Styles.textFirst}
            variant="smText"
            color={grayFirstRow}
            strong={strongFirst}
          >
            {updates}
          </Text>
          <Text
            className={Styles.textSecond}
            variant="smText"
            color={graySecondRow}
            strong={strongSecond}
          >
            {companyname}
          </Text>
          <Text
            className={Styles.textThird}
            variant="smText"
            color={grayThirdRow}
            strong={strongThird}
          >
            {position}
          </Text>
        </div>
      )}
      {isAssetsText && (
        <div className={Styles.contentBox}>
          <Text
            className={Styles.assetsFirst}
            variant="smText"
            color={grayFirstRow}
            strong={strongFirst}
          >
            {updates}
          </Text>
          <Text
            className={Styles.assetsSecond}
            variant="smText"
            color={graySecondRow}
            strong={strongSecond}
          >
            {companyname}
          </Text>
          <Text
            className={Styles.assetsThird}
            variant="smText"
            color={grayThirdRow}
            strong={strongThird}
          >
            {position}
          </Text>
        </div>
      )}

      {isChildText && (
        <div className={Styles.contentBox}>
          <Text
            className={Styles.childFirst}
            variant="smText"
            color={grayFirstRow}
            strong={strongFirst}
          >
            {updates}
          </Text>
          <Text
            className={Styles.childSecond}
            variant="smText"
            color={graySecondRow}
            strong={strongSecond}
          >
            {companyname}
          </Text>
          <Text
            className={Styles.childThird}
            variant="smText"
            color={graySecondRow}
            strong={strongThird}
          >
            {position}
          </Text>
        </div>
      )}
      {isPosition && (
        <div className={Styles.contentBox}>
          <Text
            className={Styles.accountfirst}
            variant="lgText"
            color={grayFirstRow}
            strong={strongFirst}
          >
            {year}
          </Text>
          <Text
            className={Styles.accountSec}
            variant="lgText"
            color={graySecondRow}
            strong={strongSecond}
          >
            {personname}
          </Text>

          <div className={Styles.accountThird}>
            <Icon
              className={Styles.listIcon}
              type="linkedIn"
              variant="primary"
              size="icon_medium"
            />
            <Icon
              className={Styles.listIcon}
              type={"envelope"}
              variant="primary"
              size="icon_medium"
            />
            <Icon
              className={Styles.listIcon}
              type={"phone"}
              variant="primary"
              size="icon_medium"
            />
            <Icon
              className={Styles.listIcon}
              type={"userinfo"}
              variant="primary"
              size="icon_medium"
            />
          </div>
        </div>
      )}
      {isPositionFirst && (
        <div className={Styles.contentBox}>
          <Text
            className={Styles.posTextOne}
            variant="smText"
            color={grayFirstRow}
            strong={strongFirst}
          >
            {personposition}
          </Text>
          <Text
            className={Styles.posTextSec}
            variant="smText"
            color={graySecondRow}
            strong={strongSecond}
          >
            {personname}
          </Text>
          <Text
            className={Styles.posTextThd}
            variant="smText"
            color={grayThirdRow}
            strong={strongThird}
          >
            {year}
          </Text>
        </div>
      )}
    </div>
  );
};
CardItems.defaultProps = {
  isContactText: true,
  isAssetsText: false,
  isChildText: false,
  isPosition: false,
  isPositionFirst: false,
};
CardItems.propTypes = {
  updates: PropTypes.bool,
  companyname: PropTypes.bool,
  position: PropTypes.bool,
  grayFirstRow: PropTypes.string,
  graySecondRow: PropTypes.string,
  grayThirdRow: PropTypes.string,
  strongFirst: PropTypes.string,
  strongSecond: PropTypes.string,
  strongThird: PropTypes.string,
};

export default CardItems;
