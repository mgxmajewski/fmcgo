import React from 'react';
import {MobileNavLinkG, NavLangaugeToggle} from "./LanguageSelectMobileElement";

const LanguageSelectMobile = ({isbright, toggle}) => {

    return (
        <>
            <NavLangaugeToggle
                isbright={isbright}
            >
                <MobileNavLinkG
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    // offset={-80}
                    to="/"
                    onClick={toggle}
                    // className={`${footerInView ? "active" : ""}`
                    active={true}
                >
                    PL/
                </MobileNavLinkG>
                <MobileNavLinkG
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    // offset={-80}
                    to="/en"
                    onClick={toggle}
                    className="active"
                    // className={`${footerInView ? "active" : ""}`}
                >
                    EN/
                </MobileNavLinkG>
                <MobileNavLinkG
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    // offset={-80}
                    to="/fr"
                    onClick={toggle}
                    // className={`${footerInView ? "active" : ""}`}
                >
                    FR/
                </MobileNavLinkG>
                <MobileNavLinkG
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    // offset={-80}
                    to="/de"
                    onClick={toggle}
                    // className={`${footerInView ? "active" : ""}`}
                >
                    DE
                </MobileNavLinkG>
            </NavLangaugeToggle>
        </>
    );
};

export default LanguageSelectMobile;