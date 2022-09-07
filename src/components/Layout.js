import React, {useEffect, useState} from 'react';
import '../styles/normalize.css'
import PropTypes from "prop-types";
import {css} from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import {useInView} from "react-intersection-observer";
import {Helmet} from "react-helmet";

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
                    <Helmet>
                        <meta charSet="utf-8"/>
                        <title>fmc_go - #RadicalAdvertising - FMCG/retail/commodity services</title>
                        <meta
                            name="description"
                            content="Jesteśmy agencją reklamową full-service specjalizującą się w tworzeniu komunikacji dla marek z kategorii FMCG, retail i commodity services."
                        />
                        <meta property="og:url"
                              content="https://fmcgo.pl"/>
                        <meta property="og:type" content="website"/>
                        <meta property="og:title" content="fmc_go #RadicalAdvertising"/>
                        <meta
                            property="og:description"
                            content="Jesteśmy agencją reklamową full-service specjalizującą się w tworzeniu komunikacji dla marek z kategorii FMCG, retail i commodity services."
                        />
                        <meta property="og:image" content="https://fmcgo.pl/gobadge.png"/>
                        <meta property="og:site_name" content="fmc_go"/>
                        <link rel="canonical" href="https://fmcgo.pl"/>
                        <meta name='robots' content='index, follow'/>
                    </Helmet>
                    <div>LOADED!</div>
                    <div>Test content</div>
                    {/*<NavBar isNavFontBright={isNavFontBright} isOpen={isOpen} toggle={toggle}*/}
                    {/*        footerInView={footerInView}/>*/}
                    {/*<div className={layout}>*/}
                    {/*    {children}*/}
                    {/*</div>*/}
                    {/*<footer ref={footerRef}>*/}
                    {/*    <p>*/}
                    {/*        © 2022 by fmc_go, built by*/}
                    {/*        <a href="https://agilecat.io/" style={{textDecoration: "none"}}>*/}
                    {/*            &nbsp;{"Agile >◊﬩◊< cat"}*/}
                    {/*        </a>*/}
                    {/*        <br/>*/}
                    {/*        Wszelkie prawa zastrzeżone*/}
                    {/*    </p>*/}
                    {/*</footer>*/}
                </>
            }
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
