import React from "react";
import { useState } from "react";
import { Grid } from "@mui/material";
import Styles from "./accountsetting.module.scss";
import {
  Heading,
  Card,
  Text,
  Button,
  Layout,
  Input,
  Icon,
} from "../../../components/shared/index";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";

const AccountSetting = () => {
  const [showselect, setSelect] = useState(false);
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);
  const [selected, setSelected] = useState("GovSearch Proffesional");

  const [showdata, setShowData] = useState(false);
  const [licType, setLicType] = useState("USA");

  const [employee, setEmployee] = useState(false);
  const [employeenum, setEmployeenum] = useState("100");

  const [state, setState] = useState(false);
  const [selectState, setSelectState] = useState("VA");

  const [BuisType, setBuisType] = useState(false);
  const [selectBuisType, setSelectBuisType] = useState("Prpfessional Services");

  // For first  Name
  const [name, setName] = useState("Harry");
  const [lname, setLname] = useState("Pinkston");
  const [address, setAddress] = useState("Pinkston");
  const [zipCode, setZipCode] = useState("344535");
  const [email, setEmail] = useState("matt@technomile.com");
  const [contact, setContact] = useState("83498585944");
  const [title, setTitle] = useState("Product Manager");
  const [company, setCompany] = useState("TechnoMile");
  const [url, setUrl] = useState("technomile.com");
  const updateName = (event) => {
    setName(event.target.value);
  };
  const updateLastName = (event) => {
    setLname(event.target.value);
  };
  const updateAddress = (event) => {
    setAddress(event.target.value);
  };
  const updateZipCode = (event) => {
    setZipCode(event.target.value);
  };
  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updateContact = (event) => {
    setContact(event.target.value);
  };
  const updateTitle = (event) => {
    setTitle(event.target.value);
  };
  const updateCompany = (event) => {
    setCompany(event.target.value);
  };

  const updateUrl = (event) => {
    setUrl(event.target.value);
  };

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
    setSelect(false);
  };
  const selectLicenceType = (event) => {
    setLicType(event.target.value);
    setShowData(false);
  };
  const selectEmployeenumber = (event) => {
    setEmployeenum(event.target.value);
    setEmployee(false);
  };
  const selectOptionState = (event) => {
    setSelectState(event.target.value);
    setState(false);
  };
  const setSelectBuisness = (event) => {
    setSelectBuisType(event.target.value);
    setBuisType(false);
  };
  const showDetails = () => {
    setShow(false);
    setHide(true);
  };
  const saveDetails = () => {
    setShow(true);
    setHide(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  return (
    <Layout isSidebar={true} isFederal={false} isGovSearchProfessional={true}>
      <div className={Styles.wrapper}>
        <Heading
          className={Styles.accountHead}
          color={"secondary"}
          headingType={"h1"}
        >
          {" "}
          Account{" "}
        </Heading>
        <Heading
          className={`${Styles.profileHead} ${"mt25 mb22"}`}
          color={"secondary"}
          headingType={"h2"}
        >
          {" "}
          Profile
        </Heading>
        {show && (
          <div className={`${Styles.main}`}>
            <div className={Styles.profileBox}>
              {/* Profile Card Started Here */}
              <Grid container spacing={2}>
                <Card className={Styles.mainCard}>
                  <div className={Styles.cardBox}>
                    <div>
                      <Text
                        className={Styles.cardHeadText}
                        variant={"mdText"}
                        strong="strong4"
                      >
                        First Name
                      </Text>
                      <Text
                        className={`${Styles.cardText} ${"mt5"}`}
                        variant={"mdText"}
                        strong="strong3"
                      >
                        {name}
                      </Text>
                    </div>
                    <div>
                      <Text
                        className={Styles.cardHeadText}
                        variant={"mdText"}
                        strong="strong4"
                      >
                        Last Name
                      </Text>
                      <Text
                        className={`${Styles.cardText} ${"mt5"}`}
                        variant={"mdText"}
                        strong="strong3"
                      >
                        {lname}
                      </Text>
                    </div>
                    <div>
                      <Text
                        className={Styles.cardHeadText}
                        variant={"mdText"}
                        strong="strong4"
                      >
                        Address
                      </Text>
                      <Text
                        className={`${Styles.cardText} ${"mt5"}`}
                        strong="strong3"
                      >
                        {address}
                      </Text>
                    </div>
                    <div>
                      <Text
                        className={Styles.cardHeadText}
                        variant={"mdText"}
                        strong="strong4"
                      >
                        Zip Code
                      </Text>
                      <Text
                        className={`${Styles.cardText} ${"mt5"}`}
                        strong="strong3"
                      >
                        {zipCode}
                      </Text>
                    </div>
                    <div>
                      <Text
                        className={Styles.cardHeadText}
                        variant={"mdText"}
                        strong="strong4"
                      >
                        Email
                      </Text>
                      <Text
                        className={`${Styles.cardText} ${"mt5"}`}
                        variant={"mdText"}
                        strong="strong3"
                      >
                        {email}
                      </Text>
                    </div>
                    <div>
                      <Text
                        className={Styles.cardHeadText}
                        variant={"mdText"}
                        strong="strong4"
                      >
                        Phone
                      </Text>
                      <Text
                        className={`${Styles.cardText} ${"mt5"}`}
                        variant={"mdText"}
                        strong="strong3"
                      >
                        {contact}
                      </Text>
                    </div>
                    <div>
                      <Text
                        className={Styles.cardHeadText}
                        variant={"mdText"}
                        strong="strong4"
                      >
                        State
                      </Text>
                      <Text
                        className={`${Styles.cardText} ${"mt5"}`}
                        variant={"mdText"}
                        strong="strong3"
                      >
                        {selectState}
                      </Text>
                    </div>
                    <div>
                      <Text
                        className={Styles.cardHeadText}
                        variant={"mdText"}
                        strong="strong4"
                      >
                        Country
                      </Text>
                      <Text
                        className={`${Styles.cardText} ${"mt5"}`}
                        variant={"mdText"}
                        strong="strong3"
                      >
                        {licType}
                      </Text>
                    </div>
                    <div>
                      <Text
                        className={Styles.cardHeadText}
                        variant={"mdText"}
                        strong="strong4"
                      >
                        Title/Role
                      </Text>
                      <Text
                        className={`${Styles.cardText} ${"mt5"}`}
                        variant={"mdText"}
                        strong="strong3"
                      >
                        {title}
                      </Text>
                    </div>
                    <div>
                      <Text
                        className={Styles.cardHeadText}
                        variant={"mdText"}
                        strong="strong4"
                      >
                        Company
                      </Text>
                      <Text
                        className={`${Styles.cardText} ${"mt5"}`}
                        variant={"mdText"}
                        strong="strong3"
                      >
                        {company}
                      </Text>
                    </div>
                    <div>
                      <Text
                        className={Styles.cardHeadText}
                        variant={"mdText"}
                        strong="strong4"
                      >
                        Number off Employees
                      </Text>
                      <Text
                        className={`${Styles.cardText} ${"mt5"}`}
                        variant={"mdText"}
                        strong="strong3"
                      >
                        {employeenum}
                      </Text>
                    </div>
                    <div>
                      <Text
                        className={Styles.cardHeadText}
                        variant={"mdText"}
                        strong="strong4"
                      >
                        URL (website)
                      </Text>
                      <Text
                        className={`${Styles.cardText} ${"mt5"}`}
                        variant={"mdText"}
                        strong="strong3"
                      >
                        {selectBuisType}
                      </Text>
                    </div>
                    <div className={Styles.urlBox}>
                      <Text
                        className={Styles.cardHeadText}
                        variant={"mdText"}
                        strong="strong4"
                      >
                        URL (website)
                      </Text>
                      <Text
                        className={`${Styles.cardText} ${"mt5"}`}
                        strong="strong3"
                      >
                        {url}
                      </Text>
                    </div>
                    <div className={Styles.editMain}>
                      <Button
                        btnClass={Styles.editBtn}
                        size={"xsm"}
                        variant={"solidPrimary"}
                        btnHandler={showDetails}
                      >
                        Edit
                      </Button>
                    </div>
                  </div>
                </Card>
              </Grid>
              {/* Profile Card End Here  */}
            </div>
            <Heading
              className={`${Styles.profileHead} ${"mT25 mb22"}`}
              color={"secondary"}
              headingType={"h2"}
            >
              {" "}
              User Management
            </Heading>
            <Grid container spacing={2}>
              {/* Assign  Card Stated Here  */}
              <Card className={Styles.mainCard}>
                <div className={`${Styles.userManageBox} ${"mT25 mb22"} `}>
                  <Text
                    className={Styles.licText}
                    variant={"xxxlText"}
                    color={"primary01"}
                    strong={"strong4"}
                  >
                    3
                  </Text>
                  <Text
                    className={Styles.remainlicText}
                    variant={"mlgText"}
                    color={"gray"}
                    strong={"strong4"}
                  >
                    Remaining License
                  </Text>
                  <Button
                    btnClass={Styles.updateBtn}
                    size={"xlsmlg"}
                    variant={"solidPrimary"}
                  >
                    Update User Type
                  </Button>
                  <Button
                    btnClass={Styles.inviteBtn}
                    size={"xlmd"}
                    variant={"solidPrimary"}
                  >
                    Invite Users
                  </Button>
                </div>
                <div className={`${Styles.secondCard} ${"mt40"}`}>
                  <div className={Styles.licenseMain}>
                    <Text
                      strong="strong3"
                      className={Styles.downText}
                      variant={"mlgText"}
                    >
                      Available Licenses
                    </Text>
                    <Text
                      variant={"mlgText"}
                      className={Styles.downText}
                      strong="strong6"
                    >
                      1
                    </Text>
                    <Text
                      variant={"mlgText"}
                      className={Styles.downText}
                      strong="strong6"
                    >
                      2
                    </Text>
                  </div>
                  <div className={Styles.licenseMain}>
                    <Text
                      strong="strong3"
                      className={Styles.downText}
                      variant={"mlgText"}
                    >
                      License Types
                    </Text>
                    <Text
                      variant={"mlgText"}
                      className={Styles.downText}
                      strong="strong6"
                    >
                      {selected}
                    </Text>
                    <Text
                      variant={"mlgText"}
                      className={Styles.downText}
                      strong="strong6"
                    >
                      GovSearch Defense
                    </Text>
                  </div>
                  <div className={Styles.licenseMain}>
                    <Text
                      strong="strong3"
                      variant={"mlgText"}
                      className={Styles.downText}
                    >
                      Expriation Date
                    </Text>
                    <Text
                      variant={"mlgText"}
                      strong="strong6"
                      className={Styles.downText}
                    >
                      12/01/2022
                    </Text>
                    <Text
                      variant={"mlgText"}
                      strong="strong6"
                      className={Styles.downText}
                    >
                      12/01/2022
                    </Text>
                  </div>
                  <div className={Styles.licenseMain}>
                    <Text
                      strong="strong3"
                      variant={"mlgText"}
                      className={Styles.downText}
                    >
                      Assigned Licenses
                    </Text>
                    <Text
                      variant={"mlgText"}
                      strong="strong6"
                      className={Styles.downText}
                    >
                      2
                    </Text>
                    <Text
                      variant={"mlgText"}
                      strong="strong6"
                      className={Styles.downText}
                    >
                      0
                    </Text>
                  </div>
                </div>
                <Heading
                  className={`${Styles.licenseHead} ${"mT25 mb22"}`}
                  color={"secondary"}
                  headingType={"h2"}
                >
                  Assigned Users
                </Heading>
                <div className={Styles.assignedCard}>
                  <div className={Styles.licenseMain}>
                    <Text
                      strong="strong3"
                      className={Styles.downText}
                      variant={"mlgText"}
                    >
                      First Name
                    </Text>
                    <Text
                      variant={"mlgText"}
                      className={Styles.downText}
                      strong="strong6"
                    >
                      Matt
                    </Text>
                    <Text
                      variant={"mlgText"}
                      className={Styles.downText}
                      strong="strong6"
                    >
                      Hunter
                    </Text>
                  </div>
                  <div className={Styles.licenseMain}>
                    <Text
                      strong="strong3"
                      className={Styles.downText}
                      variant={"mlgText"}
                    >
                      Last Name
                    </Text>
                    <Text
                      variant={"mlgText"}
                      className={Styles.downText}
                      strong="strong6"
                    >
                      Pinkston
                    </Text>
                    <Text
                      variant={"mlgText"}
                      className={Styles.downText}
                      strong="strong6"
                    >
                      Cronier
                    </Text>
                  </div>
                  <div className={Styles.licenseMain}>
                    <Text
                      strong="strong3"
                      variant={"mlgText"}
                      className={Styles.downText}
                    >
                      Email
                    </Text>
                    <Text
                      variant={"mlgText"}
                      strong="strong6"
                      className={Styles.downText}
                    >
                      matt@technomile.com
                    </Text>
                    <Text
                      variant={"mlgText"}
                      strong="strong6"
                      className={Styles.downText}
                    >
                      hunter@technomile.com
                    </Text>
                  </div>
                  <div className={Styles.licenseMain}>
                    <Text
                      strong="strong3"
                      variant={"mlgText"}
                      className={Styles.downText}
                    >
                      Type
                    </Text>
                    <Text
                      variant={"mlgText"}
                      strong="strong6"
                      className={Styles.downText}
                    >
                      Gov Search Admin
                    </Text>
                    <Text
                      variant={"mlgText"}
                      strong="strong6"
                      className={Styles.downText}
                    >
                      Gov Search User
                    </Text>
                  </div>
                </div>
              </Card>
              {/* Assigned Card End Here */}
            </Grid>
          </div>
        )}
        {/* Edit Detail Box  Start  */}
        {hide && (
          <div className={`${Styles.editCard}  `}>
            <Grid container spacing={1}>
              <Card className={Styles.mainCard}>
                <div className={Styles.formBox}>
                  <div>
                    <Text
                      variant={"mdText"}
                      className={Styles.accountText}
                      strong="strong4"
                    >
                      First Name
                    </Text>
                    <Input
                      variant="border"
                      className={Styles.inputbox}
                      id="fname"
                      onChange={updateName}
                      // value={name}
                      reference={register("firstName", {
                        required: "required",
                        minLength: {
                          value: 2,
                          message: "char length must be 2",
                        },
                        maxLength: {
                          value: 20,
                          message: "Char length must be 20",
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/,
                          message:
                            "Please enter valid first name (alphabet only)",
                        },
                      })}
                    />
                    <div className={`${"mb0"} ${Styles.errorMsg}`}>
                      {errors.firstName ? (
                        <div>{errors.firstName.message}</div>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <Text
                      variant={"mdText"}
                      className={Styles.accountText}
                      strong="strong4"
                    >
                      Last Name
                    </Text>
                    <Input
                      variant="border"
                      className={Styles.inputbox}
                      id="lname"
                      name="lname"
                      onChange={updateLastName}
                      // value={lname}
                      reference={register("lastName", {
                        required: "required",
                        minLength: {
                          value: 2,
                          message: "char length must be 2",
                        },
                        maxLength: {
                          value: 20,
                          message: "Char length must be 20",
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/,
                          message:
                            "Please enter valid last name (alphabet only)",
                        },
                      })}
                    />
                    <div className={Styles.errorMsg}>
                      {errors.lastName ? (
                        <div>{errors.lastName.message}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <Text
                      className={Styles.accountText}
                      variant={"mdText"}
                      strong="strong4"
                    >
                      Address
                    </Text>
                    <Input
                      className={Styles.inputbox}
                      variant="border"
                      id="address"
                      name="address"
                      onChange={updateAddress}
                      // value={address}
                      reference={register("address", {
                        required: "required",
                        minLength: {
                          value: 20,
                          message: "char length must be 20",
                        },
                        maxLength: {
                          value: 100,
                          message: "Char length must be under 100",
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/,
                          message: "Please enter valid Address (alphabet only)",
                        },
                      })}
                    />
                    <div className={Styles.errorMsg}>
                      {errors.address ? (
                        <div>{errors.address.message}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <Text
                      className={Styles.accountText}
                      variant={"mdText"}
                      strong="strong4"
                    >
                      Zip Code
                    </Text>
                    <Input
                      className={Styles.inputbox}
                      variant="border"
                      id="zipcode"
                      name="zipcode"
                      onChange={updateZipCode}
                      // value={zipCode}
                    />
                  </div>
                  <div>
                    <Text
                      variant={"mdText"}
                      className={Styles.accountText}
                      strong="strong4"
                    >
                      Email
                    </Text>
                    <Input
                      variant="border"
                      className={Styles.inputbox}
                      id="email"
                      name="email"
                      onChange={updateEmail}
                      // value={email}
                      reference={register("email", {
                        required: "*Please enter email address.",
                        validate: (value) => {
                          return (
                            [/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i].every(
                              (pattern) => pattern.test(value)
                            ) || "Alphabetical characters only"
                          );
                        },
                      })}
                    />
                    <div className={Styles.errorMsg}>
                      {errors.email ? <div>{errors.email.message}</div> : null}
                    </div>
                  </div>
                  <div className={Styles.SecBox}>
                    <Text
                      className={Styles.accountText}
                      variant={"mdText"}
                      strong="strong4"
                    >
                      Phone
                    </Text>
                    <Input
                      className={Styles.inputbox}
                      variant="border"
                      id="phone"
                      name="phone"
                      onChange={updateContact}
                      // value={contact}
                      reference={register("Phone", {
                        required: "required",
                        minLength: {
                          value: 10,
                          message: "Enter 10 digits only",
                        },
                        maxLength: {
                          value: 10,
                          message: "only 10 digits are allowed to Enter",
                        },
                        pattern: {
                          value: /^\d{10}$/,
                          message:
                            "Please enter valid phone number (10 digits)",
                        },
                      })}
                    />
                    <div className={Styles.errorMsg}>
                      {errors.Phone ? <div>{errors.Phone.message}</div> : null}
                    </div>
                  </div>
                  <div className={Styles.arrowInput}>
                    <Text
                      className={Styles.accountText}
                      variant={"mdText"}
                      strong="strong4"
                    >
                      State
                    </Text>
                    <Select
                      className={Styles.empInput}
                      IconComponent={() => null}
                      sx={{
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      }}
                      value={selectState}
                      onChange={selectOptionState}
                      open={state}
                    >
                      <MenuItem value="Victoria">Victoria</MenuItem>
                      <MenuItem value="England">England</MenuItem>
                      <MenuItem value="Italy">Italy</MenuItem>
                      <MenuItem value="Rusia">Rusia</MenuItem>
                    </Select>

                    <Icon
                      onClick={() => setState(true)}
                      className={Styles.iconArrowDown}
                      type="soliddownpolygon"
                      variant="icon_xlarge"
                    />
                  </div>
                  <div className={Styles.arrowInput}>
                    <Text
                      className={Styles.accountText}
                      variant={"mdText"}
                      strong="strong4"
                    >
                      Country
                    </Text>
                    <Select
                      className={Styles.empInput}
                      IconComponent={() => null}
                      sx={{
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      }}
                      value={licType}
                      onChange={selectLicenceType}
                      open={showdata}
                    >
                      <MenuItem value="India">USA</MenuItem>
                      <MenuItem value="Sydney">Sydney</MenuItem>
                      <MenuItem value="Brazil">Brazil</MenuItem>
                      <MenuItem value="Turk">Turk</MenuItem>
                    </Select>

                    <Icon
                      onClick={() => setShowData(true)}
                      className={Styles.iconArrowDown}
                      type="soliddownpolygon"
                      variant="icon_xlarge"
                    />
                  </div>
                  <div className={Styles.titleBox}>
                    <Text
                      className={Styles.accountText}
                      variant={"mdText"}
                      strong="strong4"
                    >
                      Title / Role
                    </Text>
                    <Input
                      className={Styles.inputbox}
                      variant="border"
                      id="title"
                      name="title"
                      onChange={updateTitle}
                      // value={title}
                      reference={register("title", {
                        required: "required",
                        minLength: {
                          value: 2,
                          message:
                            "Please enter valid title/role (at least 2 characters)",
                        },
                        maxLength: {
                          value: 30,
                          message:
                            "Please enter valid title/role (only 30 characters)",
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/,
                          message:
                            "Please enter valid Title / Role (alphabet only)",
                        },
                      })}
                    />
                    <div className={Styles.errorMsg}>
                      {errors.title ? <div>{errors.title.message}</div> : null}
                    </div>
                  </div>
                  <div className={Styles.titleBox}>
                    <Text
                      variant={"mdText"}
                      className={Styles.accountText}
                      strong="strong4"
                    >
                      Company
                    </Text>
                    <Input
                      className={Styles.inputbox}
                      variant="border"
                      id="company"
                      name="company"
                      onChange={updateCompany}
                      // value={company}
                      reference={register("Company", {
                        required: "required",
                        minLength: {
                          value: 2,
                          message: "company chars must be 2",
                        },
                        maxLength: {
                          value: 15,
                          message: "company chars length must be 15",
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/,
                          message: "Please enter Company Name (alphabet only)",
                        },
                      })}
                    />
                    <div className={Styles.errorMsg}>
                      {errors.Company ? (
                        <div>{errors.Company.message}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className={Styles.arrowInput}>
                    <Text
                      className={Styles.empmText}
                      variant={"mdText"}
                      strong="strong4"
                    >
                      Number of Employees
                    </Text>
                    <Select
                      className={Styles.empInput}
                      IconComponent={() => null}
                      sx={{
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      }}
                      value={employeenum}
                      onChange={selectEmployeenumber}
                      open={employee}
                    >
                      <MenuItem value="100">100</MenuItem>
                      <MenuItem value="200">200</MenuItem>
                      <MenuItem value="300">300</MenuItem>
                      <MenuItem value="400">400</MenuItem>
                    </Select>

                    <Icon
                      onClick={() => setEmployee(true)}
                      className={Styles.iconArrowDown}
                      type="soliddownpolygon"
                      variant="icon_xlarge"
                    />
                  </div>
                  <div className={Styles.arrowInput}>
                    <Text
                      className={Styles.accountText}
                      variant={"mdText"}
                      strong="strong4"
                    >
                      Types of Business
                    </Text>
                    <Select
                      className={Styles.empInput}
                      IconComponent={() => null}
                      sx={{
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      }}
                      value={selectBuisType}
                      onChange={setSelectBuisness}
                      open={BuisType}
                    >
                      <MenuItem value="Prof. Services">Prof. Services</MenuItem>
                      <MenuItem value="Prof. Starts">Prof. Starts </MenuItem>
                    </Select>

                    <Icon
                      onClick={() => setBuisType(true)}
                      className={Styles.iconArrowDown}
                      type="soliddownpolygon"
                      variant="icon_xlarge"
                    />
                  </div>
                  <div className={Styles.urlMain}>
                    <Text
                      className={Styles.accountText}
                      variant={"mlgText"}
                      strong="strong4"
                    >
                      URL (website)
                    </Text>
                    <Input
                      className={Styles.inputbox}
                      variant="border"
                      id="url"
                      name="url"
                      onChange={updateUrl}
                      value={url}
                      reference={register("companyUrl", {
                        required: "required",
                        pattern: {
                          value:
                            /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
                          message:
                            "Please enter valid company URL (e.g. http://www.example.com)",
                        },
                        // validate: (value) => {
                        //   return (
                        //     /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/ (
                        //       (pattern) => pattern.test(value)
                        //     ) ||
                        //     "Please enter valid company URL (e.g. http://www.example.com)"
                        //   );
                        // },
                      })}
                    />
                    <div className={Styles.errorMsg}>
                      {errors.companyUrl ? (
                        <div>{errors.companyUrl.message}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className={Styles.saveBtn}>
                    <Button
                      btnClass={Styles.savemainBtn}
                      size={"xsm"}
                      variant={"solidPrimary"}
                      btnHandler={saveDetails}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </Card>
            </Grid>
            <Heading
              className={`${Styles.profileHead} ${"mT25 mb22"}`}
              color={"secondary"}
              headingType={"h2"}
            >
              {" "}
              User Management
            </Heading>

            <div className={Styles.upBox}>
              <div className={Styles.downMainBox}>
                <div className={Styles.arrowInput}>
                  <Select
                    className={Styles.typeInput}
                    IconComponent={() => null}
                    sx={{
                      boxShadow: "none",
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    }}
                    value={selected}
                    onChange={selectionChangeHandler}
                    open={showselect}
                  >
                    <MenuItem value="GovSearch Proffesional">
                      GovSearch Proffesional
                    </MenuItem>
                    <MenuItem value="GovSearch Defense">
                      GovSearch Defense
                    </MenuItem>
                  </Select>
                  <Icon
                    onClick={() => setSelect(true)}
                    className={Styles.iconType}
                    type="soliddownpolygon"
                    variant="icon_xlarge"
                  />
                </div>
                <Input
                  className={`${Styles.mailBox} ${"mt25"}`}
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  reference={register("email", {
                    required: "*Please enter email address.",
                    validate: (value) => {
                      return (
                        [/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i].every(
                          (pattern) => pattern.test(value)
                        ) || "Alphabetical characters only"
                      );
                    },
                  })}
                />
                <div className={Styles.errorMsg}>
                  {errors.email ? <div>{errors.email.message}</div> : null}
                </div>

                <Input
                  placeholder={"comments"}
                  className={`${Styles.textAreabox} ${"mt25"}`}
                  type="textarea"
                  reference={register("comment", {
                    required: "*required",
                    minLength: {
                      value: 10,
                      message: "must be 10 chars only",
                    },
                    maxLength: {
                      value: 100,
                      message: "must be 100 chars only",
                    },
                  })}
                />
                <div className={Styles.errorMsg}>
                  {errors.comment ? <div>{errors.comment.message}</div> : null}
                </div>
              </div>
              <div className={Styles.downBoxx}>
                <Text
                  className={Styles.remainHead}
                  variant="xxxlText"
                  strong={"strong3"}
                >
                  Remaining License
                </Text>
                <div className={Styles.mainRemaining}>
                  <div className={Styles.availableBox}>
                    <Text className={Styles.remainText}>Available</Text>
                    <Text className={Styles.remainText}>1</Text>
                    <Text className={Styles.remainText}>2</Text>
                  </div>
                  <div className={Styles.availableBox}>
                    <Text className={Styles.remainText}>License Type</Text>
                    <Text className={Styles.remainText}>
                      GovSearch Professional{" "}
                    </Text>
                    <Text className={Styles.remainText}>GovSearch Defense</Text>
                  </div>
                </div>
              </div>
            </div>
            <div className={Styles.sendBtn}>
              <Text variant={"xxlText"} className={Styles.billinText}>
                Billing
              </Text>
              <Button
                btnClass={Styles.sendbtns}
                size={"xsm"}
                variant={"solidPrimary"}
              >
                Send
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AccountSetting;
