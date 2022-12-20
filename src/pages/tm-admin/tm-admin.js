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
  const [showselect, setSelect] = useState(false);
  const [selected, setSelected] = useState("# No of Employee");
  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
    setSelect(false);
    
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
            <Button size={"xlmd"} variant="solidPrimary">
              Add Account
            </Button>
            <Button btnHandler={() => setShow(!show)} size={"xlmd"} variant="solidPrimary">
              Add User
            </Button>
            <Button size={"xmsm"}  variant="solidBlack">
              Save
            </Button>
          </div>

          <EnhancedTable />
        </div>
      </Layout>
      {/* <Modal
            open={show}
            onClose={handleClose}
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className={Styles.profileModel}>
                <div>
              <Heading headingType={"h1"} className={Styles.resetHead}>Reset password</Heading>
              <Card className={Styles.profileCard}>
                <Text strong={"strong6"}  >Email</Text>
                <Text  className={Styles.resetText}>hunter@technomile.com</Text>
                <Text strong={"strong6"} className={Styles.resetHeadText} >Account</Text>
                <Text  className={Styles.resetText}>BAE Systems</Text>
                <Text strong={"strong6"} className={Styles.resetHeadText} >Password</Text>
                <Text className={Styles.resetText}>GovSearch123_2022</Text>
              </Card>
              </div>
              <div className={Styles.btnMain}>
              <Button size={"xmd"} variant={"solidPrimary"}>Cancle</Button>
              <Button size={"xmd"} variant={"solidPrimary"}>Reset</Button>
              </div>
            </div>
          </Modal> */}
          {show && 
      <Modal className={Styles.mainModal}>
        <div className={Styles.addUserModel}>
          <Heading headingType={"h1"} className={Styles.resetHead}>
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
             IconComponent = { ()  => null }
             sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
            
             value={selected} onChange={selectionChangeHandler}
            open={showselect} 
            
            
            // labelId="demo-simple-select-helper-label"

              >
            <MenuItem  value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
            </Select>
            

            {/* <Input className={Styles.empInputTwo} variant="grey" /> */}
            <Icon onClick={() => setSelect(true)} className={Styles.iconDown} type='soliddownpolygon' variant='icon_xlarge' />
        </div>
    </div>
    <div className={Styles.SecondInput}>
        <div className={Styles.accountInfoBox}>
            <Input className={Styles.Infoinput} placeholder="Last Name" variant="grey" />
            <Input className={Styles.Infoinput} placeholder="Phone" variant="grey" />
            <Input className={Styles.Infoinput} placeholder="Company" variant="grey" />
            <Input className={Styles.Infoinput} placeholder="Company URL" variant="grey" />
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
    </div>
  );
};

export default TmAdmin;
