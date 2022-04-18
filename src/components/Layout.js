import React from 'react';
import '../styles/normalize.css'
import {layout} from "../styles/global.module.css";
import NavBar from "./Navigation/NavBar";
import PropTypes from "prop-types";

const Layout = ({children, isOpen, isNavFontBright, toggle}) => {

    return (
        <>
            <NavBar isNavFontBright={isNavFontBright} isOpen={isOpen} toggle={toggle}/>
            <div className={layout}>
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
