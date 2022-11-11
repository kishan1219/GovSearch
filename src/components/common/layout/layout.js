import React from 'react';
import PropTypes from 'prop-types';
import Styles from './layout.module.scss'
import Sidebar from '../../shared/sidebar';
import Header from '../header';



const Layout = ({ children, layoutClass, isHeader, isTechnomile, isAccount, isAccountSetting, isSidebar,isSearch,isFederal,isGovSearchProfessional,isProfessional }) => {
    return (
        <div className={`${Styles.layoutMain} ${Styles.scrollBar} ${Styles.scrollWrapper}`} >
            {isHeader && <Header isSearch={isSearch} isFederal={isFederal} isGovSearchProfessional={isGovSearchProfessional} isProfessional={isProfessional}/>}
            {isTechnomile && <Header isTechnomileLogo={true} isGovSearchLogo={false} isSearch={false} isRightNav={true} isFederal={false} isAdmin={true} />}
            {isAccount && <Header isTechnomileLogo={true} isGovSearchLogo={false} isSearch={false} isRightNav={true} isFederal={false} isProfessionalEdition={true} />}
            {isAccountSetting && <Header isSearch={true} isRightNav={true} isFederal={false} isGovSearchProfessional={true} />}
            {isSidebar && <div className={`${layoutClass} ${Styles.sidebar}`}>
                <Sidebar  />
            </div>}

            <div className={Styles.mainContainer}>{children}</div>
        </div>
    );
}
Layout.defaultProps = {
    isHeader: true,
    isTechnomile: false,
    isAccount: false,
    isAccountSetting: false,
    isSidebar: true,
    isGovSearchProfessional:false,
    isProfessional:false,
}

Layout.protoType = {
    isHeader: PropTypes.bool,
    isTechnomile: PropTypes.bool,
    isAccount: PropTypes.bool,
    isAccountSetting: PropTypes.bool,
    isSidebar: PropTypes.bool,
    children: PropTypes.any,
    layoutClass: PropTypes.string,
    isGovSearchProfessional: PropTypes.bool,
}

export default Layout;
