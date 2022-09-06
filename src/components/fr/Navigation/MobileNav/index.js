import React, {useEffect, useState} from 'react';

import {
    FmcgoVectorLogoWhite,
    MobileNavContainer,
    MobileNavLink,
    MobileNavMenu,
    MobileNavWrapper
} from "./MobileNavElements";
import LanguageSelectMobile from "../LanguageSelectMobile";

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
                                Go
                            </MobileNavLink>
                            <MobileNavLink
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                // offset={-80}
                                to="radical-icons"
                                onClick={toggle}
                            >
                                #RadicalAdvertising
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
                                to="three-sixty-section"
                                onClick={toggle}
                            >
                                360&deg;
                            </MobileNavLink>
                            <MobileNavLink
                                activeClass={`${footerInView ? "false" : "active"}`}
                                spy={true}
                                smooth={true}
                                duration={500}
                                // offset={-80}
                                to="experience-section"
                                onClick={toggle}
                            >
                                Experience
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
                            <LanguageSelectMobile
                                toggle={toggle}
                                isbright={'true'}
                            />
                        </MobileNavMenu>
                    </MobileNavWrapper>
                </MobileNavContainer>}
        </>
    );
};

export default SideBar;