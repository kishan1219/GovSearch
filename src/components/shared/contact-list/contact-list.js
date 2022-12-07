import React, { useEffect, useState } from "react";
import Icon from "../icon";
import Image from '../image';
import Styles from './contact-list.module.scss';
import Text from '../text'
import CheckBox from "../checkbox/checkbox";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ContactList = ({ id, vcbSecond, value, country, vcb, name, listSrc, isDesignation, designation, assist, expandSrcFirst, isLeftContactDetail }) => {
    const [iconFavorite, setIconFavorite] = useState();
    const [rowExpand, setRowExpand] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checkboxes, setCheckboxes] = useState(false);
    const navigate = useNavigate();
    const gotoResultDetail = () => {
        navigate("/result-details")
    }
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
        <div className={` ${Styles.Gridcontainer}`}>
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
            <div className={Styles.gridDevide}>
                <div onClick={gotoResultDetail} className={`${Styles[vcb]} ${Styles.background} ${"dFlex alignItemsCenter cursor"}`}>
                        <Image width={40} height={40} className={`${Styles.contactImage} ${"mr12"}`} src={listSrc} alt="logo" />
                    <div className={`${Styles.officerName} ${"dFlex alignItemsCenter"}`}>
                        <Text strong="strong6" handleClick={() => setRowExpand(!rowExpand)} variant="mlgText" className={`${Styles.officerName} ${"cursor"}`}>{name} </Text>
                        <Text strong="strong6" variant="mlgText" className={`${Styles.officerName} ${"cursor"}`}>{value} </Text>
                    </div>
                    {isDesignation && <div className={`${Styles.designationMain} ${"dFlex alignItemsCenter justifyContentEnd"}`}>
                        <Text color={"gray"} variant="mlgText" className={`${Styles.designationText} ${"op5 mr17"}`}>{designation}</Text>
                        <Text strong="strong6" variant="mlgText" className={Styles.assistText} >{assist}</Text>
                    </div>}
                    <div className={`${Styles.valCountryMain} ${"dFlex alignItemsCenter"}`}>
                        <Text strong="strong6" variant="mlgText" className={`${Styles.size} ${Styles.value} ${"mr20"}`}>{value}</Text>
                        <Text variant="mlgText" className={`${Styles.country} ${"op5"}`}>{country}</Text>
                    </div>
                </div>
                <div onClick={gotoResultDetail} className={`${Styles[vcb]} ${Styles.background} ${"dFlex alignItemsCenter cursor"}`}>
                        <Image width={40} height={40} className={`${Styles.contactImage} ${"mr12"}`} src={listSrc} alt="logo" />
                    <div className={`${Styles.officerName} ${"dFlex alignItemsCenter"}`}>
                        <Text strong="strong6" handleClick={() => setRowExpand(!rowExpand)} variant="mlgText" className={`${Styles.officerName} ${"cursor"}`}>{name} </Text>
                        <Text strong="strong6" variant="mlgText" className={`${Styles.officerName} ${"cursor"}`}>{value} </Text>
                    </div>
                    {isDesignation && <div className={`${Styles.designationMain} ${"dFlex alignItemsCenter justifyContentEnd"}`}>
                        <Text color={"gray"} variant="mlgText" className={`${Styles.designationText} ${"op5 mr17"}`}>{designation}</Text>
                        <Text strong="strong6" variant="mlgText" className={Styles.assistText} >{assist}</Text>
                    </div>}
                    <div className={`${Styles.valCountryMain} ${"dFlex alignItemsCenter"}`}>
                        <Text strong="strong6" variant="mlgText" className={`${Styles.size} ${Styles.value} ${"mr20"}`}>{value}</Text>
                        <Text variant="mlgText" className={`${Styles.country} ${"op5"}`}>{country}</Text>
                    </div>
                </div>
            </div>
                }
            {rowExpand && (
                <div className={`${Styles[vcbSecond]} ${Styles.background} ${Styles.backgroundCollapse}`}>
                    <div className="dFlex">
                        <Image width={75} height={75} className={`${Styles.contactImage} ${"mr5"}`} src={expandSrcFirst} alt="logo" />
                        <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                            <Text handleClick={() => setRowExpand(!rowExpand)} variant="mlgText" className={`${"cursor"} ${Styles.size}`}>{name}</Text>
                            <Text variant="mlgText" className={Styles.size}>100,000</Text>
                        </div>
                    </div>
                    <div className="dFlex">
                        {isLeftContactDetail && <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                            <Text className={`${"op5"} ${Styles.size}`} variant="mlgText">{designation}</Text>
                            <div className={Styles.contactIconLeftMain}>
                                <Icon type="envelope" variant="primary" size="icon_xl" />
                                <Icon className={"ml10 mr10"} type="phone" variant="primary" size="icon_xl" />
                                <Icon type="linkedIn" variant="primary" size="icon_xl" />
                            </div>
                        </div>}
                        <Image width={75} height={75} className={`${Styles.expandImageTwo} ${"mr12"}`} src="assets/images/ContactsandSeals.png" alt="logo" />
                        <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                            <Text variant="mlgText" className={Styles.size}>Madison County,</Text>
                            <Text variant="mlgText" className={Styles.size}>AlBama</Text>
                        </div>
                    </div>
                    <div className={`${Styles.bgCollapseText} ${"dGrid"}`}>
                        <Text variant="mlgText">{country}</Text>
                        <div className={`${Styles.contactRightIconMain} ${"ml25"}`}>
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
    isLeftContactDetail: false,
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