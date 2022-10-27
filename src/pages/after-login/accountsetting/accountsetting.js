import React from 'react'
import { useState } from 'react'
import Styles from './accountsetting.module.scss'
import { Heading, Card, Text, Button, Layout, Input, Icon } from '../../../components/shared/index'
const AccountSetting = () => {
  const [showselect, setSelect] = useState(false);
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);

  const showDetails = () => {
    setShow(false);
    setHide(true);
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
                      <Heading>First  Name</Heading>
                      <Text variant={"mlgText"}>Matt</Text>
                    </div>
                    <div>
                      <Heading>Email</Heading>
                      <Text variant={"mlgText"}>matt@technomile.com</Text>
                    </div>
                    <div>
                      <Heading>Title / Role</Heading>
                      <Text variant={"mlgText"}>Product Manager</Text>
                    </div>
                  </div>


                  <div className={Styles.profileBox}>
                    <div>
                      <Heading>Last Name</Heading>
                      <Text variant={"mlgText"}>Pinkston</Text>
                    </div>
                    <div>
                      <Heading>Phone</Heading>
                      <Text variant={"mlgText"}>7031234567</Text>
                    </div>
                    <div>
                      <Heading>Company</Heading>
                      <Text variant={"mlgText"}>TechnoMile</Text>
                    </div>
                  </div>
                  <div className={Styles.profileBox}>
                    <div>
                      <Heading>Address</Heading>
                      <Text variant={"mlgText"}>USA</Text>
                    </div>

                    <div>
                      <Heading>State</Heading>
                      <Text variant={"mlgText"}>VA</Text>
                    </div>
                    <div>
                      <Heading>Number of Employees</Heading>
                      <Text variant={"mlgText"}>100</Text>
                    </div>
                  </div>
                  <div className={Styles.profileBox}>
                    <div>
                      <Heading>Zip Code</Heading>
                      <Text variant={"mlgText"}>20166</Text>
                    </div>
                    <div>
                      <Heading>Country</Heading>
                      <Text variant={"mlgText"}>USA</Text>
                    </div>
                    <div>
                      <Heading>Type of Business</Heading>
                      <Text variant={"mlgText"}>Professional Services</Text>
                    </div>
                  </div>


                </div>
                <div className={Styles.btnMain}>
                  <div>
                    <Heading>URL (website)</Heading>
                    <Text variant={"mlgText"}>technomile.com</Text>
                  </div>
                  <Button size={"xsm"} variant={"solidPrimary"} btnHandler={showDetails} >Edit</Button>
                </div>


              </Card>
            </div>
            <Heading className={Styles.manageHead} headingType={"h2"}>User Management</Heading>
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
                    <Text variant={"mlgText"} strong='strong6'>GovSearch Professional</Text>
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
          <div className={Styles.editCard}>
             <Heading headingType={"h2"} className={Styles.profileHead}> Profile</Heading>
            <Card className={Styles.profileCard}>
              <div className={Styles.formBox}>
                <div>
                  <div>
                    <Text variant={"mlgText"} strong='strong6'>First Name</Text>
                    <Input className={Styles.inputbox} variant="border" />
                  </div>
                  <div>
                    <Text variant={"mlgText"} strong='strong6'>Email</Text>
                    <Input className={Styles.inputbox} variant="border" />
                  </div>
                  <div>
                    <Text variant={"mlgText"} strong='strong6'>Title / Role</Text>
                    <Input className={Styles.inputbox} variant="border" />
                  </div>

                </div>

                <div>
                  <div>
                    <Text variant={"mlgText"} strong='strong6'>Last Name</Text>
                    <Input className={Styles.inputbox} variant="border" />
                  </div>
                  <div>
                    <Text variant={"mlgText"} strong='strong6'>Phone</Text>
                    <Input className={Styles.inputbox} variant="border" />
                  </div>
                  <div>
                    <Text variant={"mlgText"} strong='strong6'>Company</Text>
                    <Input className={Styles.inputbox} variant="border" />
                  </div>

                </div>


                <div>
                  <div>
                    <Text variant={"mlgText"} strong='strong6'>Address</Text>
                    <Input className={Styles.inputbox} variant="border" />
                  </div>
                  <div className={Styles.arrowInput}>
                    <Text variant={"mlgText"} strong='strong6'>State</Text>
                    <select className={Styles.empInput} disabled={showselect ? false : true}>
                      <option selected value="# of Employees"></option>
                      <option value="1">India</option>
                      <option value="2">Australia</option>
                      <option value="3">England</option>
                      <option value="4">Italy</option>
                    </select>

                    <Input className={Styles.inputarrowBox} variant="border" />
                    <Icon onClick={() => setSelect(true)} className={Styles.iconArrowDown} type='soliddownpolygon' variant='icon_xlarge' />
                  </div>
                  <div className={Styles.arrowInput}>
                    <Text variant={"mlgText"} strong='strong6'>Number of Employees</Text>
                    <select className={Styles.empInput} disabled={showselect ? false : true}>
                      <option selected value="# of Employees"></option>
                      <option value="1">GovSearch Proffesional</option>
                      <option value="2">GovSearch Defense</option>

                    </select>

                    <Input className={Styles.inputarrowBox} variant="border" />
                    <Icon onClick={() => setSelect(true)} className={Styles.iconArrowDown} type='soliddownpolygon' variant='icon_xlarge' />
                  </div>

                </div>


                <div>
                  <div>
                    <Text variant={"mlgText"} strong='strong6'>Zip Code</Text>
                    <Input className={Styles.inputbox} variant="border" />
                  </div>
                  <div className={Styles.arrowInput}>
                    <Text variant={"mlgText"} strong='strong6'>Country</Text>
                    <select className={Styles.empInput} disabled={showselect ? false : true}>
                      <option selected value="# of Employees"></option>
                      <option value="1">India</option>
                      <option value="2">Australia</option>
                      <option value="3">England</option>
                      <option value="4">Italy</option>
                    </select>

                    <Input className={Styles.inputarrowBox} variant="border" />
                    <Icon onClick={() => setSelect(true)} className={Styles.iconDown} type='soliddownpolygon' variant='icon_xlarge' />
                  </div>
                  <div className={Styles.arrowInput}>
                    <Text variant={"mlgText"} strong='strong6'>Types of Business</Text>
                    <select className={Styles.empInput} disabled={showselect ? false : true}>
                      <option selected value="# of Employees"></option>
                      <option value="1">GovSearch Proffesional</option>
                      <option value="2">GovSearch Defense</option>

                    </select>

                    <Input className={Styles.inputarrowBox} variant="border" />
                    <Icon onClick={() => setSelect(true)} className={Styles.iconDown} type='soliddownpolygon' variant='icon_xlarge' />
                  </div>
                </div>


              </div>
              <div className={Styles.nextBtn}>
                <div>
                  <Text variant={"mlgText"} strong='strong6'>URL (website)</Text>
                  <Input className={Styles.inputbox} variant="border" />
                </div>
                <Button size={"xsm"} variant={"solidPrimary"}>Save</Button>
              </div>
            </Card>
            <div className={Styles.cardDown}>
              <Heading className={Styles.manageHead} headingType={"h2"}>User Management</Heading>
              <div className={Styles.arrowInput}>
         
                <select className={Styles.typeInput} disabled={showselect ? false : true}>
                  <option selected value="Licence Type">Licence Type </option>
                  <option value="1">GovSearch Proffesional</option>
                  <option value="2">GovSearch Defense</option>

                </select>


                <Input className={Styles.typeBox}  />
                <Icon onClick={() => setSelect(true)} className={Styles.iconType} type='soliddownpolygon' variant='icon_xlarge' />
                
              </div>
              <div className={Styles.emailBox}>
                  <Input className={Styles.mailBox} type="email" placeholder="Enter Your Email" />
                  <Input className={Styles.commentBox} placeholder="Comments" />
                </div>
            </div>
          </div>
        )}

      </div >

    </Layout>
  )
}

export default AccountSetting
