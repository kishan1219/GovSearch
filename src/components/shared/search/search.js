import React from "react";
import Styles from "./search.module.scss";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
import { Input, Icon, Button, Heading } from "../index";
import propTypes from "prop-types";

export default function Search({
  placeholder,
  inputValue,
  onChange,
  onClick,
  inputclassName,
  iconclassName,
  size,
  iconColor,
  advanceBtnHandler,
  searchHandler,
}) {
  const [searchCode, setSearchcode] = React.useState("All");

  const handleChange = (event) => {
    setSearchcode(event.target.value);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  
  return (
    <div className={Styles.mainSearch}>
      <div className={Styles.head}>
        <div className={Styles.headingo}>
          <Heading
            headingType={"h1"}
            className={Styles.headingGov}
            color={"secondary"}
          >
            GovSearch
          </Heading>
        </div>
        <div className={Styles.searchb}>
          <Select
            className={`${Styles.selectBtn}`}
            value={searchCode}
            onChange={handleChange}
            SelectProps={{ IconComponent: () => null }}
            displayEmpty
          >
            <MenuItem value="All" search={"All"}>
              ALL
            </MenuItem>
            <MenuItem value="Contacts">CONTACTS</MenuItem>
            <MenuItem value="Offices">OFFICES</MenuItem>
            <MenuItem value="Vendors">VENDORS</MenuItem>
          </Select>
          <div className={Styles.inSearch}>
            <Input
              className={`${Styles.inputMain} ${inputclassName}`}
              placeholder={placeholder}
              onChange={onChange}
              value={inputValue}
              name="search"
              reference={register("search", {
                required: "required",
                minLength: {
                  value: 2,
                  message:
                    "Please enter valid title/role (at least 2 characters)",
                },
                maxLength: {
                  value: 30,
                  message: "Please enter valid title/role (only 30 characters)",
                },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Please enter valid Title / Role (alphabet only)",
                },
              })}
            />

            <Icon
              type="search"
              size={size}
              color={iconColor}
              onClick={onClick}
              className={`${Styles.rightIcon} ${iconclassName}`}
            />
          </div>
          <Button
            btnHandler={advanceBtnHandler}
            btnClass={Styles.transbton}
            size={"mdxl"}
            variant={"transparent"}
          >
            Advanced
          </Button>
          <div className={Styles.btnSearch}>
            <div className={Styles.errorMsg}>
              {errors.search ? <div>{errors.search.message}</div> : null}
            </div>
            <Button
              btnClass={Styles.solidSearch}
              size={"xxllg"}
              variant={"solidPrimary"}
              type={"submit"}
              btnHandler={() => {
                handleSubmit(onSubmit);
              }}
            >
              SEARCH
            </Button>
          </div>
        </div>
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
  searchHandler: propTypes.func,
};
