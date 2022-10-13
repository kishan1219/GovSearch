import React from 'react';
import PropTypes from 'prop-types';
import Styles from './layout.module.scss'



const Layout = ({ children}) => {
    return (
        <div className={Styles.layoutMain}>
            <div className={Styles.childreMain}>{children}</div>
        </div>
    );
}

Layout.protoType = {
    children: PropTypes.any,
    layoutClass: PropTypes.string,

}

export default Layout;
