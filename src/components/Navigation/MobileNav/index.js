import React, {useEffect, useState} from 'react';

import {FmcgoVectorLogoWhite, MobileNavContainer, MobileNavLink, MobileNavMenu, MobileNavWrapper} from "./MobileNavElements";
import LangaugeToggle from "../LanguageToggle";

const SideBar = ({isOpen, toggle, footerInView}) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <>
            {isLoading
                ? <></>
                :
                <MobileNavContainer isOpen={isOpen} onClick={toggle}>
                    <MobileNavWrapper>
                        <FmcgoVectorLogoWhite/>
                        <MobileNavMenu>
                            <MobileNavLink
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                // exact='true'
                                to="go-section"
                                onClick={toggle}
                            >
                                go
                            </MobileNavLink>
                            <MobileNavLink
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                // offset={-80}
                                to="radical-section"
                                onClick={toggle}
                            >
                                RadicalAdvertising
                            </MobileNavLink>
                            <MobileNavLink
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                // offset={-80}
                                to="founders-section"
                                onClick={toggle}
                            >
                                Founders
                            </MobileNavLink>
                            <MobileNavLink
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                // offset={-80}
                                to="founders-experience"
                                onClick={toggle}
                            >
                                Experience
                            </MobileNavLink>
                             <MobileNavLink
                                activeClass={`${footerInView ? "false" : "active"}`}
                                spy={true}
                                smooth={true}
                                duration={500}
                                // offset={-80}
                                to="network-section"
                                onClick={toggle}
                            >
                                Network
                            </MobileNavLink>
                            <MobileNavLink
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                // offset={-80}
                                to="contact-section"
                                onClick={toggle}
                                className={`${footerInView ? "active" : ""}`}
                            >
                                Let's Go
                            </MobileNavLink>
                            <LangaugeToggle
                                isbright={'true'}
                            />
                        </MobileNavMenu>
                    </MobileNavWrapper>
                </MobileNavContainer>}
        </>
    );
};

export default SideBar;