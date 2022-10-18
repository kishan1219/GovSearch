import React from 'react'
import Styles from './search.module.scss';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useForm } from "react-hook-form";
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
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);
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
                    <div className={Styles.inSearch}  onSubmit={handleSubmit(onSubmit)}>
                        <Input className={`${Styles.inputMain} ${inputclassName}`} placeholder={placeholder} 
                         type="search"
                         name="search"
                         reference={register("search", {
                           required: true,
                           pattern: {
                             value: /^[A-Za-z]+$/
               
                           },
               
                         })}
                       />
                      
                        <Icon type="search" size={size} color={iconColor} onClick={onClick} className={`${Styles.rightIcon} ${iconclassName}`} />
                   
                    </div>
                    <Button  btnClass={Styles.transbton} size={"mdxl"} variant={"transparent"}>Advanced</Button>
                </div >
              
                <div className={Styles.btnSearch }>
                <div  className={Styles.error}>
                         {errors?.search?.type === "required" && (
                           <p>please enter content</p>
                         )}
                         {errors?.search?.type === "pattern" && (
                           <p>only allow character</p>
                         )}
                        
                       </div> 
                    <Button btnClass={Styles.solidSearch} size={"xxlg"} variant={"solidPrimary"}  btnHandler={handleSubmit(onSubmit)} > Search</Button></div>


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
