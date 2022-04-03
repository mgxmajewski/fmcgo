import React from 'react';
import '../styles/normalize.css'
import {layout} from "../styles/global.module.css";
import NavBar from "./NavBar";
// import '../styles/layout.css'
import PropTypes from "prop-types";

const Layout = ({children}) => {
    return (
        <>
            <NavBar/>
            <div className={layout}>
                {/*content for each page*/}
                {children}
                <footer>
                    <p>&reg; 2022 fmcgo.pl</p>
                </footer>
            </div>
        </>
    )
        ;
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
