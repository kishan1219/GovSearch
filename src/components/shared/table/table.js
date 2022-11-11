import React from "react";
import Icon from "../icon";
import Image from '../image';
import Styles from './table.module.scss';
import Text from '../text'
import CheckBox from "../checkbox/checkbox";

const Items = [
    {
        id: 1,
        vcb: "green",
        selected: false,
        name: "Department of the Army",
        value: "1,000,000",
        country: "Arlington, VA",

    },
    {
        id: 2,
        vcb: "orange",
        selected: false,
        name: "Assistant Secretary of the Army",
        value: "1,000,000",
        country: "Arlington, VA",
    },
    {
        id: 3,
        vcb: "orange",
        selected: false,
        name: "Assistant Secretart for Acquisistion, Logistics & Technology",
        value: "500",
        country: "Arlington, VA",
    },
    {
        id: 4,
        vcb: "orange",
        selected: false,
        name: "Chief of Staff",
        value: "1,000",
        country: "Arlington, VA",
    },
    {
        id: 5,
        vcb: "orange",
        selected: false,
        name: "U.S Army Chief Information Officer",
        value: "10,000",
        country: "Arlington, VA",
    },
    {
        id: 6,
        vcb: "red",
        selected: false,
        name: "Office of Army Cemeteries",
        value: "2,300",
        country: "Arlington, VA",
    },
    {
        id: 7,
        vcb: "red",
        selected: false,
        name: "Civil Works",
        value: "200,000",
        country: "Arlington, VA",
    },
    {
        id: 8,
        vcb: "red",
        selected: false,
        name: "General Council",
        value: "200,000",
        country: "Arlington, VA",
    },
    {
        id: 9,
        vcb: "red",
        selected: false,
        name: "Public Affairs",
        value: "3,000",
        country: "Arlington, VA",
    },
    {
        id: 10,
        vcb: "red",
        selected: false,
        name: "Audit Agency",
        value: "10,000",
        country: "Arlington, VA",
    },
    {
        id: 11,
        vcb: "orange",
        selected: false,
        name: "Audit Agency",
        value: "10,000",
        country: "Arlington, VA",
    },
];

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            List: Items,
            MasterChecked: false,
            SelectedList: [],
        };
    }

    // Select/ UnSelect Table rows
    onMasterCheck(e) {
        let tempList = this.state.List;
        // Check/ UnCheck All Items
        tempList.map((user) => (user.selected = e.target.checked));

        //Update State
        this.setState({
            MasterChecked: e.target.checked,
            List: tempList,
            SelectedList: this.state.List.filter((e) => e.selected),
        });
    }

    // Update List Item's state and Master Checkbox State
    onItemCheck(e, item) {
        let tempList = this.state.List;
        tempList.map((user) => {
            if (user.id === item.id) {
                user.selected = e.target.checked;
            }
            return user;
        });

        //To Control Master Checkbox State
        const totalItems = this.state.List.length;
        const totalCheckedItems = tempList.filter((e) => e.selected).length;

        // Update State
        this.setState({
            MasterChecked: totalItems === totalCheckedItems,
            List: tempList,
            SelectedList: this.state.List.filter((e) => e.selected),
        });
    }

    // Event to get selected rows(Optional)
    getSelectedRows() {
        this.setState({
            SelectedList: this.state.List.filter((e) => e.selected),
        });
    }

    render() {
        return (
            <div className={Styles.container}>
                <div className={Styles.row}>
                    <div className={Styles.scrollbar}>
                        <table className={Styles.table}>
                            <tbody>
                                {this.state.List.map((user) => (
                                    <tr key={user.id} className={user.selected ? "selected" : ""}>
                                        <th scope="row">
                                            <CheckBox
                                                checked={user.selected}
                                                className={`${"form-check-input"} ${Styles.tableCheckbox}`}
                                                id="rowcheck{user.id}"
                                                onChange={(e) => this.onItemCheck(e, user)}
                                                variant="grayFill"
                                            />
                                        </th>
                                        <tr className={`${Styles[user.vcb]} ${Styles.background}`}>
                                            <th>  <td> <Image src="assets/images/OfficialArmySeal.png" alt="logo" /></td>
                                                <td><Text variant="mlgText" className={Styles.size}>{user.name}</Text></td></th>
                                            <th><td><Text variant="mlgText" className={Styles.size}>{user.value}</Text></td>
                                                <td><Text variant="mlgText" className={Styles.phone}>{user.country}</Text></td></th>

                                        </tr>
                                        <td> <Icon type={"star"} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;

