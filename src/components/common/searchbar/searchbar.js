import React from 'react'
import Styles from './searchbar.module.scss';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import {
  Input,
  Icon,
  Button,
  Text
} from "../../shared/index";
import propTypes from 'prop-types'

export default function SearchBar({ type, placeholder, onClick, inputclassName, iconclassName, size, iconColor, search }) {
  const [searchCode, setSearchcode] = React.useState('All');

    const handleChange = (event) => {
        setSearchcode(event.target.value);
    };
  return (
    <div className={Styles.search}>
      <Select
        className={`${Styles.allBtn}`}
        value={searchCode}
        onChange={handleChange}
        SelectProps={{ IconComponent: () => null }}
        displayEmpty

      >
        <MenuItem value="All" >All</MenuItem>
        <MenuItem value="Contacts">Contacts</MenuItem>
        <MenuItem value="Offices">Offices</MenuItem>
        <MenuItem value="Vendors">Vendors</MenuItem>
      </Select>
      <div className={Styles.mainIco}>
        <Input className={`${Styles.inputcla} ${inputclassName}`} placeholder={placeholder} />
        <Icon type="search" size={size} color={iconColor} onClick={onClick} className={`${Styles.rightIcon} ${iconclassName}`} />

      </div>
      <Button size={"md"} variant={"solidSecondary"}>Search</Button>
      <Text className={Styles.textAdv} variant={"smText"} color={"gray"} strong={"strong4"}>Advanced</Text>

    </div >



  );
}
SearchBar.propTypes = {
  placeholder: propTypes.string,
  className: propTypes.any,
  type: propTypes.any,
  onClick: propTypes.func,
}
