import React from "react";
import propTypes from "prop-types";
import Styles from "./news-card.module.scss";
import Image from "../image";
import Text from "../text";
import Card from "../card/card";
const NewsCard = ({
  src,
  textFirst,
  textSecond,
  textThird,
  isFisrtNewsCard,
  isSecondNewsCard,
}) => {
  return (
    <div className={Styles.newContainer}>
      {isFisrtNewsCard && (
        <div className={Styles.wrapper}>
          {/* <Text className={"mB14 textCenter"} variant="xbigText" color="darkGray" strong="strong3">News</Text> */}

          <div className={Styles.newsCardMain}>
            <Image className={Styles.cardImage} src={src} alt="image" />
            <Text
              family="roboto"
              color={"black"}
              variant={"xxxlText"}
              className={Styles.textPrimary}
              strong="strong6"
            >
              {textFirst}
            </Text>
          </div>
          <Text
            color={"black"}
            variant={"smText"}
            className={Styles.textSecond}
          >
            {textSecond}
          </Text>
        </div>
      )}
      {isSecondNewsCard && (
        <Card className={Styles.newCardBox}>
          <div className={Styles.secondMain}>
            <div className={Styles.newsCardMain}>
              <Image className={Styles.cardImage} src={src} alt="image" />
              <div className={Styles.cardText}>
                <Text
                  family="roboto"
                  color={"black"}
                  variant={"xllgText"}
                  className={Styles.textPrimary}
                  strong="strong6"
                >
                  {textFirst}
                </Text>
                <Text
                  family="roboto"
                  color={"black"}
                  variant={"smText"}
                  className={Styles.childText}
                >
                  {textThird}
                </Text>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
NewsCard.defaultProps = {
  isFisrtNewsCard: true,
  isSecondNewsCard: false,
};

NewsCard.propTypes = {
  src: propTypes.string,
  textFirst: propTypes.string,
  textSecond: propTypes.string,
};

export default NewsCard;
