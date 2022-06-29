import React, {useEffect, useState} from 'react';
import '../styles/normalize.css'
import {layout} from "../styles/global.module.css";
import NavBar from "./Navigation/NavBar";
import PropTypes from "prop-types";
import {css} from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import {useInView} from "react-intersection-observer";

const override = css`
  display: flex;
  align-self: center;
  justify-self: center;
  margin: 0 auto;
  border-color: #ffffff;
`;

const placeHolderStyle = {
    background: "black",
    display: "flex",
    height: "100vh",
    width: "100vw"
};

const Layout = ({children, isOpen, isNavFontBright, toggle}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [footerRef, footerInView] = useInView();

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <>
            {isLoading
                ? <div style={placeHolderStyle}><ClipLoader loading={true} css={override} size={100}/></div>
                :
                <>
                    <NavBar isNavFontBright={isNavFontBright} isOpen={isOpen} toggle={toggle}
                            footerInView={footerInView}/>
                    <div className={layout}>
                        {children}
                    </div>
                    <footer ref={footerRef}>
                        <p>
                            © 2022 by fmc_go<br/>
                            Wszelkie prawa zastrzeżone<br/>
                            built by
                            <a href="https://agilecat.io/" style={{textDecoration: "none"}}>
                                &nbsp;{"Agile >◊﬩◊< cat"}
                            </a>
                        </p>
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
