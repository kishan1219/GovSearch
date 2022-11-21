import React from "react";
import Styles from "./card.module.scss";
import PropTypes from "prop-types";

/**
 * Render NotificationList
 * @param {node} children
 
 * @returns node
 */
const Card = ({
  children,
  className,

}) => {
  return (
    <div className={`${Styles.card} ${[className]}`}>
     <div> {children}</div>
    </div>
  )
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};
export default Card;