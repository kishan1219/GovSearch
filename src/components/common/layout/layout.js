import React from 'react';
import PropTypes from 'prop-types';
import Styles from './layout.module.scss'
import Sidebar from '../../shared/sidebar/sidebar';



const Layout = ({ children, layoutClass }) => {
    return (
        <div className={Styles.layoutMain}>
            <div className={`${layoutClass} ${Styles.layout}`}>
                <Sidebar />
            </div>
            <div className={Styles.childreMain}>{children}</div>
        </div>
    );
}

Layout.protoType = {
    children: PropTypes.any,
    layoutClass: PropTypes.string,

}

export default Layout;
