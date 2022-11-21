import React, { useState } from 'react'
import Button from '../button'
import Icon from '../icon'
import Input from '../input'
import ListGroup from '../list-group'
import ListItem from '../list-item/list-item'
import Text from '../text'
import Styles from './sidebar.module.scss'
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';
import { styled } from '@mui/system';
import Chip from '@mui/material/Chip';
const Sidebar = () => {
    const [sidebarHide, setSidebarHide] = useState(true)
    const [sidebarContentHide, setSidebarContentHide] = useState(false)
    const [showContact, setShowContact] = useState(false)
    const [showfederalPlus, setShowfederalPlus] = useState(false)
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
    const [hideOfficeNameSecond, sethideOfficeNameSecond] = useState(false)
    const [showVendorContent, setShowVendorContent] = useState(false)
    const [showVendorName, setShowVendorName] = useState(false)
    const [showVendorContractVehicle, setShowVendorContractVehicle] = useState(false)
    const [showVendorNameContent, setShowVendorNameContent] = useState(false)
    const [showVendorCounty, setShowVendorCounty] = useState(false)
    const [showVendorOfficeNameThird, setShowVendorOfficeNameThird] = useState(false)
    const [showVendorContractContent, setShowVendorContractContent] = useState(false)
    const [showVendorContractCounty, setShowVendorContractCounty] = useState(false)
    const [showVendorContractOfficeName, setShowVendorContractOfficeName] = useState(false)
    const [showLocation, setShowLocation] = useState(false)
    const [showLocationType, setShowLocationType] = useState(false)
    const [showLocationOfficeName, setShowLocationOfficeName] = useState(false)
    const [showLocationCounty, setShowLocationCounty] = useState(false)
    const [showMore, setShowMore] = useState(false)
    const [showGovSense, setShowGovSense] = useState(false)
    const [showMoreOfficeName, setShowMoreOfficeName] = useState(false)
    const [showMoreCounty, setShowMoreCounty] = useState(false)
    const toggle = () => {
        setSidebarContentHide(true);
        setSidebarHide(false)
    }
    const toggleClose = () => {
        setSidebarContentHide(false);
        setSidebarHide(true)
    }
    const officeToggle = () => {
        sethideOfficeNameSecond(!hideOfficeNameSecond);
        setShowOfficeNameSecond(!showOfficeNameSecond);
        setShowOfficeType(!showOfficeType);
        setShowFederalBranch(!showFederalBranch);
        setShowFederalAgency(!showFederalAgency)
        setShowStateType(false)
        setShowOfficeNameThird(false)
        setshowOfficeCounty(false)
        setShowOfficeState(false)
    }
    const vendorToggle = () => {
        setShowVendorContent(!showVendorContent)
        setShowVendorName(!showVendorName)
        setShowVendorContractVehicle(!showVendorContractVehicle)
    }
    const SwitchToggle = () => {
        if (setHideContact(!hideContact)) {
            setShowfederalPlus(false)
        }
        else if (setShowfederalPlus(!showfederalPlus)) {
            setHideContact(false)
        }
    }
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const blue = {
        500: '#5286FF',
    };

    const grey = {
        500: '#5286FF',
    };

    const Root = styled('span')(
        ({ theme }) => `
        font-size: 0;
        position: relative;
        display: inline-block;
        width: 40px;
        height: 15px;
        margin: 10px;
        cursor: pointer;
      
        & .${switchUnstyledClasses.track} {
          background: ${theme.palette.mode === 'dark' ? grey[500] : grey[500]};
          border-radius: 16px;
          display: block;
          height: 100%;
          width: 100%;
          position: absolute;
        }
      
        & .${switchUnstyledClasses.thumb} {
          display: block;
          width: 12px;
          height: 12px;
          top: 1px;
          left: 1px;
          border-radius: 16px;
          background-color: #fff;
          position: relative;
          
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 120ms;
        }
      
        &.${switchUnstyledClasses.checked} {
          .${switchUnstyledClasses.thumb} {
            left: 27px;
            top: 1px;
            background-color: #fff;
          }
      
          .${switchUnstyledClasses.track} {
            background: ${blue[500]};
          }
        }
      
        & .${switchUnstyledClasses.input} {
          cursor: inherit;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: 0;
          z-index: 1;
          margin: 0;
        }
        `,
    );
    const label = { slotProps: { input: { 'aria-label': 'Demo switch' } } };
    return (
        <div className={Styles.container}>
            {sidebarHide &&
                <div>
                    <ListGroup className={Styles.menu}>
                        <ListItem>
                            <Icon onClick={toggle} className={Styles.burgerIcon} type='equal' color={"white"} variant='icon_xlarge' />
                        </ListItem>
                        <ListItem handleClick={() => { toggle(); setShowContact(true); setHideContact(true); setShowfederalPlus(false) }} className={"mt50 mb10"}>
                            <Icon type='multipleuser' color={"white"} variant='icon_xlarge' />
                            <Text color={"white"} family="roboto" variant="mlgText">Contacts</Text>
                        </ListItem>
                        <ListItem className={"mb10"} handleClick={() => { toggle(); setHideContact(false); setShowfederalPlus(true) }}>
                            <Icon type='office' color={"white"} variant='icon_xlarge' />
                            <Text color={"white"} family="roboto" variant="mlgText">Offices</Text>
                        </ListItem>
                        <ListItem className={"mb10"} handleClick={() => { toggle(); vendorToggle(); setShowVendorNameContent(true); setHideContact(true); setShowfederalPlus(false) }}>
                            <Icon type='vendors' color={"white"} variant='icon_xlarge' />
                            <Text color={"white"} family="roboto" variant="mlgText">Vendors</Text>
                        </ListItem>
                        <ListItem className={"mb10"} handleClick={() => { toggle(); setShowLocation(true); setShowLocationType(true); setHideContact(true); setShowfederalPlus(false) }} >
                            <Icon type='locations' color={"white"} variant='icon_xlarge' />
                            <Text color={"white"} family="roboto" variant="mlgText">Locations</Text>
                        </ListItem>
                        <ListItem handleClick={() => { toggle(); setShowMore(true); setHideContact(true); setShowfederalPlus(false) }}>
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
                    <div className='dFlex mT30 alignbaseline mr20'>
                        <div className={Styles.inputMain}>
                            <Input className={Styles.searchInput} placeholder={"Search"} />
                            <Icon className={Styles.iconSearch} type='search' color={"black"} variant='icon_xlarge' />
                        </div>
                        <div className={"ml30 alignBetween"}>
                            <Icon onClick={SwitchToggle} className={"op5"} type='hierarchy' color={"black"} variant='icon_xlarge' />
                            <div>
                                <SwitchUnstyled className={Styles.toggleSwitch} component={Root} {...label} />
                            </div>
                        </div>
                    </div>
                    {/*div for button pill start */}
                    <div className='mT30' >
                        <Chip sx={{
                            '& .MuiChip-deleteIcon': {
                                color: '#ffffff',
                                fontSize: '12px',
                                border: '1px solid #ffffff',
                                padding: '2px',
                                borderRadius: '50px',

                            },
                        }} label="All" onClick={handleClick} onDelete={handleDelete} deleteIcon={<Icon type='close' variant={"icon_small"} />} className={Styles.primaryChipColor} size='small' variant="outlined" />
                    </div>
                    {/* div for button pill end */}
                    <div className={`${Styles.scrollWrapper} ${hideContact ? Styles.scrollBarTransparent : Styles.scrollBar}`}>
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
                                    </div>
                                }
                                <div className={`${'dFlex jusctifyContentSpaceBetween mT30'} ${Styles.textBoldMain} `}>
                                    <Text handleClick={() => setShowPositions(false)} family='roboto' strong='strong7' variant={'xxlText'} color={'secondary'}>Positions</Text>
                                    <Icon onClick={() => setShowPositions(!showPositions)} color={'primary'} type={showPositions ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                </div>
                                {showPositions &&
                                    <div className='mT34 mr20'>
                                        <Input placeholder={"Title"} />
                                        <Input className={'mT25'} placeholder={"Role"} />
                                        <div className={`${'dFlex jusctifyContentSpaceBetween ml20 mT25'} ${Styles.textBoldMain} `}>
                                            <Text strong='strong4' variant={'xxlText'} color={showPositionsType ? 'secondary' : 'primary'}>Position Type</Text>
                                            <Icon className={'mr20'} onClick={() => { setShowPositionsType(!showPositionsType); setShowCounty(false) }} color={'primary'} type={showPositionsType ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                        </div>
                                        {showPositionsType &&
                                            <div className={`${'mt50 ml25'} `}>
                                                <div className={`${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                    <Text handleClick={() => setShowCounty(true)} className={`${'ml5'} ${showCounty ? '' : 'cursor'}`} strong={showCounty ? 'strong7' : 'strong4'} variant={'smText'} color={showCounty ? 'secondary' : 'primary03'}>Alabma</Text>
                                                    <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Georgia</Text>
                                                    <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>virginia</Text>
                                                    <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Maryland</Text>
                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Washington DC</Text>
                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                    <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                    <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                </div>
                                                {showCounty &&
                                                    <div className={`${'dFlex jusctifyContentSpaceBetween ml20 mT25'} ${Styles.textBoldMain} `}>
                                                        <Text className={'ml18'} strong='strong4' variant={'xxlText'} color={'primary'}>County</Text>
                                                        <Icon onClick={() => { setShowOfficeName(true); setShowCounty(false) }} className={'mr45'} color={'primary'} type={'pluscircle'} variant='icon_large' />
                                                    </div>}
                                                {showOfficeName &&
                                                    <>
                                                        <div className={`${'dFlex jusctifyContentSpaceBetween mT25'} ${Styles.textBoldMain} `}>
                                                            <Text strong='strong4' variant={'xxlText'} color={'secondary'}>Office Name</Text>
                                                            <Icon onClick={() => { setShowOfficeName(false); setShowPositionsType(false) }} className={'mr20'} color={'primary'} type={'minuscircle'} variant='icon_large' />
                                                        </div>
                                                        <div className={`${'mt50'} ${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                            <Text className={'ml10'} strong='strong7' variant={'smText'} color='secondary'>Department of the Army</Text>
                                                            <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Airforce</Text>
                                                            <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Navy</Text>
                                                            <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Defence</Text>
                                                            <Text className={'mt15'} strong='strong4' variant={'smText'} color={'primary03'}>DOD-Office of the CIO</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                            <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                            <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                        </div>
                                                    </>
                                                }
                                            </div>
                                        }
                                    </div>
                                }
                                <div className={`${'dFlex jusctifyContentSpaceBetween mT30'} ${Styles.textBoldMain} `}>
                                    <Text family='roboto' strong='strong7' variant={'xxlText'} color={'secondary'}>Offices</Text>
                                    <Icon onClick={officeToggle} color={'primary'} type={hideOfficeNameSecond ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                </div>
                                {hideOfficeNameSecond &&
                                    <>
                                        {showOfficeNameSecond &&
                                            <div>
                                                <div className={`${'dFlex jusctifyContentSpaceBetween mt50 ml10'} ${Styles.textBoldMain} `}>
                                                    <Text strong='strong4' variant={'xxlText'} color={'secondary'}>Office Name</Text>
                                                    <Icon onClick={() => { setShowOfficeNameSecond(!showOfficeNameSecond); setShowOfficeState(true) }} className={'mr12'} color={'primary'} type={'minuscircle'} variant='icon_large' />
                                                </div>
                                                <div className={`${'mt50'} ${Styles.scrollWrapper1} ${Styles.scrollBar} ${"mw230"}`}>
                                                    <Text className={'ml10'} strong='strong7' variant={'smText'} color='secondary'>Department of the Army</Text>
                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Airforce</Text>
                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Navy</Text>
                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Defence</Text>
                                                    <Text className={'mt15'} strong='strong4' variant={'smText'} color={'primary03'}>DOD-Office of the CIO</Text>
                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                </div>
                                            </div>
                                        }
                                        {showOfficeState &&
                                            <div className='mT34 mr20'>
                                                <div className={`${'dFlex jusctifyContentSpaceBetween ml20 mT25'} ${Styles.textBoldMain} `}>
                                                    <Text strong='strong4' variant={'xxlText'} color={showStateType ? 'secondary' : 'primary'}>State</Text>
                                                    <Icon className={'mr20'} onClick={() => { setShowStateType(!showStateType); setshowOfficeCounty(false) }} color={'primary'} type={showStateType ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                                </div>
                                                {showStateType &&
                                                    <div className={`${'mt50 ml25'} `}>
                                                        <div className={`${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                            <Text handleClick={() => setshowOfficeCounty(true)} className={`${'ml5'} ${showOfficeCounty ? '' : 'cursor'}`} strong={showOfficeCounty ? 'strong7' : 'strong4'} variant={'smText'} color={showOfficeCounty ? 'secondary' : 'primary03'}>Alabma</Text>
                                                            <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Georgia</Text>
                                                            <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>virginia</Text>
                                                            <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Maryland</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Washington DC</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                            <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                            <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                        </div>
                                                        {showOfficeCounty &&
                                                            <div className={`${'dFlex jusctifyContentSpaceBetween ml20 mT25'} ${Styles.textBoldMain} `}>
                                                                <Text className={'ml18'} strong='strong4' variant={'xxlText'} color={'primary'}>County</Text>
                                                                <Icon onClick={() => { setShowOfficeNameThird(true); setshowOfficeCounty(false) }} className={'mr45'} color={'primary'} type={'pluscircle'} variant='icon_large' />
                                                            </div>}
                                                        {showOfficeNameThird &&
                                                            <>
                                                                <div className={`${'dFlex jusctifyContentSpaceBetween mT25'} ${Styles.textBoldMain} `}>
                                                                    <Text strong='strong4' variant={'xxlText'} color={'secondary'}>Office Name</Text>
                                                                    <Icon onClick={() => { setShowOfficeNameThird(false); setShowStateType(false) }} className={'mr20'} color={'primary'} type={'minuscircle'} variant='icon_large' />
                                                                </div>
                                                                <div className={`${'mt50'} ${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                                    <Text className={'ml10'} strong='strong7' variant={'smText'} color='secondary'>Department of the Army</Text>
                                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Airforce</Text>
                                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Navy</Text>
                                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Defence</Text>
                                                                    <Text className={'mt15'} strong='strong4' variant={'smText'} color={'primary03'}>DOD-Office of the CIO</Text>
                                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                                </div>
                                                            </>
                                                        }
                                                    </div>}
                                            </div>
                                        }
                                        {showOfficeType &&
                                            <div>
                                                <div className={`${'dFlex jusctifyContentSpaceBetween mt50 ml10'} ${Styles.textBoldMain} `}>
                                                    <Text strong='strong4' variant={'xxlText'} color={'secondary'}>Office Type</Text>
                                                    <Icon className={'mr12'} onClick={() => { setShowOfficeTypeContent(!showOfficeTypeContent); setShowFederalBranch(false); setShowFederalBranchContent(false); setShowFederalAgency(false); setShowFederalAgencyContent(false) }} color={'primary'} type={showOfficeTypeContent ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                                </div>
                                                {showOfficeTypeContent &&
                                                    <div className={`${'mt50 ml20'} ${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                        <Text className={'ml10'} strong='strong7' variant={'smText'} color='secondary'>All</Text>
                                                        <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Federal</Text>
                                                        <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Defence</Text>
                                                        <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>State</Text>
                                                        <Text className={'mt15'} strong='strong4' variant={'smText'} color={'primary03'}>Muncipal</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Local</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>County</Text>
                                                        <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                        <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                    </div>
                                                }
                                            </div>
                                        }
                                        {showFederalBranch &&
                                            <div>
                                                <div className={`${'dFlex jusctifyContentSpaceBetween mt50 ml40'} ${Styles.textBoldMain} `}>
                                                    <Text strong='strong4' variant={'xxlText'} color={'secondary'}>Federal Branch</Text>
                                                    <Icon onClick={() => { setShowFederalBranchContent(!showFederalBranchContent); setShowFederalAgency(false); setShowFederalAgencyContent(false) }} className={'mr45'} color={'primary'} type={showFederalBranchContent ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                                </div>
                                                {showFederalBranchContent &&
                                                    <div className={`${Styles.scrollWrapper1} ${Styles.scrollBar} ${"ml40 mt30 mw190"}`}>
                                                        <Text strong={'strong7'} variant={'smText'} color={'secondary'}>Alabma</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Georgia</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>virginia</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Maryland</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Washington DC</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                    </div>}
                                            </div>
                                        }
                                        {showFederalAgency &&
                                            <div>
                                                <div className={`${'dFlex jusctifyContentSpaceBetween mt50 ml50'} ${Styles.textBoldMain} `}>
                                                    <Text strong='strong4' variant={'xxlText'} color={'secondary'}>Federal Agency</Text>
                                                    <Icon onClick={() => setShowFederalAgencyContent(!showFederalAgencyContent)} className={'mr50'} color={'primary'} type={showFederalAgencyContent ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                                </div>
                                                {showFederalAgencyContent &&
                                                    <div className={`${Styles.scrollWrapper1} ${Styles.scrollBar} ${"ml40 mt30 mw190"}`}>
                                                        <Text strong={'strong7'} variant={'smText'} color={'secondary'}>Alabma</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Georgia</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>virginia</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Maryland</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Washington DC</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                        <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                    </div>}
                                            </div>
                                        }
                                    </>}
                                <div className={`${'dFlex jusctifyContentSpaceBetween mT30'} ${Styles.textBoldMain} `}>
                                    <Text family='roboto' strong='strong7' variant={'xxlText'} color={'secondary'}>Vendor</Text>
                                    <Icon onClick={vendorToggle} color={'primary'} type={showVendorContent ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                </div>
                                {showVendorContent &&
                                    <>
                                        {showVendorName &&
                                            <>
                                                <div className={`${'dFlex jusctifyContentSpaceBetween mT25 ml20'} ${Styles.textBoldMain} `}>
                                                    <Text strong='strong4' variant={'xxlText'} color={'secondary'}>Vendor Name</Text>
                                                    <Icon onClick={() => { setShowVendorNameContent(!showVendorNameContent); setShowVendorCounty(false) }} className={'mr20'} color={'primary'} type={showVendorNameContent ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                                </div>
                                                {showVendorNameContent &&
                                                    <div className={`${'mt50 ml25'} `}>
                                                        <div className={`${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                            <Text handleClick={() => setShowVendorCounty(!showVendorCounty)} className={`${'ml5'} ${showVendorCounty ? '' : 'cursor'}`} strong={showVendorCounty ? 'strong7' : 'strong4'} variant={'smText'} color={showVendorCounty ? 'secondary' : 'primary03'}>Alabma</Text>
                                                            <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Georgia</Text>
                                                            <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>virginia</Text>
                                                            <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Maryland</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Washington DC</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                            <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                            <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                        </div>

                                                        {showVendorCounty &&
                                                            <div className={`${'dFlex jusctifyContentSpaceBetween ml20 mT25'} ${Styles.textBoldMain} `}>
                                                                <Text className={'ml18'} strong='strong4' variant={'xxlText'} color={'primary'}>County</Text>
                                                                <Icon onClick={() => { setShowVendorOfficeNameThird(true); setShowVendorCounty(false) }} className={'mr45'} color={'primary'} type={showVendorOfficeNameThird ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                                            </div>
                                                        }
                                                        {showVendorOfficeNameThird &&
                                                            <>
                                                                <div className={`${'dFlex jusctifyContentSpaceBetween mT25'} ${Styles.textBoldMain} `}>
                                                                    <Text strong='strong4' variant={'xxlText'} color={'secondary'}>Office Name</Text>
                                                                    <Icon onClick={() => { setShowVendorOfficeNameThird(false); setShowVendorCounty(false); setShowVendorNameContent(false) }} className={'mr20'} color={'primary'} type={'minuscircle'} variant='icon_large' />
                                                                </div>
                                                                <div className={`${'mt50'} ${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                                    <Text className={'ml10'} strong='strong7' variant={'smText'} color='secondary'>Department of the Army</Text>
                                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Airforce</Text>
                                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Navy</Text>
                                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Defence</Text>
                                                                    <Text className={'mt15'} strong='strong4' variant={'smText'} color={'primary03'}>DOD-Office of the CIO</Text>
                                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                                </div>
                                                            </>
                                                        }
                                                    </div>}
                                            </>
                                        }
                                        {showVendorContractVehicle &&
                                            <>
                                                <div className={`${'dFlex jusctifyContentSpaceBetween mT25 ml20'} ${Styles.textBoldMain} `}>
                                                    <Text strong='strong4' variant={'xxlText'} color={'secondary'}>Contract Vehicle</Text>
                                                    <Icon onClick={() => { setShowVendorContractContent(!showVendorContractContent); setShowVendorContractCounty(false) }} className={'mr20'} color={'primary'} type={showVendorContractContent ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                                </div>
                                                {showVendorContractContent &&
                                                    <div className={`${'mt50 ml25'} `}>
                                                        <div className={`${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                            <Text handleClick={() => setShowVendorContractCounty(!showVendorContractCounty)} className={`${'ml5'} ${showVendorContractCounty ? '' : 'cursor'}`} strong={showVendorContractCounty ? 'strong7' : 'strong4'} variant={'smText'} color={showVendorCounty ? 'secondary' : 'primary03'}>Alabma</Text>
                                                            <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Georgia</Text>
                                                            <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>virginia</Text>
                                                            <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Maryland</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Washington DC</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                            <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                            <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                        </div>

                                                        {showVendorContractCounty &&
                                                            <div className={`${'dFlex jusctifyContentSpaceBetween ml20 mT25'} ${Styles.textBoldMain} `}>
                                                                <Text className={'ml18'} strong='strong4' variant={'xxlText'} color={'primary'}>County</Text>
                                                                <Icon onClick={() => { setShowVendorContractOfficeName(true); setShowVendorContractCounty(false) }} className={'mr45'} color={'primary'} type={showVendorContractOfficeName ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                                            </div>
                                                        }
                                                        {showVendorContractOfficeName &&
                                                            <>
                                                                <div className={`${'dFlex jusctifyContentSpaceBetween mT25'} ${Styles.textBoldMain} `}>
                                                                    <Text strong='strong4' variant={'xxlText'} color={'secondary'}>Office Name</Text>
                                                                    <Icon onClick={() => { setShowVendorContractOfficeName(false); setShowVendorContractCounty(false); setShowVendorContractContent(false) }} className={'mr20'} color={'primary'} type={'minuscircle'} variant='icon_large' />
                                                                </div>
                                                                <div className={`${'mt50'} ${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                                    <Text className={'ml10'} strong='strong7' variant={'smText'} color='secondary'>Department of the Army</Text>
                                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Airforce</Text>
                                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Navy</Text>
                                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Defence</Text>
                                                                    <Text className={'mt15'} strong='strong4' variant={'smText'} color={'primary03'}>DOD-Office of the CIO</Text>
                                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                                    <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                                </div>
                                                            </>
                                                        }
                                                    </div>}
                                            </>
                                        }
                                    </>
                                }
                                <div className={`${'dFlex jusctifyContentSpaceBetween mT30'} ${Styles.textBoldMain} `}>
                                    <Text family='roboto' strong='strong7' variant={'xxlText'} color={'secondary'}>Locations</Text>
                                    <Icon onClick={() => setShowLocation(!showLocation)} color={'primary'} type={showLocation ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                </div>
                                {showLocation &&
                                    <div className='mT34 mr20'>
                                        <Input placeholder={"Location Name"} />
                                        <div className={`${'dFlex jusctifyContentSpaceBetween ml20 mT25'} ${Styles.textBoldMain} `}>
                                            <Text strong='strong4' variant={'xxlText'} color={showLocationType ? 'secondary' : 'primary'}>Location Type</Text>
                                            <Icon className={'mr20'} onClick={() => { setShowLocationType(!showLocationType); setShowLocationCounty(false) }} color={'primary'} type={showLocationType ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                        </div>
                                        {showLocationType &&
                                            <div className={`${'mt50 ml25'} `}>
                                                <div className={`${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                    <Text handleClick={() => setShowLocationCounty(true)} className={`${'ml5'} ${showLocationCounty ? '' : 'cursor'}`} strong={showLocationCounty ? 'strong7' : 'strong4'} variant={'smText'} color={showLocationCounty ? 'secondary' : 'primary03'}>Alabma</Text>
                                                    <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Georgia</Text>
                                                    <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>virginia</Text>
                                                    <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Maryland</Text>
                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Washington DC</Text>
                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                    <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                    <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                </div>
                                                {showLocationCounty &&
                                                    <div className={`${'dFlex jusctifyContentSpaceBetween ml20 mT25'} ${Styles.textBoldMain} `}>
                                                        <Text className={'ml18'} strong='strong4' variant={'xxlText'} color={'primary'}>County</Text>
                                                        <Icon onClick={() => { setShowLocationOfficeName(true); setShowLocationCounty(false) }} className={'mr45'} color={'primary'} type={'pluscircle'} variant='icon_large' />
                                                    </div>}
                                                {showLocationOfficeName &&
                                                    <>
                                                        <div className={`${'dFlex jusctifyContentSpaceBetween mT25'} ${Styles.textBoldMain} `}>
                                                            <Text strong='strong4' variant={'xxlText'} color={'secondary'}>Office Name</Text>
                                                            <Icon onClick={() => { setShowLocationOfficeName(false); setShowPositionsType(false) }} className={'mr20'} color={'primary'} type={'minuscircle'} variant='icon_large' />
                                                        </div>
                                                        <div className={`${'mt50'} ${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                            <Text className={'ml10'} strong='strong7' variant={'smText'} color='secondary'>Department of the Army</Text>
                                                            <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Airforce</Text>
                                                            <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Navy</Text>
                                                            <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Defence</Text>
                                                            <Text className={'mt15'} strong='strong4' variant={'smText'} color={'primary03'}>DOD-Office of the CIO</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                            <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                            <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                        </div>
                                                    </>
                                                }
                                            </div>}
                                    </div>
                                }
                                <div className={`${'dFlex jusctifyContentSpaceBetween mT30'} ${Styles.textBoldMain} `}>
                                    <Text family='roboto' strong='strong7' variant={'xxlText'} color={'secondary'}>More</Text>
                                    <Icon onClick={() => setShowMore(!showMore)} color={'primary'} type={showMore ? "minuscircle" : 'pluscircle'} variant='icon_large' />
                                </div>
                                {showMore &&
                                    <div className='mT34 mr20'>
                                        <div className={`${'dFlex jusctifyContentSpaceBetween ml20 mT25'} ${Styles.textBoldMain} `}>
                                            <Text strong='strong4' variant={'xxlText'} color={showGovSense ? 'secondary' : 'primary'}>GovSense</Text>
                                            <Icon className={'mr20'} onClick={() => { setShowGovSense(!showGovSense); setShowMoreCounty(false) }} color={'primary'} type={showGovSense ? 'minuscircle' : 'pluscircle'} variant='icon_large' />
                                        </div>
                                        {showGovSense &&
                                            <div className={`${'mt50 ml25'} `}>
                                                <div className={`${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                    <Text handleClick={() => setShowMoreCounty(true)} className={`${'ml5'} ${showMoreCounty ? '' : 'cursor'}`} strong={showMoreCounty ? 'strong7' : 'strong4'} variant={'smText'} color={showMoreCounty ? 'secondary' : 'primary03'}>Alabma</Text>
                                                    <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Georgia</Text>
                                                    <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>virginia</Text>
                                                    <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Maryland</Text>
                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Washington DC</Text>
                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                    <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                    <Text className={'mt10 ml5'} strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                    <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                </div>
                                                {showMoreCounty &&
                                                    <div className={`${'dFlex jusctifyContentSpaceBetween ml20 mT25'} ${Styles.textBoldMain} `}>
                                                        <Text className={'ml18'} strong='strong4' variant={'xxlText'} color={'primary'}>County</Text>
                                                        <Icon onClick={() => { setShowMoreOfficeName(true); setShowMoreCounty(false) }} className={'mr45'} color={'primary'} type={'pluscircle'} variant='icon_large' />
                                                    </div>}
                                                {showMoreOfficeName &&
                                                    <>
                                                        <div className={`${'dFlex jusctifyContentSpaceBetween mT25'} ${Styles.textBoldMain} `}>
                                                            <Text strong='strong4' variant={'xxlText'} color={'secondary'}>Office Name</Text>
                                                            <Icon onClick={() => { setShowMoreOfficeName(false); setShowGovSense(false) }} className={'mr20'} color={'primary'} type={'minuscircle'} variant='icon_large' />
                                                        </div>
                                                        <div className={`${'mt50'} ${Styles.scrollWrapper1} ${Styles.scrollBar}`}>
                                                            <Text className={'ml10'} strong='strong7' variant={'smText'} color='secondary'>Department of the Army</Text>
                                                            <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Airforce</Text>
                                                            <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Navy</Text>
                                                            <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Department of the Defence</Text>
                                                            <Text className={'mt15'} strong='strong4' variant={'smText'} color={'primary03'}>DOD-Office of the CIO</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>New York</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Colorado</Text>
                                                            <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>DC Metro Region</Text>
                                                            <Text className={'mt10 ml10'} strong='strong4' variant={'smText'} color={'primary03'}>Huntsiville Region</Text>
                                                            <Text className={'mt10'} strong='strong4' variant={'smText'} color={'primary03'}>Sun Belt Region</Text>
                                                        </div>
                                                    </>
                                                }
                                            </div>}
                                    </div>
                                }
                            </div>}
                        {showfederalPlus &&
                            <div className='mt35'>
                                <Text className={'mt10'} strong='strong7' variant={'mlgText'} color={'black'}>+ Federal</Text>
                                <Text className={'mt10'} strong='strong7' variant={'mlgText'} color={'black'}>+ State</Text>
                                <Text className={'mt10'} strong='strong7' variant={'mlgText'} color={'black'}>+ County</Text>
                                <Text className={'mt10'} strong='strong7' variant={'mlgText'} color={'black'}>+ Muncipal</Text>
                                <Text className={'mt10'} strong='strong7' variant={'mlgText'} color={'black'}>+ Vendors</Text>
                            </div>
                        }

                        <div className='dFlex mT35 alignItemsCenter jusctifyContentSpaceBetween'>
                            <Text family='roboto' variant={"smText"} className={"op5 underline cursor textUnderlineHover"} color={"darkGray"}>Clear</Text>
                            <Text family='roboto' variant={"smText"} className={"op5 underline cursor textUnderlineHover"} color={"darkGray"}>Save Search</Text>
                            <Button btnClass='mr10' size={"xlmd"} variant={"solidPrimary"}>Search</Button>
                        </div>
                        <div className={`${Styles.mT44} ${Styles.sidebarMainFooter}`}>
                            {showfederalPlus &&
                                <Text family='roboto' variant={"smText"} className={"op5"} color={"darkGray"}>Fed Civilian</Text>
                            }
                            <Text family='roboto' variant={"smText"} className={"op5 mT27"} color={"darkGray"}>Intel</Text>
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