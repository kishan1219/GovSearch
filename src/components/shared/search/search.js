import React from 'react'
import Styles from './search.module.scss';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {
    Input,
    Icon,
    Button, Text
} from "../index";
import propTypes from 'prop-types'

export default function Search({ type, search, placeholder, onClick, inputclassName, iconclassName, size, iconColor }) {
    const [searchCode, setSearchcode] = React.useState('All');

    const handleChange = (event) => {
        setSearchcode(event.target.value);
    };
    return (
        <div className={Styles.mainSearch}>
            <div className={Styles.head}>
                <div className={Styles.headingo}>
                    <Text className={Styles.textGov} variant={"xxxxxlText"} color={"secondary"} strong={"strong6"} family={"poppins"}>GovSearch</Text>
                </div>
                <div className={Styles.searchb}>
                    <Select
                    
                        className={`${Styles.selectBtn}`}
                        value={searchCode}
                        onChange={handleChange}
                        SelectProps={{ IconComponent: () => null }}
                        displayEmpty
                    >
                        <MenuItem value="All" search={"All"} >All</MenuItem>
                        <MenuItem value="Contacts">Contacts</MenuItem>
                        <MenuItem value="Offices">Offices</MenuItem>
                        <MenuItem value="Vendors">Vendors</MenuItem>
                    </Select>
                    <div className={Styles.inSearch}>
                        <Input className={`${Styles.inputMain} ${inputclassName}`} placeholder={placeholder} />
                        <Icon type="search" size={size} color={iconColor} onClick={onClick} className={`${Styles.rightIcon} ${iconclassName}`} />
                   
                    </div>
                    <Button size={"md02"} variant={"transparent"}>Advanced</Button>
                </div >
                <div className={Styles.btnSearch}><Button size={"md04"} variant={"solidPrimary"}> Search</Button></div>


            </div>
        </div>



    );
}
Search.propTypes = {
    // label: propTypes.string,
    placeholder: propTypes.string,
    className: propTypes.any,
    type: propTypes.any,
    onClick: propTypes.func,
}
