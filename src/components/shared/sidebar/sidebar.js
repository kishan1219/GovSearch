import React, { useState } from 'react'
import Button from '../button'
import Icon from '../icon'
import Input from '../input'
import ListGroup from '../list-group'
import ListItem from '../list-item/list-item'
import Text from '../text'
import Styles from './sidebar.module.scss'
const Sidebar = () => {
    const [sidebarHide, setSidebarHide] = useState(true)
    const [sidebarContentHide, setSidebarContentHide] = useState(false)
    const toggle = () => {
        setSidebarContentHide(true);
        setSidebarHide(false)
    }
    const toggleClose = () => {
        setSidebarContentHide(false);
        setSidebarHide(true)
    }
    return (
        <div className={Styles.container}>
            {sidebarHide && <div>
                <ListGroup className={Styles.menu}>
                    <ListItem>
                        <Icon onClick={toggle} className={sidebarContentHide ? Styles.burgerIcon : ''} type='equal' color={"white"} variant='icon_xlarge' />
                    </ListItem>
                    <ListItem className={Styles.mt22}>
                        <Icon type='multipleuser' color={"white"} variant='icon_xlarge' />
                        <Text color={"white"} family="roboto" variant="mlgText">Contacts</Text>
                    </ListItem>
                    <ListItem>
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
            {sidebarContentHide && <div className={Styles.sidebarMain}>
                <div className={Styles.advanceSearchText}>
                    <Text family='roboto' className={"op5 cursor"} color={"gray"} variant={"lgIconText"}>Advanced Search</Text>
                    <Icon className={sidebarHide ? Styles.burgerIcon : ''} onClick={toggleClose} type='close' color={"gray"} variant='icon_xlarge' />
                </div>
                <Text family='roboto' variant={"smText"} className={"op5 mt25 ml20 underline cursor"} color={"darkGray"}>Saved Searches</Text>
                <div className='dFlex'>
                    <div className={Styles.inputMain}>
                        <Input placeholder={"Search"} />
                        <Icon type='search' color={"black"} variant='icon_xlarge' />

                    </div>
                    <div className={"ml30"}>
                        <Icon className={"op5"} type='hierarchy' color={"black"} variant='icon_xlarge' />
                    </div>
                </div>
                {/*div for button pill start */}
                <div className='mT30' />
                {/*div for button pill end */}
                <div className={Styles.scrollBar}>
                    <div className='mT34'>
                        <div className={`${'dFlex jusctifyContentSpaceBetween'} ${Styles.textBoldMain} `}>
                            <Text family='roboto' strong='strong7' variant={'xxlText'} color={'secondary'}>Contacts</Text>
                            <Icon color={'primary'} type='pluscircle' variant='icon_large' />
                        </div>
                        <div className={`${'dFlex jusctifyContentSpaceBetween mT30'} ${Styles.textBoldMain} `}>
                            <Text family='roboto' strong='strong7' variant={'xxlText'} color={'secondary'}>Positions</Text>
                            <Icon color={'primary'} type='pluscircle' variant='icon_large' />
                        </div>
                        <div className={`${'dFlex jusctifyContentSpaceBetween mT30'} ${Styles.textBoldMain} `}>
                            <Text family='roboto' strong='strong7' variant={'xxlText'} color={'secondary'}>Offices</Text>
                            <Icon color={'primary'} type='pluscircle' variant='icon_large' />
                        </div>
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
                    </div>
                    <div className='dFlex mT35 alignEnd jusctifyContentSpaceBetween'>
                        <Text family='roboto' variant={"smText"} className={"op5 underline cursor"} color={"darkGray"}>Clear</Text>
                        <Text family='roboto' variant={"smText"} className={"op5 underline cursor"} color={"darkGray"}>Save Search</Text>
                        <Button size={"xmd01"} variant={"solidPrimary"}>Search</Button>
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