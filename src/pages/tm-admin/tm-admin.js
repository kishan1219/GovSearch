import React from "react";
import { useState } from "react";
import Styles from "./tm-admin.module.scss";
import EnhancedTable from "./table-data";
// import { Modal } from "@material-ui/core";

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


import {
  Layout,
  Heading,
  Button,
  Input,
  Card,
  Text,
  Icon,
  Modal
} from "../../components/shared";
const TmAdmin = () => {
  const [show, setShow] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  // const[showReset,setShowReset]=useState(false);
  


  const [showselect, setSelect] = useState(false);
  const [selected, setSelected] = useState("1");

  const [showLisence, setShowLisence] = useState(false);
  const [selectedLisence, setSelectedLisence] = useState("1");

  const [showUser, setShowUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState("1");

 
  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
    setSelect(false);

  };
  const selectionLisence = (event) => {
    setSelectedLisence(event.target.value);
    setShowLisence(false);

  };
  const selectUserType = (event) => {
    setSelectedUser(event.target.value);
    setShowUser(false);

  };

  return (
    <div>
      <Layout
        isHeader={false}
        isTechnomile={true}
        isSidebar={true}
        isFederal={false}
        isGovSearchProfessional={false}
      >
        <div className={`${Styles.container} ${"mr50"}`}>
          <div className={Styles.headingBox}>
            <Heading
              className={Styles.heading}
              headingType={"h1"}
              color="secondary"
              fontWeight="strong6"
            >
              TechnoMile Admin - User Management
            </Heading>
            <div className={Styles.mainSearchBox}>
              <Input className={`${Styles.searchBox} ${"mr17"}`} />
              <Button size={"xmsm"} variant={"solidPrimary"}>
                Search
              </Button>
            </div>
          </div>
          <div className={`${Styles.multipleBtn} ${"mt18"}`}>
            <Button size={"xlmd"} variant="primaryWhite">
              Delete
            </Button>
            <Button btnHandler={() => setShowAccount(!show)} size={"xlmd"} variant="solidPrimary">
              Add Account
            </Button>
            <Button btnHandler={() => setShow(!show)} size={"xlmd"} variant="solidPrimary">
              Add User
            </Button>
            <Button size={"xmsm"} variant="solidBlack">
            {/* btnHandler={() => setShowReset(!showReset)} */}
              Save
            </Button>
          </div>

          <EnhancedTable />
        </div>
      </Layout>
    
          

          {/* Modal Second  */}
      {show &&
        <Modal className={Styles.mainModal}>
          <div className={Styles.addUserModel}>
            <Heading headingType={"h1"} color={"secondary"} className={Styles.resetHead}>
              Add User
            </Heading>
            <Card className={Styles.addAccountCard}>


              <div className={Styles.inputHolder}>
                <div className={Styles.accountInfoBox}>
                  <Input className={Styles.Infoinput} placeholder="First  Name" variant="grey" />
                  <Input className={Styles.Infoinput} placeholder="Phone" variant="grey" />
                  <Input className={Styles.Infoinput} placeholder="Title / Role" variant="grey" />

                  <div className={Styles.arrowInput}>
                    <Select className={Styles.empInput}
                      IconComponent={() => null}
                      sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                      value={selected} onChange={selectionChangeHandler}
                      open={showselect}>
                      <MenuItem className={Styles.mList} value="1">Lisence</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                      <MenuItem value="4">4</MenuItem>
                    </Select>
                    <Icon onClick={() => setSelect(true)} className={Styles.iconDown} type='soliddownpolygon' variant='icon_xlarge' />
                  </div>
                </div>


                <div className={Styles.SecondInput}>
                  <div className={Styles.accountInfoBox}>
                    <Input className={Styles.Infoinput} placeholder="Last Name" variant="grey" />
                    <Input className={Styles.Infoinput} placeholder="Phone" variant="grey" />
                    <div className={Styles.arrowInput}>
                      <Select className={Styles.empInput}
                        IconComponent={() => null}
                        sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}

                        value={selectedLisence} onChange={selectionLisence}
                        open={showLisence}  >
                        <MenuItem value="1">Company</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                      </Select>
                      <Icon onClick={() => setShowLisence(true)} className={Styles.iconDown} type='soliddownpolygon' variant='icon_xlarge' />
                    </div>
                    <div className={Styles.arrowInput}>
                      <Select className={Styles.empInput}
                        IconComponent={() => null}
                        sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}

                        value={selectedUser} 
                        onChange={selectUserType}
                        open={showUser}  >
                        <MenuItem value="1">User Type</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                      </Select>
                      <Icon onClick={() => setShowUser(true)} className={Styles.iconDown} type='soliddownpolygon' variant='icon_xlarge' />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <div className={Styles.btnMain}>
              <Button size={"xlmd"} variant={"solidPrimary"} btnHandler={() => setShow(false)} >
                Cancle
              </Button>
              <Button size={"xlsmlg"} variant={"solidPrimary"}>
                Send Confirmation
              </Button>
            </div>
          </div>
        </Modal>
      }
         {/* // Modal Third */}
         {showAccount && 
              
                <Modal className={Styles.mainModal}>
                  <div className={Styles.addUserModel}>
                    <Heading headingType={"h1"} color={"secondary"} className={Styles.resetHead}>
                      Add Account
                    </Heading>
                    <Card className={Styles.addAccountCard}>
        
        
                      <div className={Styles.inputHolder}>
                        <div className={Styles.accountInfoBox}>
                          <Input className={Styles.Infoinput} placeholder="First  Name" variant="grey" />
                          <Input className={Styles.Infoinput} placeholder="Phone" variant="grey" />
                          <Input className={Styles.Infoinput} placeholder="Title / Role" variant="grey" />
        
                          <div className={Styles.arrowInput}>
                            <Select className={Styles.empInput}
                              IconComponent={() => null}
                              sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                              value={selected} onChange={selectionChangeHandler}
                              open={showselect}>
                              <MenuItem className={Styles.mList} value="1"># Of Employees</MenuItem>
                              <MenuItem value="2">2</MenuItem>
                              <MenuItem value="3">3</MenuItem>
                              <MenuItem value="4">4</MenuItem>
                            </Select>
                            <Icon onClick={() => setSelect(true)} className={Styles.iconDown} type='soliddownpolygon' variant='icon_xlarge' />
                          </div>
                          <div className={Styles.arrowInput}>
                              <Select className={Styles.empInput}
                                IconComponent={() => null}
                                sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
        
                                value={selectedLisence} onChange={selectionLisence}
                                open={showLisence}  >
                                <MenuItem value="1">Professional</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                                <MenuItem value="4">4</MenuItem>
                              </Select>
                              <Icon onClick={() => setShowLisence(true)} className={Styles.iconDown} type='soliddownpolygon' variant='icon_xlarge' />
                            </div>
                        </div>
        
        
                        <div className={Styles.SecondInput}>
                          <div className={Styles.accountInfoBox}>
                            <Input className={Styles.Infoinput} placeholder="Last Name" variant="grey" />
                            <Input className={Styles.Infoinput} placeholder="Phone" variant="grey" />
                            <Input className={Styles.Infoinput} placeholder="Company" variant="grey" />
                            <Input className={Styles.Infoinput} placeholder="Company Url" variant="grey" />
                            <div className={Styles.arrowInput}>
                              <Select className={Styles.empInput}
                                IconComponent={() => null}
                                sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
        
                                value={selectedUser} 
                                onChange={selectUserType}
                                open={showUser}  >
                                <MenuItem value="1">User Type</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                                <MenuItem value="4">4</MenuItem>
                              </Select>
                              <Icon onClick={() => setShowUser(true)} className={Styles.iconDown} type='soliddownpolygon' variant='icon_xlarge' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <div className={Styles.btnMain}>
                      <Button size={"xlmd"} variant={"solidPrimary"} btnHandler={() => setShowAccount(false)} >
                        Cancle
                      </Button>
                      <Button size={"xlsmlg"} variant={"solidPrimary"}>
                        Send Confirmation
                      </Button>
                    </div>
                  </div>
                </Modal>
         }

    </div>
  );
};

export default TmAdmin;
