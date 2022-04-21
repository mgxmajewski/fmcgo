import React, {useEffect, useState} from 'react';
import '../styles/normalize.css'
import {layout} from "../styles/global.module.css";
import NavBar from "./Navigation/NavBar";
import PropTypes from "prop-types";
import {css} from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: flex;
  align-self: center;
  justify-self: center;
  margin: 0 auto;
  border-color: #ffffff;
`;

// const loaderContainer = {
//   display: "flex",
//   align-self: "center",
//   justify-self: "center",
//   height: "100vh"
// };

const placeHolderStyle = {
    background: "black",
    display: "flex",
    height: "100vh",
    width: "100vw"
};


// const NavLoadingPlaceHolder = () => {
//     const placeHolderStyle = {
//         height: "20vw",
//         width: "92vw"
//     };
//     return (
//         <div style={placeHolderStyle}></div>
//     )
//
// }


const Layout = ({children, isOpen, isNavFontBright, toggle}) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <>
            {isLoading
                ? <div style={placeHolderStyle}><ClipLoader loading={true} css={override} size={100}/></div>
                : <>
                    <NavBar isNavFontBright={isNavFontBright} isOpen={isOpen} toggle={toggle}/>
                    <div className={layout}>
                        {children}
                    </div>
                    <footer>
                        <p>&reg; 2022 fmcgo.pl</p>
                    </footer>
                </>
            }
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
