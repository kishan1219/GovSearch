import React, { useRef, useState } from 'react'
import Styles from './search-result.module.scss'
import { ArmyCard, CheckBox, Icon, Layout, Tables, Text } from '../../components/shared'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
// import PropTypes from 'prop-types'
const SearchResult = () => {
    const [office, setOffice] = useState(false);
    const [selectOffice, setSelectOffice] = useState("Offices");
    const [location, setLocation] = useState(false);
    const [selectlocation, setSelectlocation] = useState("Location");
    const [other, setOther] = useState(false);
    const [selectOther, setSelectOther] = useState("Other");

    const targetOffice = (e) => {
        setSelectOffice(e.target.value);
        setOffice(false);
    };
    const targetLocation = (e) => {
        setSelectlocation(e.target.value);
        setLocation(false);
    };
    const targetOther = (e) => {
        setSelectOther(e.target.value);
        setOther(false);
    };
    const ItemSecond = [
        {
            id: 1,
            selected: false,
            card: <ArmyCard src={"assets/images/armySeal.png"} imageClass={"mt10 mr10 w75px"} departmentClass={Styles.departmentArmyTab} istopLacsText={false} isDownLacsText={true} isContactIcon={false} isGreenBorder={true} imageSize="imgLarge" />,
        },
        {
            id: 2,
            selected: false,
            card: <ArmyCard src={"assets/images/armySeal.png"} imageClass={"mt10 mr10 w75px"} departmentClass={Styles.departmentArmyTab} istopLacsText={false} isDownLacsText={true} isContactIcon={false} isGreenBorder={true} imageSize="imgLarge" />,
        },
        {
            id: 3,
            selected: false,
            card: <ArmyCard src={"assets/images/armySeal.png"} imageClass={"mt10 mr10 w75px"} departmentClass={Styles.departmentArmyTab} istopLacsText={false} isDownLacsText={true} isContactIcon={false} isGreenBorder={true} imageSize="imgLarge" />,
        },
        {
            id: 4,
            selected: false,
            card: <ArmyCard src={"assets/images/armySeal.png"} imageClass={"mt10 mr10 w75px"} departmentClass={Styles.departmentArmyTab} istopLacsText={false} isDownLacsText={true} isContactIcon={false} isGreenBorder={true} imageSize="imgLarge" />,
        },
        {
            id: 5,
            selected: false,
            card: <ArmyCard src={"assets/images/armySeal.png"} imageClass={"mt10 mr10 w75px"} departmentClass={Styles.departmentArmyTab} istopLacsText={false} isDownLacsText={true} isContactIcon={false} isGreenBorder={true} imageSize="imgLarge" />,
        },
        {
            id: 6,
            selected: false,
            card: <ArmyCard src={"assets/images/armySeal.png"} imageClass={"mt10 mr10 w75px"} departmentClass={Styles.departmentArmyTab} istopLacsText={false} isDownLacsText={true} isContactIcon={false} isGreenBorder={true} imageSize="imgLarge" />,
        },
        {
            id: 7,
            selected: false,
            card: <ArmyCard src={"assets/images/armySeal.png"} imageClass={"mt10 mr10 w75px"} departmentClass={Styles.departmentArmyTab} istopLacsText={false} isDownLacsText={true} isContactIcon={false} isGreenBorder={true} imageSize="imgLarge" />,
        },
        {
            id: 8,
            selected: false,
            card: <ArmyCard src={"assets/images/armySeal.png"} imageClass={"mt10 mr10 w75px"} departmentClass={Styles.departmentArmyTab} istopLacsText={false} isDownLacsText={true} isContactIcon={false} isGreenBorder={true} imageSize="imgLarge" />,
        },
    ]

    const [checked, setChecked] = useState(false);
    const checkboxRef = useRef(null);

    const handleTextClick = () => {
        setChecked(!checked);
    };
    return (
        <Layout isFederal={false} isProfessional={true}>
            <div className={Styles.container}>
                <div className={Styles.searchCriteria}>
                    <Text variant={"mlgText"} color="darkGray">Search Criteria “ Department of the Army ”    </Text>
                    <div className='dFlex'>
                        <Text className={"mr24"} variant={"smText"} color="gray">Advanced</Text>
                        <Text variant={"smText"} color="gray">Save Search </Text>
                    </div>
                    <div>
                        <Icon color={"gray05"} type={"hierarchy"} size="icon_xlarge" />
                        <Icon className={"ml40 mr50"} color={"gray05"} type={"pluscircle"} size="icon_xlarge" />
                        <Icon color={"gray05"} type={"ExportButton"} size="icon_xlarge" />
                    </div>
                </div>
                <Text className={"mt10 mb10"} strong='strong3' variant={"smText"} color="gray">Showing 100 results out of 1000</Text>
                <div className={`${Styles.selectCriteria} ${"mB40"}`}>
                    <Text handleClick={handleTextClick} className={"cursor"} strong='strong3' variant={"smText"} color="gray">Select All</Text>
                    <Text className={"cursor"} strong='strong3' variant={"smText"} color="gray">Filters</Text>
                    <Icon className={Styles.closeIcon} color={"gray05"} type={"close"} size="icon_xsmall" />
                    <div className={Styles.officeMain}>
                        <Select className={Styles.officeSelect}
                            IconComponent={() => null}
                            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                            value={selectOffice}
                            onChange={targetOffice}
                            open={office}
                        >
                            <MenuItem value="1">Offices</MenuItem>
                            <MenuItem value="2">Offices</MenuItem>
                            <MenuItem value="3">Offices</MenuItem>
                            <MenuItem value="4">Offices</MenuItem>
                        </Select>

                        <Icon className={Styles.straightIcon} type='straight' color={"gray01"} variant='icon_large' />
                        <Icon className={Styles.selectIcon} onClick={() => setOffice(true)} type='soliddownpolygon' color={"gray04"} variant='icon_large' />
                        {/* <Input className={Styles.inputarrowBox} variant="border" /> */}
                    </div>
                    <Icon className={Styles.closeIcon} color={"gray05"} type={"close"} size="icon_xsmall" />
                    <div className={Styles.officeMain}>
                        <Select className={Styles.officeSelect}
                            IconComponent={() => null}
                            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                            value={selectlocation}
                            onChange={targetLocation}
                            open={location}

                        >
                            <MenuItem selected value="1">Location</MenuItem>
                            <MenuItem value="2">Location</MenuItem>
                            <MenuItem value="3">Location</MenuItem>
                            <MenuItem value="4">Location</MenuItem>
                        </Select>

                        <Icon className={Styles.straightIcon} type='straight' color={"gray01"} variant='icon_large' />
                        <Icon className={Styles.selectIcon} onClick={() => setLocation(true)} type='soliddownpolygon' color={"gray04"} variant='icon_large' />
                        {/* <Input className={Styles.inputarrowBox} variant="border" /> */}
                    </div>
                    <Icon className={Styles.closeIcon} color={"gray05"} type={"close"} size="icon_xsmall" />
                    <div className={Styles.officeMain}>
                        <Select className={Styles.officeSelect}
                            IconComponent={() => null}
                            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                            value={selectOther}
                            onChange={targetOther}
                            open={other}

                        >
                            <MenuItem value="1">Other</MenuItem>
                            <MenuItem value="2">Other</MenuItem>
                            <MenuItem value="3">Other</MenuItem>
                            <MenuItem value="4">Other</MenuItem>
                        </Select>

                        <Icon className={Styles.straightIcon} type='straight' color={"gray01"} variant='icon_large' />
                        <Icon className={Styles.selectIcon} onClick={() => setOther(true)} type='soliddownpolygon' color={"gray04"} variant='icon_large' />
                        {/* <Input className={Styles.inputarrowBox} variant="border" /> */}
                    </div>
                </div>
                <div className={`${Styles.departmentTableMain} ${'alignBetween'}`}>
                    {/* <Tables /> */}
                    <Table aria-label="customized table" >
                        <TableBody className={`${Styles.tableBody} ${Styles.scrollBar}`}>
                            {ItemSecond.map((gridUser) => (
                                <TableRow>
                                    <TableCell>
                                        <TableCell>
                                            <CheckBox
                                                checked={checked}
                                                className={`${"form-check-input"} ${Styles.tableCheckbox}`}
                                                id="rowcheck{user.id}"
                                                // onChange={(e) => this.onItemCheck(e, user)}
                                                variant="grayFill"
                                                reference={checkboxRef}
                                                onChange={handleTextClick}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            {gridUser.card}
                                        </TableCell>
                                        <TableCell> <Icon type={"star"} size={"icon_large"} /></TableCell>
                                    </TableCell>
                                    <TableCell>
                                        <TableCell>
                                            <CheckBox
                                                checked={gridUser.selected}
                                                className={`${"form-check-input"} ${Styles.tableCheckbox}`}
                                                id="rowcheck{user.id}"
                                                // onChange={(e) => this.onItemCheck(e, user)}
                                                variant="grayFill"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            {gridUser.card}
                                        </TableCell>
                                        <TableCell> <Icon type={"star"} size={"icon_large"} /></TableCell>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className={`${Styles.colMd4} ${Styles.pLr12} $ ${Styles.w60}`}>
                        <Text className={`${Styles.cardHeading} ${'mt30'}`} color="darkGray" strong="strong3">Last Viewed</Text>
                        <div className={Styles.homeCard}>
                            <div className='mb30'>
                                <ArmyCard departmentClass={Styles.armyDepartmentTextMain} src={"assets/images/OfficialArmySeal.png"} imageClass={"ml20 mr20"} isGreenBorder={false} istopLacsText={true} isArlingtonText={false} isVirgina={true} imageSize="imgLarge" />
                            </div>
                            <div className='mb20'>
                                <ArmyCard departmentClass={Styles.armyDepartmentTextMain} src={"assets/images/OfficialArmySeal.png"} imageClass={"ml20 mr20"} isGreenBorder={false} istopLacsText={true} isArlingtonText={false} isVirgina={true} imageSize="imgLarge" />
                            </div>
                            <div className='mb20'>
                                <ArmyCard departmentClass={Styles.armyDepartmentTextMain} src={"assets/images/OfficialArmySeal.png"} imageClass={"ml20 mr20"} isGreenBorder={false} istopLacsText={true} isArlingtonText={false} isVirgina={true} imageSize="imgLarge" />
                            </div>
                            <div className='mb20'>
                                <ArmyCard departmentClass={Styles.armyDepartmentTextMain} src={"assets/images/OfficialArmySeal.png"} imageClass={"ml20 mr20"} isGreenBorder={false} istopLacsText={true} isArlingtonText={false} isVirgina={true} imageSize="imgLarge" />
                            </div>
                            <div className='mb20'>
                                <ArmyCard departmentClass={Styles.armyDepartmentTextMain} src={"assets/images/OfficialArmySeal.png"} imageClass={"ml20 mr20"} isGreenBorder={false} istopLacsText={true} isArlingtonText={false} isVirgina={true} imageSize="imgLarge" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Layout>
    )
}

// SearchResult.propTypes = {

// }

export default SearchResult
