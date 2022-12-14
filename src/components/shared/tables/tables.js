import React, { useEffect, useState } from "react";
import Icon from "../icon";
import Image from '../image';
import Styles from './tables.module.scss';
import Text from '../text'
import CheckBox from "../checkbox/checkbox";
import { TableBody, TableContainer, Table, TableRow, TableCell, } from "@mui/material";
import { DepartmentArmyData, AssistantSecretaryData, markowitzData, CioData } from '../../../pages/search-result/search-data';
import propTypes from "prop-types";

export default function Tables({ isDepartmentArmyData, isAssistantSecretaryData, ismarkowitzData, isCioData, isDesignation }) {
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
        <TableContainer className={Styles.container}>
            <div className={Styles.scrollBar}>
                <Table className={Styles.table}>
                    <TableBody>
                        {DepartmentArmyData.map((user, index) => (
                            isDepartmentArmyData && <TableRow key={user.id} className={user.selected ? "selected" : ""}>
                                <TableCell scope="row">
                                    <CheckBox
                                        checked={checkboxes[index]}
                                        className={`${"form-check-input"} ${Styles.tableCheckbox}`}
                                        id="rowcheck{user.id}"
                                        onChange={handleCheckbox(index)}
                                        variant="grayFill"
                                    />
                                </TableCell>
                                {!rowExpand && <TableCell className={`${Styles[user.vcb]} ${Styles.background}`}>
                                    <div className="dFlex alignItemsCenter">
                                        <Image className={"mr12"} src="assets/images/OfficialArmySeal.png" alt="logo" />
                                        <Text handleClick={() => setRowExpand(!rowExpand)} variant="mlgText" className={`${Styles.size} ${"cursor"}`}>{user.name}</Text>
                                    </div>
                                    <div className="dFlex alignItemsCenter">
                                        <Text variant="mlgText" className={Styles.size}>{user.value}</Text>
                                        <Text variant="mlgText" className={Styles.phone}>{user.country}</Text>
                                    </div>
                                </TableCell>}
                                {rowExpand && (
                                    <TableCell className={`${Styles[user.vcbSecond]} ${Styles.background} ${Styles.backgroundCollapse}`}>
                                        <div className="dFlex">
                                            <Image className={"mr5"} src="assets/images/ArmySeal.png" width={75} height={75} alt="logo" />
                                            <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                                                <Text handleClick={() => setRowExpand(!rowExpand)} variant="mlgText" className={`${Styles.size} ${"cursor"}`}>Department of the Army </Text>
                                                <Text variant="mlgText" className={Styles.size}>100,000</Text>
                                            </div>
                                        </div>
                                        <div className="dFlex">
                                            <Image className={"mr12"} src="assets/images/ContactsandSeals.png" alt="logo" />
                                            <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                                                <Text variant="mlgText" className={Styles.size}>Department of Defense</Text>
                                                <Text variant="mlgText" className={Styles.size}>1,000,000</Text>
                                            </div>
                                        </div>
                                        <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                                            <Text variant="mlgText" className={Styles.phone}>{user.country}</Text>
                                            <div className="ml25">
                                                <Icon type="linkedIn" variant="primary" size="icon_xl" />
                                                <Icon className={"ml10 mr10"} type="web" variant="primary" size="icon_xl" />
                                                <Icon type="phone" variant="primary" size="icon_xl" />
                                            </div>
                                        </div>
                                    </TableCell>)}
                                <TableCell>
                                    {user.id === iconFavorite ?
                                        <Icon type="star" onClick={() => setIconFavorite(user.id)} />
                                        : <Icon variant={"icon_xllg"} onClick={(e) => setIconFavorite(!iconFavorite)} type={"star"} className={iconFavorite ? Styles.iconYellow : Styles.iconGray} />}</TableCell>
                            </TableRow>
                        ))}
                        {AssistantSecretaryData.map((user, index) => (
                            isAssistantSecretaryData && <TableRow key={user.id} className={user.selected ? "selected" : ""}>
                                <TableCell scope="row">
                                    <CheckBox
                                        checked={checkboxes[index]}
                                        className={`${"form-check-input"} ${Styles.tableCheckbox}`}
                                        id="rowcheck{user.id}"
                                        onChange={handleCheckbox(index)}
                                        variant="grayFill"
                                    />
                                </TableCell>
                                {!rowExpand && <TableCell className={`${Styles[user.vcb]} ${Styles.background}`}>
                                    <div className="dFlex alignItemsCenter">
                                        <Image className={"mr12"} src="assets/images/OfficialArmySeal.png" alt="logo" />
                                        <Text handleClick={() => setRowExpand(!rowExpand)} variant="mlgText" className={`${Styles.size} ${"cursor"}`}>{user.name}</Text>
                                    </div>
                                    <div className="dFlex alignItemsCenter">
                                        <Text variant="mlgText" className={Styles.size}>{user.value}</Text>
                                        <Text variant="mlgText" className={Styles.phone}>{user.country}</Text>
                                    </div>
                                </TableCell>}
                                {rowExpand && (
                                    <TableCell className={`${Styles[user.vcbSecond]} ${Styles.background} ${Styles.backgroundCollapse}`}>
                                        <div className="dFlex">
                                            <Image className={"mr5"} src="assets/images/ArmySeal.png" width={75} height={75} alt="logo" />
                                            <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                                                <Text handleClick={() => setRowExpand(!rowExpand)} variant="mlgText" className={`${Styles.size} ${"cursor"}`}>Department of the Army </Text>
                                                <Text variant="mlgText" className={Styles.size}>100,000</Text>
                                            </div>
                                        </div>
                                        <div className="dFlex">
                                            <Image className={"mr12"} src="assets/images/ContactsandSeals.png" alt="logo" />
                                            <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                                                <Text variant="mlgText" className={Styles.size}>Department of Defense</Text>
                                                <Text variant="mlgText" className={Styles.size}>1,000,000</Text>
                                            </div>
                                        </div>
                                        <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                                            <Text variant="mlgText" className={Styles.phone}>{user.country}</Text>
                                            <div className="ml25">
                                                <Icon type="linkedIn" variant="primary" size="icon_xl" />
                                                <Icon className={"ml10 mr10"} type="web" variant="primary" size="icon_xl" />
                                                <Icon type="phone" variant="primary" size="icon_xl" />
                                            </div>
                                        </div>
                                    </TableCell>)}
                                <TableCell>
                                    {user.id === iconFavorite ?
                                        <Icon type="star" onClick={() => setIconFavorite(user.id)} />
                                        : <Icon variant={"icon_xllg"} onClick={(e) => setIconFavorite(!iconFavorite)} type={"star"} className={iconFavorite ? Styles.iconYellow : Styles.iconGray} />}</TableCell>
                            </TableRow>
                        ))}
                        {markowitzData.map((user, index) => (
                            ismarkowitzData && <TableRow key={user.id} className={user.selected ? "selected" : ""}>
                                <TableCell scope="row">
                                    <CheckBox
                                        checked={checkboxes[index]}
                                        className={`${"form-check-input"} ${Styles.tableCheckbox}`}
                                        id="rowcheck{user.id}"
                                        onChange={handleCheckbox(index)}
                                        variant="grayFill"
                                    />
                                </TableCell>
                                {!rowExpand && <TableCell className={`${Styles[user.vcb]} ${Styles.background}`}>
                                    <div className="dFlex alignItemsCenter">
                                        <Image className={"mr12"} src="assets/images/OfficialArmySeal.png" alt="logo" />
                                        <Text handleClick={() => setRowExpand(!rowExpand)} variant="mlgText" className={`${Styles.size} ${"cursor"}`}>{user.name}</Text>
                                    </div>
                                    {isDesignation && <div className="dFlex alignItemsCenter">
                                        <Text color={"gray"} variant="mlgText" className={`${Styles.designationText} ${"op5 mr17"}`}>{user.designation}</Text>
                                        <Text strong="strong6" variant="mlgText" className={Styles.designationText} >{user.assist}</Text>
                                    </div>}
                                    <div className="dFlex alignItemsCenter">
                                        <Text variant="mlgText" className={Styles.size}>{user.value}</Text>
                                        <Text variant="mlgText" className={Styles.phone}>{user.country}</Text>
                                    </div>
                                </TableCell>}
                                {rowExpand && (
                                    <TableCell className={`${Styles[user.vcbSecond]} ${Styles.background} ${Styles.backgroundCollapse}`}>
                                        <div className="dFlex">
                                            <Image className={"mr5"} src="assets/images/ArmySeal.png" width={75} height={75} alt="logo" />
                                            <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                                                <Text handleClick={() => setRowExpand(!rowExpand)} variant="mlgText" className={`${Styles.size} ${"cursor"} `}>Department of the Army </Text>
                                                <Text variant="mlgText" className={Styles.size}>100,000</Text>
                                            </div>
                                        </div>
                                        <div className="dFlex">
                                            <Image className={"mr12"} src="assets/images/ContactsandSeals.png" alt="logo" />
                                            <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                                                <Text variant="mlgText" className={Styles.size}>Department of Defense</Text>
                                                <Text variant="mlgText" className={Styles.size}>1,000,000</Text>
                                            </div>
                                        </div>
                                        <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                                            <Text variant="mlgText" className={Styles.phone}>{user.country}</Text>
                                            <div className="ml25">
                                                <Icon type="linkedIn" variant="primary" size="icon_xl" />
                                                <Icon className={"ml10 mr10"} type="web" variant="primary" size="icon_xl" />
                                                <Icon type="phone" variant="primary" size="icon_xl" />
                                            </div>
                                        </div>
                                    </TableCell>)}
                                <TableCell>
                                    {user.id === iconFavorite ?
                                        <Icon type="star" onClick={() => setIconFavorite(user.id)} />
                                        : <Icon variant={"icon_xllg"} onClick={(e) => setIconFavorite(!iconFavorite)} type={"star"} className={iconFavorite ? Styles.iconYellow : Styles.iconGray} />}</TableCell>
                            </TableRow>
                        ))}
                        {CioData.map((user, index) => (
                            isCioData && <TableRow key={user.id} className={user.selected ? "selected" : ""}>
                                <TableCell scope="row">
                                    <CheckBox
                                        checked={checkboxes[index]}
                                        className={`${"form-check-input"} ${Styles.tableCheckbox}`}
                                        id="rowcheck{user.id}"
                                        onChange={handleCheckbox(index)}
                                        variant="grayFill"
                                    />
                                </TableCell>
                                {!rowExpand && <TableCell className={`${Styles[user.vcb]} ${Styles.background}`}>
                                    <div className={`${Styles.officerName} ${"dFlex alignItemsCenter"}`}>
                                        <Image className={"mr12"} src="assets/images/OfficialArmySeal.png" alt="logo" />
                                        <Text handleClick={() => setRowExpand(!rowExpand)} variant="mlgText" className={`${Styles.size}  ${"cursor"}`}>{user.name}</Text>
                                    </div>
                                    {isDesignation && <div className={`${Styles.designationMain} ${"dFlex alignItemsCenter justifyContentEnd"}`}>
                                        <Text color={"gray"} variant="mlgText" className={`${Styles.designationText} ${Styles.ass} ${"op5 mr17"}`}>{user.designation}</Text>
                                        <Text strong="strong6" variant="mlgText" className={Styles.assistText} >{user.assist}</Text>
                                    </div>}
                                    <div className="dFlex alignItemsCenter">
                                        <Text variant="mlgText" className={Styles.size}>{user.value}</Text>
                                        <Text variant="mlgText" className={Styles.phone}>{user.country}</Text>
                                    </div>
                                </TableCell>}
                                {rowExpand && (
                                    <TableCell className={`${Styles[user.vcbSecond]} ${Styles.background} ${Styles.backgroundCollapse}`}>
                                        <div className="dFlex">
                                            <Image className={"mr5"} src="assets/images/ArmySeal.png" width={75} height={75} alt="logo" />
                                            <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                                                <Text handleClick={() => setRowExpand(!rowExpand)} variant="mlgText" className={`${Styles.size} ${"cursor"} `}>Department of the Army </Text>
                                                <Text variant="mlgText" className={Styles.size}>100,000</Text>
                                            </div>
                                        </div>
                                        <div className="dFlex">
                                            <Image className={"mr12"} src="assets/images/ContactsandSeals.png" alt="logo" />
                                            <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                                                <Text variant="mlgText" className={Styles.size}>Department of Defense</Text>
                                                <Text variant="mlgText" className={Styles.size}>1,000,000</Text>
                                            </div>
                                        </div>
                                        <div className={`${Styles.bgCollapseText} ${"dGrid pt10"}`}>
                                            <Text variant="mlgText" className={Styles.phone}>{user.country}</Text>
                                            <div className="ml25">
                                                <Icon type="linkedIn" variant="primary" size="icon_xl" />
                                                <Icon className={"ml10 mr10"} type="web" variant="primary" size="icon_xl" />
                                                <Icon type="phone" variant="primary" size="icon_xl" />
                                            </div>
                                        </div>
                                    </TableCell>)}
                                <TableCell>
                                    {user.id === iconFavorite ?
                                        <Icon type="star" onClick={() => setIconFavorite(user.id)} />
                                        : <Icon variant={"icon_xllg"} onClick={(e) => setIconFavorite(!iconFavorite)} type={"star"} className={iconFavorite ? Styles.iconYellow : Styles.iconGray} />}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </TableContainer>
    );
}
Tables.defaultProps = {
    isDesignation: false,
    isDepartmentArmyData: true,
    isAssistantSecretaryData: false,
    ismarkowitzData: false,
    isCioData: false,
}
Tables.protoType = {
    isDepartmentArmyData: propTypes.bool,
    isAssistantSecretaryData: propTypes.bool,
    ismarkowitzData: propTypes.bool,
    isCioData: propTypes.bool,
    isDesignation: propTypes.bool,

}