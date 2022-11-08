import React, { useState } from "react";
import Styles from "./header.module.scss";
import Tooltip from "@mui/material/Tooltip";
import propTypes from "prop-types";
import { Text, Image, Button, Icon } from "../../shared";
import SearchBar from "../searchbar/searchbar";

const Header = ({
  size,
  variant,
  className,
  isTechnomileLogo,
  isGovSearchLogo,
  isSearch,
  isRightNav,
  openMenuBar,
  isFederal,
  isAdmin,
  isProfessionalEdition,
  isProfessional,
  isStateLocal,
  isGovSearchProfessional,
}) => {
  const [showNotification, SetShowNotification] = useState(false);
  const [showBC, setShowBc] = useState(false);

  return (
    <div
      className={`${Styles.header}  ${Styles[size]} ${Styles[variant]}  ${className}`}
    >
      <div
        className={`${Styles.headerContent} ${Styles.alignBetween} ${Styles.flexWrap} ${Styles.alignItemsCenter}`}
      >
        <div className={Styles.headerLeft}>
          {isGovSearchLogo && (
            <Text strong="strong7" className={Styles.headerHeading}>
              GovSearch
            </Text>
          )}
          {isTechnomileLogo && (
            <Image
              src="assets/images/logo.png"
              alt="logo"
              className={Styles.headerLogo}
            />
          )}
        </div>
        {isSearch && <SearchBar searchClassName={Styles.searchContainer} openMenuBar={openMenuBar} />}
        <div className={Styles.headerRight}>
          {isFederal && (
            <Tooltip title="Currently, Click event is not developed">
              <div>
                <Text className={Styles.headerRightH}>Federal</Text>
              </div>
            </Tooltip>
          )}
          {isAdmin && (
            <Text className={Styles.headerRightH}>TechnoMile Admin</Text>
          )}
          {isProfessionalEdition && (
            <Tooltip title="Currently, Click event is not developed">
              <div>
                <Text className={Styles.headerRightH}>
                  GovSearch Professional Edition
                </Text>
              </div>
            </Tooltip>
          )}
          {isProfessional && (
            <Text className={Styles.headerRightH}>Professional</Text>
          )}
          {isGovSearchProfessional && (
            <Text className={Styles.headerRightH}>
              GovSearch Professional Edition
            </Text>
          )}
          {isStateLocal && (
            <Text className={Styles.headerRightH}>
              State, Local, and Municipal
            </Text>
          )}
          {isRightNav && (
            <div className={Styles.RightNavMain}>
              <div className={Styles.headerNotifications}>
                <Icon
                  type={"notification"}
                  size="icon_large"
                  variant="gray"
                  className={Styles.headerNotification}
                  onClick={() => {
                    SetShowNotification(!showNotification);
                    setShowBc(false);
                  }}
                />
                <div className={Styles.notificationsGreenTick}></div>
              </div>
              <div className={Styles.headerRightBC}>
                <Text
                  className={`${Styles.headerRightBC} ${showBC ? Styles.dullBc : null
                    }`}
                  handleClick={() => {
                    setShowBc(!showBC);
                    SetShowNotification(false);
                  }}
                >
                  BC
                </Text>
              </div>
              <Tooltip title="Currently, Click event is not developed">
                <div>
                  <Icon
                    variant={"gray"}
                    size="icon_xlarge"
                    type={"menu"}
                    className={Styles.headerMenu}
                  />
                </div>
              </Tooltip>
            </div>
          )}
        </div>
      </div>
      {/* show/hide Conditions */}
      {showNotification && (
        <div className={Styles.notificationContent}>
          <div className={Styles.notificationText}>
            <Text className={Styles.notificationRecent}>Recent Alerts</Text>
            <Text className={Styles.notificationAlert1}>
              <span className={Styles.notificationAlertDark}>Alert:</span>{" "}
              GovSearch will be down for scheduled maintenence on April 20th
              2022 at 3:44 pm ET till April 22nd at 1 am ET...
            </Text>
            <Text className={Styles.notificationMiddleLine}></Text>
            <Text
              className={`${Styles.notificationAlert2} ${Styles.notificationAlert1}`}
            >
              <span className={Styles.notificationAlertDark}>Alert:</span>{" "}
              GovSearch will be down for scheduled maintenence on April 20th
              2022 at 3:44 pm ET till April 22nd at 1 am ET...
            </Text>
            <Tooltip title="Currently, Click event is not developed">
              <div>
                <Button
                  variant={"solidPrimary"}
                  className={Styles.notificationAllBtn}
                >
                  All Alerts
                </Button>
              </div>
            </Tooltip>
          </div>
        </div>
      )}
      {showBC && (
        <div className={Styles.notificationContent}>
          <div
            className={`${Styles.notificationBC} ${Styles.notificationText} `}
          >
            <Text
              strong="strong7"
              className={`${Styles.bcList} ${Styles.bcListm15}`}
            >
              Account
            </Text>
            <Text
              strong="strong7"
              className={`${Styles.bcList} ${Styles.bcListm15}`}
            >
              User Management
            </Text>
            <Text
              strong="strong7"
              className={`${Styles.bcList} ${Styles.bcListm15}`}
            >
              Search History
            </Text>
            <Text
              strong="strong7"
              className={`${Styles.bcList} ${Styles.bcListm15}`}
            >
              Notification
            </Text>
            <Text
              strong="strong7"
              className={`${Styles.bcList} ${Styles.bcListm15}`}
            >
              Help
            </Text>
            <Text
              strong="strong7"
              className={`${Styles.bcList} ${Styles.bcListm15}`}
            >
              Log Out
            </Text>
          </div>
        </div>
      )}
    </div>
  );
};
Header.defaultProps = {
  isSearch: true,
  isTechnomileLogo: false,
  isGovSearchLogo: true,
  isRightNav: true,
  isFederal: true,
  isAdmin: false,
  isProfessionalEdition: false,
  isProfessional: false,
  isStateLocal: false,
  isGovSearchProfessional: false,
};

Header.protoType = {
  isSearch: propTypes.bool,
  isTechnomileLogo: propTypes.bool,
  isGovSearchLogo: propTypes.bool,
  isRightNav: propTypes.bool,
  isFederal: propTypes.bool,
  isAdmin: propTypes.bool,
  isProfessionalEdition: propTypes.bool,
  isProfessional: propTypes.bool,
  isStateLocal: propTypes.bool,
  isGovSearchProfessional: propTypes.bool,
  variant: propTypes.string,
  size: propTypes.string,
  className: propTypes.any,
};
export default Header;
