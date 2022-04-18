import React, {useState} from 'react';
import '../styles/normalize.css'
import {layout} from "../styles/global.module.css";
import NavBar from "./Navigation/NavBar";
// import '../styles/layout.css'
import PropTypes from "prop-types";
import SideBar from "./Navigation/SideBar";

const Layout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {/*<SideBar isOpen={isOpen} toggle={toggle} />*/}
            <NavBar isOpen={isOpen} toggle={toggle}/>
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
