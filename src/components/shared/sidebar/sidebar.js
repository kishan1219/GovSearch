import React, { useState } from 'react'
import Button from '../button'
import Icon from '../icon'
import Input from '../input'
import ListGroup from '../list-group'
import ListItem from '../list-item/list-item'
import Text from '../text'
import Styles from './sidebar.module.scss'
import Switch from '@mui/material/Switch';
const Sidebar = () => {
    const [sidebarHide, setSidebarHide] = useState(true)
    const [sidebarContentHide, setSidebarContentHide] = useState(false)
    const [showContact, setShowContact] = useState(false)
    const [hideContact, setHideContact] = useState(true)
    const [showPositions, setShowPositions] = useState(false)
    const [showPositionsType, setShowPositionsType] = useState(false)
    const [showCounty, setShowCounty] = useState(false)
    const [showOfficeName, setShowOfficeName] = useState(false)
    const [showOfficeState, setShowOfficeState] = useState(false)
    const [showOfficeNameSecond, setShowOfficeNameSecond] = useState(false)
    const [showOfficeType, setShowOfficeType] = useState(false)
    const [showFederalBranch, setShowFederalBranch] = useState(false)
    const [showFederalAgency, setShowFederalAgency] = useState(false)
    const [showOfficeTypeContent, setShowOfficeTypeContent] = useState(true)
    const [showFederalBranchContent, setShowFederalBranchContent] = useState(true)
    const [showFederalAgencyContent, setShowFederalAgencyContent] = useState(true)
    const [showStateType, setShowStateType] = useState(false)
    const [showOfficeCounty, setshowOfficeCounty] = useState(false)
    const [showOfficeNameThird, setShowOfficeNameThird] = useState(false)
    const toggle = () => {
        setSidebarContentHide(true);
        setSidebarHide(false)
    }
    const toggleClose = () => {
        setSidebarContentHide(false);
        setSidebarHide(true)
    }
    const officeToggle = () => {
        setShowOfficeNameSecond(!showOfficeNameSecond);
        setShowOfficeType(!showOfficeType);
        setShowFederalBranch(!showFederalBranch);
        setShowFederalAgency(!showFederalAgency)
        setShowStateType(!showStateType)
        setShowOfficeNameThird(!showOfficeNameThird)
        setshowOfficeCounty(!showOfficeCounty)
        setShowOfficeState(!showOfficeState)
    }
    return (
        <div className={Styles.container}>
            {sidebarHide && <div>
                <ListGroup className={Styles.menu}>
                    <ListItem>
                        <Icon onClick={toggle} className={Styles.burgerIcon} type='equal' color={"white"} variant='icon_xlarge' />
                    </ListItem>
                    <ListItem handleClick={() => { toggle(); setShowContact(true) }} className={Styles.mt22}>
                        <Icon type='multipleuser' color={"white"} variant='icon_xlarge' />
                        <Text color={"white"} family="roboto" variant="mlgText">Contacts</Text>
                    </ListItem>
                    <ListItem handleClick={() => { toggle(); setHideContact(!hideContact) }}>
                        <Icon type='office' color={"white"} variant='icon_xlarge' />
                        <Text color={"white"} family="roboto" variant="mlgText">Offices</Text>
                    </ListItem>
                    <ListItem>
                        <Icon type='vendors' color={"white"} variant='icon_xlarge' />
                        <Text color={"white"} family="roboto" variant="mlgText">Vendors</Text>
                    </ListItem>
                    <ListItem>
                        <Icon type='locations' color={"white"} variant='icon_xlarge' />
                        <Text color={"white"} family="roboto" variant="mlgText">Locations</Text>
                    </ListItem>
                    <ListItem>
                        <Icon type='more' color={"white"} variant='icon_xlarge' />
                        <Text color={"white"} family="roboto" variant="mlgText">More</Text>
                    </ListItem>
                </ListGroup>
                <div className={Styles.sidebarFooter}>
                    <Icon className={Styles.ml30} type='star' color={"primary"} variant='icon_xlarge' />
                </div>
            </div>}
            {sidebarContentHide &&
                <div className={Styles.sidebarMain}>
                    <div className={Styles.advanceSearchText}>
                        <Text family='roboto' className={"op5 cursor"} color={"gray"} variant={"lgIconText"}>Advanced Search</Text>
                        <Icon className={Styles.burgerIcon} onClick={toggleClose} type='close' color={"gray"} variant='icon_xlarge' />
                    </div>
                    <Text family='roboto' variant={"smText"} className={"op5 mt25 ml20 underline cursor textUnderlineHover"} color={"darkGray"}>Saved Searches</Text>
                    <div className='dFlex mT30 alignbaseline'>
                        <div className={Styles.inputMain}>
                            <Input className={Styles.searchInput} placeholder={"Search"} />
                            <Icon type='search' color={"black"} variant='icon_xlarge' />
                        </div>
                        <div className={"ml30 fFlex flexColumn"}>
                            <Icon onClick={() => setHideContact(!hideContact)} className={"op5"} type='hierarchy' color={"black"} variant='icon_xlarge' />
                            <Switch onChange={() => setHideContact(!hideContact)} color="primary" size="small" />
                        </div>
                    </div>
                    {/*div for button pill start */}
                    <div className='mT30' />
                    {/*div for button pill end */}
                    <div className={`${Styles.scrollWrapper} ${Styles.scrollBar} ${"mr5"}`}>
                        {hideContact &&
                            <div className='mT34'>
                                <div className={`${'dFlex jusctifyContentSpaceBetween'} ${Styles.textBoldMain} `}>
                                    <Text handleClick={() => setShowContact(false)} className={showContact ? 'cursor' : ''} family='roboto' strong='strong7' variant={'xxlText'} color={'secondary'}>Contacts</Text>
                                    <Icon onClick={() => setShowContact(!showContact)} color={'primary'} type={showContact ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                </div>
                                {showContact &&
                                    <div className='mT34 mr20'>
                                        <Input placeholder={"First Name"} />
                                        <Input className={'mT25'} placeholder={"Last Name"} />
                                        <Input className={'mT25'} placeholder={"Phone"} />
                                        <Input className={'mT25'} placeholder={"Email"} />
                                    </div>}
                                <div className={`${'dFlex jusctifyContentSpaceBetween mT30'} ${Styles.textBoldMain} `}>
                                    <Text handleClick={() => setShowPositions(false)} family='roboto' strong='strong7' variant={'xxlText'} color={'secondary'}>Positions</Text>
                                    <Icon onClick={() => setShowPositions(!showPositions)} color={'primary'} type={showPositions ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                </div>
                                {showPositions &&
                                    <div className='mT34 mr20'>
                                        <Input placeholder={"Title"} />
                                        <Input className={'mT25'} placeholder={"Role"} />
                                        <div className={`${'dFlex jusctifyContentSpaceBetween ml20 mT25'} ${Styles.textBoldMain} `}>
                                            <Text family='poppins' strong='strong4' variant={'xxlText'} color={showPositionsType ? 'secondary' : 'primary'}>Position Type</Text>
                                            <Icon className={'mr20'} onClick={() => { setShowPositionsType(!showPositionsType); setShowCounty(false) }} color={'primary'} type={showPositionsType ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                        </div>
                                        {showPositionsType &&
                                            <div className={`${'mt50 ml25'} `}>
                                                <div className={`${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                    <Text handleClick={() => setShowCounty(true)} className={`${'ml5'} ${showCounty ? '' : 'cursor'}`} family='poppins' strong={showCounty ? 'strong7' : 'strong4'} variant={'smText'} color={showCounty ? 'secondary' : 'primary03'}>Alabma</Text>
                                                    <Text className={'mt10 ml5'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Georgia</Text>
                                                    <Text className={'mt10 ml5'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>virginia</Text>
                                                    <Text className={'mt10 ml5'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Maryland</Text>
                                                    <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Washington DC</Text>
                                                    <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                    <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                    <Text className={'mt10 ml5'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                    <Text className={'mt10 ml5'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                    <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                </div>
                                                {showCounty &&
                                                    <div className={`${'dFlex jusctifyContentSpaceBetween ml20 mT25'} ${Styles.textBoldMain} `}>
                                                        <Text className={'ml18'} family='poppins' strong='strong4' variant={'xxlText'} color={'primary'}>County</Text>
                                                        <Icon onClick={() => { setShowOfficeName(true); setShowCounty(false) }} className={'mr45'} color={'primary'} type={'pluscircle'} variant='icon_large' />
                                                    </div>}
                                                {showOfficeName &&
                                                    <>
                                                        <div className={`${'dFlex jusctifyContentSpaceBetween mT25'} ${Styles.textBoldMain} `}>
                                                            <Text family='poppins' strong='strong4' variant={'xxlText'} color={'secondary'}>Office Name</Text>
                                                            <Icon onClick={() => { setShowOfficeName(false); setShowPositionsType(false) }} className={'mr20'} color={'primary'} type={'minuscircle'} variant='icon_large' />
                                                        </div>
                                                        <div className={`${'mt50'} ${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                            <Text className={'ml10'} family='poppins' strong='strong7' variant={'smText'} color='secondary'>Department of the Army</Text>
                                                            <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Department of the Airforce</Text>
                                                            <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Department of the Navy</Text>
                                                            <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Department of the Defence</Text>
                                                            <Text className={'mt15'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>DOD-Office of the CIO</Text>
                                                            <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                            <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                            <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                            <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                            <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                        </div>
                                                    </>
                                                }
                                            </div>}
                                    </div>
                                }
                                <div className={`${'dFlex jusctifyContentSpaceBetween mT30'} ${Styles.textBoldMain} `}>
                                    <Text family='roboto' strong='strong7' variant={'xxlText'} color={'secondary'}>Offices</Text>
                                    <Icon onClick={officeToggle} color={'primary'} type={showOfficeNameSecond ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                </div>
                                {showOfficeNameSecond &&
                                    <div>
                                        <div className={`${'dFlex jusctifyContentSpaceBetween mt50 ml10'} ${Styles.textBoldMain} `}>
                                            <Text family='poppins' strong='strong4' variant={'xxlText'} color={'secondary'}>Office Name</Text>
                                            <Icon onClick={() => { setShowOfficeNameSecond(!showOfficeNameSecond); setShowOfficeState(true) }} className={'mr12'} color={'primary'} type={'minuscircle'} variant='icon_large' />
                                        </div>
                                        <div className={`${'mt50 ml20'} ${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                            <Text className={'ml10'} family='poppins' strong='strong7' variant={'smText'} color='secondary'>Department of the Army</Text>
                                            <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Department of the Airforce</Text>
                                            <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Department of the Navy</Text>
                                            <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Department of the Defence</Text>
                                            <Text className={'mt15'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>DOD-Office of the CIO</Text>
                                            <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                            <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                            <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                            <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                            <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                        </div>
                                    </div>
                                }
                                {showOfficeState &&
                                    <div className='mT34 mr20'>
                                        <div className={`${'dFlex jusctifyContentSpaceBetween ml20 mT25'} ${Styles.textBoldMain} `}>
                                            <Text family='poppins' strong='strong4' variant={'xxlText'} color={showStateType ? 'secondary' : 'primary'}>State</Text>
                                            <Icon className={'mr20'} onClick={() => { setShowStateType(!showStateType); setshowOfficeCounty(false) }} color={'primary'} type={showStateType ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                        </div>
                                        {showStateType &&
                                            <div className={`${'mt50 ml25'} `}>
                                                <div className={`${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                    <Text handleClick={() => setshowOfficeCounty(true)} className={`${'ml5'} ${showOfficeCounty ? '' : 'cursor'}`} family='poppins' strong={showOfficeCounty ? 'strong7' : 'strong4'} variant={'smText'} color={showOfficeCounty ? 'secondary' : 'primary03'}>Alabma</Text>
                                                    <Text className={'mt10 ml5'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Georgia</Text>
                                                    <Text className={'mt10 ml5'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>virginia</Text>
                                                    <Text className={'mt10 ml5'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Maryland</Text>
                                                    <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Washington DC</Text>
                                                    <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                    <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                    <Text className={'mt10 ml5'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                    <Text className={'mt10 ml5'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                    <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                </div>
                                                {showOfficeCounty &&
                                                    <div className={`${'dFlex jusctifyContentSpaceBetween ml20 mT25'} ${Styles.textBoldMain} `}>
                                                        <Text className={'ml18'} family='poppins' strong='strong4' variant={'xxlText'} color={'primary'}>County</Text>
                                                        <Icon onClick={() => { setShowOfficeNameThird(true); setshowOfficeCounty(false) }} className={'mr45'} color={'primary'} type={'pluscircle'} variant='icon_large' />
                                                    </div>}
                                                {showOfficeNameThird &&
                                                    <>
                                                        <div className={`${'dFlex jusctifyContentSpaceBetween mT25'} ${Styles.textBoldMain} `}>
                                                            <Text family='poppins' strong='strong4' variant={'xxlText'} color={'secondary'}>Office Name</Text>
                                                            <Icon onClick={() => { setShowOfficeNameThird(false); setShowStateType(false) }} className={'mr20'} color={'primary'} type={'minuscircle'} variant='icon_large' />
                                                        </div>
                                                        <div className={`${'mt50'} ${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                            <Text className={'ml10'} family='poppins' strong='strong7' variant={'smText'} color='secondary'>Department of the Army</Text>
                                                            <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Department of the Airforce</Text>
                                                            <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Department of the Navy</Text>
                                                            <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Department of the Defence</Text>
                                                            <Text className={'mt15'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>DOD-Office of the CIO</Text>
                                                            <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                            <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                            <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                            <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                            <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                        </div>
                                                    </>
                                                }
                                            </div>}
                                    </div>
                                }
                                {showOfficeType &&
                                    <div>
                                        <div className={`${'dFlex jusctifyContentSpaceBetween mt50 ml10'} ${Styles.textBoldMain} `}>
                                            <Text family='poppins' strong='strong4' variant={'xxlText'} color={'secondary'}>Office Type</Text>
                                            <Icon className={'mr12'} onClick={() => { setShowOfficeTypeContent(!showOfficeTypeContent); setShowFederalBranch(false); setShowFederalBranchContent(false); setShowFederalAgency(false); setShowFederalAgencyContent(false) }} color={'primary'} type={showOfficeTypeContent ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                        </div>
                                        {showOfficeTypeContent &&
                                            <div className={`${'mt50 ml20'} ${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                <Text className={'ml10'} family='poppins' strong='strong7' variant={'smText'} color='secondary'>All</Text>
                                                <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Federal</Text>
                                                <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Defence</Text>
                                                <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>State</Text>
                                                <Text className={'mt15'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Muncipal</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Local</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>County</Text>
                                                <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                <Text className={'mt10 ml10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                            </div>}
                                    </div>
                                }
                                {showFederalBranch &&
                                    <div>
                                        <div className={`${'dFlex jusctifyContentSpaceBetween mt50 ml40'} ${Styles.textBoldMain} `}>
                                            <Text family='poppins' strong='strong4' variant={'xxlText'} color={'secondary'}>Federal Branch</Text>
                                            <Icon onClick={() => { setShowFederalBranchContent(!showFederalBranchContent); setShowFederalAgency(false); setShowFederalAgencyContent(false) }} className={'mr45'} color={'primary'} type={showFederalBranchContent ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                        </div>
                                        {showFederalBranchContent &&
                                            <div className={`${Styles.scrollWrapper1} ${Styles.scrollBar} ${"ml25 mt30"}`}>
                                                <Text family='poppins' strong={'strong7'} variant={'smText'} color={'secondary'}>Alabma</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Georgia</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>virginia</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Maryland</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Washington DC</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                            </div>}
                                    </div>
                                }
                                {showFederalAgency &&
                                    <div>
                                        <div className={`${'dFlex jusctifyContentSpaceBetween mt50 ml50'} ${Styles.textBoldMain} `}>
                                            <Text family='poppins' strong='strong4' variant={'xxlText'} color={'secondary'}>Federal Agency</Text>
                                            <Icon onClick={() => setShowFederalAgencyContent(!showFederalAgencyContent)} className={'mr50'} color={'primary'} type={showFederalAgencyContent ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                        </div>
                                        {showFederalAgencyContent &&
                                            <div className={`${Styles.scrollWrapper1} ${Styles.scrollBar} ${"ml25 mt30"}`}>
                                                <Text family='poppins' strong={'strong7'} variant={'smText'} color={'secondary'}>Alabma</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Georgia</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>virginia</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Maryland</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Washington DC</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                <Text className={'mt10'} family='poppins' strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                            </div>}
                                    </div>
                                }
                                <div className={`${'dFlex jusctifyContentSpaceBetween mT30'} ${Styles.textBoldMain} `}>
                                    <Text family='roboto' strong='strong7' variant={'xxlText'} color={'secondary'}>Vendor</Text>
                                    <Icon color={'primary'} type='pluscircle' variant='icon_large' />
                                </div>
                                <div className={`${'dFlex jusctifyContentSpaceBetween mT30'} ${Styles.textBoldMain} `}>
                                    <Text family='roboto' strong='strong7' variant={'xxlText'} color={'secondary'}>Locations</Text>
                                    <Icon color={'primary'} type='pluscircle' variant='icon_large' />
                                </div>
                                <div className={`${'dFlex jusctifyContentSpaceBetween mT30'} ${Styles.textBoldMain} `}>
                                    <Text family='roboto' strong='strong7' variant={'xxlText'} color={'secondary'}>More</Text>
                                    <Icon color={'primary'} type='pluscircle' variant='icon_large' />
                                </div>
                            </div>}
                        {!hideContact &&
                            <div className='mt35'>
                                <Text className={'mt10'} family='poppins' strong='strong7' variant={'mlgText'} color={'black'}>+ Federal</Text>
                                <Text className={'mt10'} family='poppins' strong='strong7' variant={'mlgText'} color={'black'}>+ State</Text>
                                <Text className={'mt10'} family='poppins' strong='strong7' variant={'mlgText'} color={'black'}>+ County</Text>
                                <Text className={'mt10'} family='poppins' strong='strong7' variant={'mlgText'} color={'black'}>+ Muncipal</Text>
                                <Text className={'mt10'} family='poppins' strong='strong7' variant={'mlgText'} color={'black'}>+ Vendors</Text>
                            </div>
                        }

                        <div className='dFlex mT35 alignEnd jusctifyContentSpaceBetween'>
                            <Text family='roboto' variant={"smText"} className={"op5 underline cursor textUnderlineHover"} color={"darkGray"}>Clear</Text>
                            <Text family='roboto' variant={"smText"} className={"op5 underline cursor textUnderlineHover"} color={"darkGray"}>Save Search</Text>
                            <Button btnClass='mr10' size={"xmd01"} variant={"solidPrimary"}>Search</Button>
                        </div>
                        <div className='mT44'>
                            <Text family='roboto' variant={"smText"} className={"op5"} color={"darkGray"}>Intel</Text>
                            <Text family='roboto' variant={"smText"} className={"op5 mT27"} color={"darkGray"}>Defense</Text>
                            <Text family='roboto' variant={"smText"} className={"op5 mT27"} color={"darkGray"}>News</Text>
                            <Text family='roboto' variant={"smText"} className={"op5 mT27"} color={"darkGray"}>Stats</Text>
                            <div className={`${'mT27 dFlex alignItemsCenter jusctifyContentSpaceBetween'} ${Styles.textBoldMain}`}>
                                <Text family='roboto' variant={"smText"} className={"op5"} color={"darkGray"}>Favorites/List</Text>
                                <Icon color={'primary'} type='star' variant='icon_large' />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Sidebar