import React, { useEffect, useState } from "react";
import Icon from "../icon";
import Image from '../image';
import Styles from './contact-list.module.scss';
import Text from '../text'
import CheckBox from "../checkbox/checkbox";
import propTypes from "prop-types";

const ContactList = ({ id, vcbSecond, value, country, vcb, name, listSrc,isDesignation,designation,assist }) => {
    const [iconFavorite, setIconFavorite] = useState();
    const [rowExpand, setRowExpand] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checkboxes, setCheckboxes] = useState(false);

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };
    console.log(handleCheck)
    const handleCheckbox = (index) => (event) => {

        checkboxes[index] = event.target.checked;
        setCheckboxes(checkboxes);
    };
    useEffect(() => {
        if (checked) {
            setCheckboxes(new Array(checkboxes.length).fill(true));
        } else {
            setCheckboxes(new Array(checkboxes.length).fill(false));
        }
    }, [checked]);
    return (
        <div className={Styles.container}>
            <div className={Styles.chackMain}>
                <CheckBox
                    // checked={checkboxes[index]
                    // }
                    className={`${"form-check-input"} ${Styles.tableCheckbox}`}
                    id="rowcheck{user.id}"
                    // onChange={handleCheckbox(index)}
                    variant="grayFill"
                />
            </div>
            {!rowExpand &&
                <div className={`${Styles[vcb]} ${Styles.background} ${"dFlex alignItemsCenter"}`}>
                    <div className="dFlex alignItemsCenter">
                        <Image width={40} height={40} className={"mr12"} src={listSrc} alt="logo" />
                        <Text strong="strong6" handleClick={() => setRowExpand(!rowExpand)} variant="mlgText" className={`${Styles.size} ${"cursor"}`}>{name} </Text>
                    </div>
                    {isDesignation &&    <div className="dFlex alignItemsCenter">
                        <Text color={"gray"} variant="mlgText" className={`${Styles.designationText} ${"op5 mr17"}`}>{designation}</Text>
                        <Text strong="strong6" variant="mlgText" >{assist}</Text>
                    </div>}
                    <div className="dFlex alignItemsCenter">
                        <Text strong="strong6" variant="mlgText" className={"mr20"}>{value}</Text>
                        <Text variant="mlgText" className={"op5"}>{country}</Text>
                    </div>
                </div>}
            {rowExpand && (
                <div className={`${Styles[vcbSecond]} ${Styles.background} ${Styles.backgroundCollapse}`}>
                    <div className="dFlex">
                        <Image width={75} height={75} className={"mr5"} src="assets/images/ArmySeal.png" alt="logo" />
                        <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                            <Text handleClick={() => setRowExpand(!rowExpand)} variant="mlgText" className={Styles.size}>Department of the Army </Text>
                            <Text variant="mlgText" className={Styles.size}>100,000</Text>
                        </div>
                    </div>
                    <div className="dFlex">
                        <Image width={75} height={75} className={"mr12"} src="assets/images/ContactsandSeals.png" alt="logo" />
                        <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                            <Text variant="mlgText" className={Styles.size}>Department of Defense</Text>
                            <Text variant="mlgText" className={Styles.size}>1,000,000</Text>
                        </div>
                    </div>
                    <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                        <Text variant="mlgText">{country}</Text>
                        <div>
                            <Icon type="linkedIn" variant="primary" size="icon_xl" />
                            <Icon className={"ml10 mr10"} type="web" variant="primary" size="icon_xl" />
                            <Icon type="phone" variant="primary" size="icon_xl" />
                        </div>
                    </div>
                </div>)}
            <div>
                {id === iconFavorite ?
                    <Icon variant={"icon_xllg"} type="star" onClick={() => setIconFavorite(id)} />
                    : <Icon variant={"icon_xllg"} onClick={(e) => setIconFavorite(!iconFavorite)} type={"star"} className={iconFavorite ? Styles.iconYellow : Styles.iconGray} />}
            </div>

        </div>
    );
}
export default ContactList
ContactList.defaultProps = {
    isDesignation: false,
}
ContactList.protoType = {
    isDesignation: propTypes.bool,
    id: propTypes.string,
    vcbSecond: propTypes.string,
    value: propTypes.string,
    country: propTypes.string,
    vcb: propTypes.string,
    name: propTypes.string,
    listSrc: propTypes.string,
}