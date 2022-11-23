import React, { useEffect, useState } from "react";
import Icon from "../icon";
import Image from '../image';
import Styles from './tables.module.scss';
import Text from '../text'
import CheckBox from "../checkbox/checkbox";
import { TableBody, TableContainer, Table, TableRow, TableCell, Collapse } from "@mui/material";

const Items = [
    {
        id: 1,
        vcb: "green",
        vcbSecond: "greenSecond",
        selected: false,
        name: "Department of the Army",
        value: "1,000,000",
        country: "Arlington, VA",

    },
    {
        id: 2,
        vcb: "orange",
        vcbSecond: "orangeSecond",
        selected: false,
        name: "Assistant Secretary of the Army",
        value: "1,000,000",
        country: "Arlington, VA",
    },
    {
        id: 3,
        vcb: "orange",
        vcbSecond: "orangeSecond",
        selected: false,
        name: "Assistant Secretart for Acquisistion, Logistics & Technology",
        value: "500",
        country: "Arlington, VA",
    },
    {
        id: 4,
        vcb: "orange",
        vcbSecond: "orangeSecond",
        selected: false,
        name: "Chief of Staff",
        value: "1,000",
        country: "Arlington, VA",
    },
    {
        id: 5,
        vcb: "orange",
        vcbSecond: "orangeSecond",
        selected: false,
        name: "U.S Army Chief Information Officer",
        value: "10,000",
        country: "Arlington, VA",
    },
    {
        id: 6,
        vcb: "red",
        vcbSecond: "redSecond",
        selected: false,
        name: "Office of Army Cemeteries",
        value: "2,300",
        country: "Arlington, VA",
    },
    {
        id: 7,
        vcb: "red",
        vcbSecond: "redSecond",
        selected: false,
        name: "Civil Works",
        value: "200,000",
        country: "Arlington, VA",
    },
    {
        id: 8,
        vcb: "red",
        vcbSecond: "redSecond",
        selected: false,
        name: "General Council",
        value: "200,000",
        country: "Arlington, VA",
    },
    {
        id: 9,
        vcb: "red",
        vcbSecond: "redSecond",
        selected: false,
        name: "Public Affairs",
        value: "3,000",
        country: "Arlington, VA",
    },
    {
        id: 10,
        vcb: "red",
        vcbSecond: "redSecond",
        selected: false,
        name: "Audit Agency",
        value: "10,000",
        country: "Arlington, VA",
    },
    {
        id: 11,
        vcb: "orange",
        vcbSecond: "redSecond",
        selected: false,
        name: "Audit Agency",
        value: "10,000",
        country: "Arlington, VA",
    },
    {
        id: 12,
        vcb: "orange",
        vcbSecond: "redSecond",
        selected: false,
        name: "Audit Agency",
        value: "10,000",
        country: "Arlington, VA",
    },
    {
        id: 13,
        vcb: "orange",
        vcbSecond: "redSecond",
        selected: false,
        name: "Audit Agency",
        value: "10,000",
        country: "Arlington, VA",
    },
    {
        id: 14,
        vcb: "orange",
        vcbSecond: "redSecond",
        selected: false,
        name: "Audit Agency",
        value: "10,000",
        country: "Arlington, VA",
    },
];
export default function Tables() {
    // const [SelectedList, setSelectedList] = useState([]);
    // const [List, setList] = useState(Items);
    const [iconFavorite, setIconFavorite] = useState(false);
    const [rowExpand, setRowExpand] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checkboxes, setCheckboxes] = useState(false);

    const handleCheck = (event) => {
        setChecked(event.target.checked);
      };
      
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
        <div>
            <TableContainer className={Styles.container}>
                <div className={Styles.scrollBar}>
                    <Table className={Styles.table}>
                        <TableBody>
                            {Items.map((user,index) => (
                                <TableRow key={user.id} className={user.selected ? "selected" : ""}>
                                    <TableCell scope="row">
                                        <CheckBox
                                            checked={checkboxes[index]}
                                            className={`${"form-check-input"} ${Styles.tableCheckbox}`}
                                            id="rowcheck{user.id}"
                                            onChange={handleCheckbox(index)}
                                            variant="grayFill"
                                        />
                                    </TableCell>
                                    <TableCell className={`${Styles[user.vcb]} ${Styles.background}`}>
                                        <div className="dFlex alignItemsCenter">
                                            <Image className={"mr12"} src="assets/images/OfficialArmySeal.png" alt="logo" />
                                            <Text onClick={() => setRowExpand(true)} variant="mlgText" className={`${Styles.size} ${"cursor"}`}>{user.name}</Text>
                                        </div>
                                        <div className="dFlex alignItemsCenter">
                                            <Text variant="mlgText" className={Styles.size}>{user.value}</Text>
                                            <Text variant="mlgText" className={Styles.phone}>{user.country}</Text>
                                        </div>
                                    </TableCell>
                                    <TableCell> <Icon variant={"icon_xllg"} onClick={(e) => setIconFavorite(!iconFavorite)} type={"star"} className={iconFavorite ? Styles.iconYellow : Styles.iconGray} /></TableCell>
                                    {rowExpand && (
                                        <TableCell className={`${Styles[user.vcbSecond]} ${Styles.background} ${Styles.backgroundCollapse}`}>
                                            <div className="dFlex">
                                                <Image className={"mr5"} src="assets/images/ArmySeal.png" width={75} height={75} alt="logo" />
                                                <div className="dGrid">
                                                    <Text variant="mlgText" className={Styles.size}>Department of the Army </Text>
                                                    <Text variant="mlgText" className={Styles.size}>100,000 </Text>
                                                </div>
                                            </div>
                                            <div className="dFlex">
                                                <Image className={"mr5"} src="assets/images/armyDefenceLogo.png" alt="logo" />
                                                <div className="dGrid">
                                                    <Text variant="mlgText" className={Styles.size}>Department of Defense</Text>
                                                    <Text variant="mlgText" className={Styles.size}>1,000,000 </Text>
                                                </div>
                                            </div>
                                            <div className="dGrid">
                                                <Text variant="mlgText" className={Styles.phone}>{user.country}</Text>
                                                <div>
                                                    <Icon type="linkedIn" variant="primary" size="icon_xl" />
                                                    <Icon className={"ml10 mr10"} type="web" variant="primary" size="icon_xl" />
                                                    <Icon type="phone" variant="primary" size="icon_xl" />
                                                </div>
                                            </div>
                                        </TableCell>)}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </TableContainer>
        </div>
    );
}
    // const handleClick = () => {
    //     setList((prevState) => {
    //         return prevState.map((user) => {
    //             return {
    //                 ...user,
    //                 selected: MasterChecked,
    //             };
    //         });
    //     });
    //     setSelectedList(List.filter((e) => e.selected));
    // };

    // const onItemCheck = (e, item) => {
    //     let tempList = List.map((user) => {
    //         if (user.id === item.id) {
    //             user.selected = e.target.checked;
    //         }
    //         return user;
    //     });

    //     //To Control Master Checkbox State
    //     const totalItems = List.length;
    //     const totalCheckedItems = tempList.filter((e) => e.selected).length;

    //     setList(tempList);
    //     setMasterChecked(totalItems === totalCheckedItems);
    //     setSelectedList(List.filter((e) => e.selected));
    // };