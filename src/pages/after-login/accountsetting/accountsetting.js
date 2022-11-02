import React from 'react'
import { useState } from 'react'
import Styles from './accountsetting.module.scss'
import { Heading, Card, Text, Button, Layout, Input, Icon } from '../../../components/shared/index'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
const AccountSetting = () => {
  const [showselect, setSelect] = useState(false);
  // const [selectState, setSelectState] = useState(false);
 
  // const [buisnesstype, setBuisnessType] = useState(false);
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);
  const [selected, setSelected] = useState("GovSearch Proffesional");

  const [showdata, setShowData] = useState(false);
  const [licType, setLicType] = useState("USA");

  const[employee,setEmployee] = useState(false);
  const[employeenum,setEmployeenum]=useState("100");
// State
  const[state,setState] = useState(false);
  const[selectState,setSelectState]=useState("VA");
  // Buisness Type
  const[BuisType,setBuisType] = useState(false);
  const[selectBuisType,setSelectBuisType]=useState("Prpfessional Services");

  
  // For first  Name
  const [name, setName] = useState("Harry");
  const[lname,setLname] = useState("Pinkston");
  const[address,setAddress] = useState("Pinkston");
  const[zipCode,setZipCode] = useState("344535");
  const[email,setEmail] = useState("matth@gmail.com");
  const[contact,setContact] = useState("83498585944");
  const[title,setTitle] = useState("Product Manager");
  const[company,setCompany] = useState("TechnoMile");
  const[url,setUrl] = useState("technomile.com");
  const updateName = event => {
    setName(event.target.value);
  
  };
  const updateLastName = event => {
    setLname(event.target.value);
  
  };
  const updateAddress = event => {
    setAddress(event.target.value);
  
  };
  const updateZipCode = event => {
    setZipCode(event.target.value);
  
  };
  const updateEmail = event => {
    setEmail(event.target.value);
  
  };
  const updateContact = event => {
    setContact(event.target.value);
  
  };
  const updateTitle = event => {
    setTitle(event.target.value);
  
  };
  const updateCompany = event => {
    setCompany(event.target.value);
  
  };
  
  
  const updateUrl = event => {
    setUrl(event.target.value);
  
  };
  
  
  // const handleClick = event => {
  //   event.preventDefault();

  
  //   console.log(name);
  // };


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


  // const selectCompanyName = (event) => {
  //   (event.target.value);
  //   setShowData(false);

  // }
 
  
 
 



  const showDetails = () => {
    setShow(false);
    setHide(true);
  }
  const saveDetails = () => {
    setShow(true);
    setHide(false);
  }



  return (
    <Layout>
      <div className={Styles.wrapper}>
        <Heading className={Styles.accountHead} color={"gray"} headingType={"h1"}> Account </Heading>
        {show && (
          <div className={`${Styles.main} ${Styles.scrollBar} ${Styles.scrollWrapper} `}>


            <div className={Styles.profileBox}>

              <Heading headingType={"h2"}> Profile</Heading>
              <Card className={Styles.mainCard}>

                <div className={Styles.textBox}>
                  <div className={Styles.profileBox}>
                    <div >
                      <Heading strong='strong3'  className={Styles.cardHead}>First  Name</Heading>
                      <Text variant={"mlgText"} strong='strong3'>{name}</Text>
                    </div>
                    <div>
                      <Heading  className={Styles.cardHead}>Email</Heading>
                      <Text variant={"mlgText"} strong='strong3'>{email}</Text>
                    </div>
                    <div>
                      <Heading  className={Styles.cardHead}>Title / Role</Heading>
                      <Text variant={"mlgText"} strong='strong3'>{title}</Text>
                    </div>
                  </div>


                  <div className={Styles.profileBox}>
                    <div>
                      <Heading  className={Styles.cardHead}>Last Name</Heading>
                      <Text variant={"mlgText"} strong='strong3'>{lname}</Text>
                    </div>
                    <div>
                      <Heading  className={Styles.cardHead}>Phone</Heading>
                      <Text variant={"mlgText"} strong='strong3'>{contact}</Text>
                    </div>
                    <div >
                      <Heading  className={Styles.cardHead}>Company</Heading>
                      <Text variant={"mlgText"} strong='strong3'>{company}</Text>
                    </div>
                  </div>
                  <div className={Styles.profileBox}>
                    <div>
                      <Heading  className={Styles.cardHead}>Address</Heading>
                      <Text variant={"mlgText"} strong='strong3'>{address}</Text>
                    </div>

                    <div>
                      <Heading  className={Styles.cardHead}>State</Heading>
                      <Text variant={"mlgText"} strong='strong3'>{selectState}</Text>
                    </div>
                    <div>
                      <Heading  className={Styles.cardHead}>Number of Employees</Heading>
                      <Text variant={"mlgText"} strong='strong3'>{employeenum}</Text>
                    </div>
                  </div>
                  <div className={Styles.profileBox}>
                    <div>
                      <Heading  className={Styles.cardHead}>Zip Code</Heading>
                      <Text variant={"mlgText"} strong='strong3'>{zipCode}</Text>
                    </div>
                    <div>
                      <Heading  className={Styles.cardHead}>Country</Heading>
                      <Text variant={"mlgText"} strong='strong3'>{licType}</Text>
                    </div>
                    <div>
                      <Heading  className={Styles.cardHead}>Type of Business</Heading>
                      <Text variant={"mlgText"} strong='strong3'>{selectBuisType}</Text>
                    </div>
                  </div>


                </div>
                <div className={Styles.btnMain}>
                  <div>
                    <Heading  className={Styles.cardHead}>URL (website)</Heading>
                    <Text variant={"mlgText"} strong='strong3'>{url}</Text>
                  </div>
                  <Button size={"xsm"} variant={"solidPrimary"} btnHandler={showDetails} >Edit</Button>
                </div>


              </Card>
            </div>
            <Heading className={Styles.manageHead} color={"secondary"}  headingType={"h2"}>User Management</Heading>
            <div className={Styles.userManage}>

              <Card className={Styles.mainCard}>
                <div className={Styles.userManageBox}>
                  <Text className={Styles.identityText} variant={"xxxlText"} color={"primary01"} strong={"strong4"}>3</Text>
                  <Text className={Styles.identityText} variant={"mlgText"} color={"gray"} strong={"strong4"}>Remaining License</Text>
                  <Button size={"xlsmlg"} variant={"solidPrimary"}>Update User Type</Button>
                  <Button size={"xlmd"} variant={"solidPrimary"}>Invite Users</Button>
                </div>
                <div className={Styles.secondCard}>
                  <div className={Styles.licenseMain}>
                    <Text strong='strong3' variant={"mlgText"} >Available Licenses</Text>
                    <Text variant={"mlgText"} strong='strong6'>1</Text>
                    <Text variant={"mlgText"} strong='strong6'>2</Text>
                  </div>
                  <div className={Styles.licenseMain}>
                    <Text strong='strong3' variant={"mlgText"} >License Types</Text>
                    <Text variant={"mlgText"} strong='strong6'>{selected}</Text>
                    <Text variant={"mlgText"} strong='strong6'>GovSearch Defense</Text>
                  </div>
                  <div className={Styles.licenseMain}>
                    <Text strong='strong3' variant={"mlgText"} >Expriation Date</Text>
                    <Text variant={"mlgText"} strong='strong6'>12/01/2022</Text>
                    <Text variant={"mlgText"} strong='strong6'>12/01/2022</Text>
                  </div>
                  <div className={Styles.licenseMain}>
                    <Text strong='strong3' variant={"mlgText"} >Assigned Licenses</Text>
                    <Text variant={"mlgText"} strong='strong6'>2</Text>
                    <Text variant={"mlgText"} strong='strong6'>0</Text>
                  </div>
                </div>

                <Heading className={Styles.licenseHead} headingType="h2" color="secondary">Assigned Users</Heading>
              </Card>
            </div>
          </div >
        )}


        {/* Edit Profile */}
        {hide && (
          <div className={`${Styles.editCard} ${Styles.scrollBar} ${Styles.scrollWrapper} `}>
            <Heading headingType={"h2"} className={Styles.profileHead}> Profile</Heading>
            <Card className={Styles.profileCard}>
              <div className={Styles.formBox}>
                <div>
                  <div >
                    <Text variant={"mlgText"} strong='strong4'>First Name</Text>
                    <Input className={Styles.inputbox} variant="border"
                    id="name"
                    name="name"
                    onChange={updateName}
                    value={name}
                      
                      
                      />
                  </div>
                  <div className={Styles.SecBox}>
                    <Text variant={"mlgText"} strong='strong4'>Email</Text>
                    <Input className={Styles.inputbox} variant="border"
                    id="email"
                    name="email"
                    onChange={updateEmail}
                    value={email} />
                  </div>
                  <div className={Styles.titleBox}>
                    <Text variant={"mlgText"} strong='strong4'>Title / Role</Text>
                    <Input className={Styles.inputbox} variant="border"
                     id="title"
                     name="title"
                     onChange={updateTitle}
                     value={title} />
                  </div>

                </div>

                <div>
                  <div>
                    <Text variant={"mlgText"} strong='strong4'>Last Name</Text>
                    <Input className={Styles.inputbox} variant="border"
                     id="lname"
                     name="lname"
                     onChange={updateLastName}
                     value={lname}
                        />
                  </div>
                  <div className={Styles.SecBox}>
                    <Text variant={"mlgText"} strong='strong4'>Phone</Text>
                    <Input className={Styles.inputbox} variant="border" 
                    id="phone"
                    name="phone"
                    onChange={updateContact}
                    value={contact}/>
                  </div>
                  <div className={Styles.titleBox}>
                    <Text variant={"mlgText"} strong='strong4'>Company</Text>
                    <Input className={Styles.inputbox} variant="border"
                     id="company"
                     name="company"
                     onChange={updateCompany}
                     value={company} />
                  </div>

                </div>


                <div>
                  <div>
                    <Text variant={"mlgText"} strong='strong4'>Address</Text>
                    <Input className={Styles.inputbox} variant="border"
                    id="address"
                    name="address"
                    onChange={updateAddress}
                    value={address}/>
                  </div>
                  <div className={Styles.arrowInput}>
                    <Text variant={"mlgText"} strong='strong4'>State</Text>
                    <Select className={Styles.empInput}
                      IconComponent={() => null}
                      sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                      value={selectState} 
                      onChange={selectOptionState}
                      open={state}

                    >
                      <MenuItem value="Victoria">Victoria</MenuItem>
                      <MenuItem value="England">England</MenuItem>
                      <MenuItem value="Italy">Italy</MenuItem>
                      <MenuItem value="Rusia">Rusia</MenuItem>
                    </Select>

                    {/* <Input className={Styles.inputarrowBox} variant="border" /> */}
                    <Icon onClick={() => setState(true)} className={Styles.iconArrowDown} type='soliddownpolygon' variant='icon_xlarge' />
                  </div>
                  <div className={Styles.arrowInput}>
                    <Text variant={"mlgText"} strong='strong4'>Number of Employees</Text>
                    <Select className={Styles.empInput}
                      IconComponent={() => null}
                      sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                      value={employeenum} 
                      onChange={selectEmployeenumber}
                      open={employee}

                    >
                      <MenuItem value="100">100</MenuItem>
                      <MenuItem value="200">200</MenuItem>
                      <MenuItem value="300">300</MenuItem>
                      <MenuItem value="400">400</MenuItem>
                    </Select>

                    {/* <Input className={Styles.inputarrowBox} variant="border" /> */}
                    <Icon onClick={() => setEmployee(true)} className={Styles.iconArrowDown} type='soliddownpolygon' variant='icon_xlarge' />
                  </div>

                </div>


                <div>
                  <div>
                    <Text variant={"mlgText"} strong='strong4'>Zip Code</Text>
                    <Input className={Styles.inputbox} variant="border" 
                    id="zipcode"
                    name="zipcode"
                    onChange={updateZipCode}
                    value={zipCode}/>
                  </div>
                  <div className={Styles.arrowInput}>
                    <Text variant={"mlgText"} strong='strong4'>Country</Text>
                    <Select className={Styles.empInput}
                      IconComponent={() => null}
                      sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                      value={licType} onChange={selectLicenceType}
                      open={showdata}

                    >
                      <MenuItem value="India">USA</MenuItem>
                      <MenuItem value="Sydney">Sydney</MenuItem>
                      <MenuItem value="Brazil">Brazil</MenuItem>
                      <MenuItem value="Turk">Turk</MenuItem>
                    </Select>

                   
                    <Icon onClick={() => setShowData(true)} className={Styles.iconDown} type='soliddownpolygon' variant='icon_xlarge' />
                  </div>
                  <div className={Styles.arrowInput}>
                    <Text variant={"mlgText"} strong='strong4'>Types of Business</Text>
                    <Select className={Styles.empInput}
                      IconComponent={() => null}
                      sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                      value={selectBuisType} onChange={setSelectBuisness}
                      open={BuisType}

                    >
                      <MenuItem value="Prof. Services">Prof. Services</MenuItem>
                      <MenuItem value="Prof. Starts">Prof. Starts </MenuItem>
                     
                    </Select>

                    {/* <Input className={Styles.inputarrowBox} variant="border" /> */}
                    <Icon onClick={() => setBuisType(true)} className={Styles.iconDown} type='soliddownpolygon' variant='icon_xlarge' />
                  </div>
                </div>


              </div>
              <div className={Styles.nextBtn}>
                <div>
                  <Text variant={"mlgText"} strong='strong4'>URL (website)</Text>
                  <Input className={Styles.inputbox} variant="border" 
                   id="url"
                   name="url"
                   onChange={updateUrl}
                   value={url}/>
                </div>
                <Button size={"xsm"} variant={"solidPrimary"} btnHandler={saveDetails} >Save</Button>
              </div>
            </Card>
            <div className={Styles.cardDown}>
              <Heading className={Styles.manageHead} headingType={"h2"}>User Management</Heading>
              <div className={Styles.arrowInput}>

                {/* <select className={Styles.typeInput} disabled={licencetype ? false : true}>
                  <option selected value="Licence Type">Licence Type </option>
                  <option value="1">GovSearch Proffesional</option>
                  <option value="2">GovSearch Defense</option>

                </select> */}
                  <Select className={Styles.typeInput}
                      IconComponent={() => null}
                      sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                      value={selected} onChange={selectionChangeHandler}
                       open={showselect}

                    >
                      <MenuItem value="GovSearch Proffesional">GovSearch Proffesional</MenuItem>
                      <MenuItem value="GovSearch Defense">GovSearch Defense</MenuItem>
                      
                    </Select>


                <Icon  onClick={() => setSelect(true)}className={Styles.iconType} type='soliddownpolygon' variant='icon_xlarge' />

              </div>
              <div className={Styles.emailBox}>
                <Input className={Styles.mailBox} type="email" placeholder="Enter Your Email" />
                {/* <Input className={Styles.commentBox} placeholder="Comments" /> */}
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  placeholder="comments"
                  style={{ width: 615, height: 200,  marginTop: 20, paddingTop: 15, paddingLeft: 20,fontSize:25 }}
                />

              </div>
            </div>
          </div>
        )}

      </div >

    </Layout>
  )
}

export default AccountSetting
