import React, {useEffect, useState} from 'react';
import '../styles/normalize.css'
import {layout} from "../styles/global.module.css";
import NavBar from "./Navigation/NavBar";
import PropTypes from "prop-types";


const NavLoadingPlaceHolder = () => {
    const placeHolderStyle = {
        height: "20vw",
        width: "92vw"
    };
    return (
        <div style={placeHolderStyle}></div>
    )

}


const Layout = ({children, isOpen, isNavFontBright, toggle}) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <>
            {isLoading
                ? <NavLoadingPlaceHolder>Loading</NavLoadingPlaceHolder>
                : <NavBar isNavFontBright={isNavFontBright} isOpen={isOpen} toggle={toggle}/>
            }
            <div className={layout}>
                {children}
                <footer>
                    <p>&reg; 2022 fmcgo.pl</p>
                </footer>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
