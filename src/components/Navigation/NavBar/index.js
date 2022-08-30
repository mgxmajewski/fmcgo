import React, {useEffect} from 'react';
import {MobileIcon, Nav, NavBarContainer, NavItem, NavLinks, NavLinksG, NavMenu} from "./NavbarElements";
import Hamb from "../../Hamb";
import LangaugeToggle from "../LanguageToggle"
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = ({isOpen, toggle, isNavFontBright, footerInView}) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <>
            <Nav id='nav-bar'>
                <NavBarContainer>
                    <NavMenu>
                        <NavItem
                            data-aos="fade-down"
                            data-aos-once="true"
                        >
                            <NavLinks
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                exact='true'
                                to="go-section"
                                isbright={isNavFontBright}
                                title="go"
                                isDynamic={true}
                            >
                                Go
                            </NavLinks>
                            <NavLinks
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                                offset={0}
                                exact='true'
                                to="radical-section"
                                isbright={isNavFontBright}
                                title="RadicalAdvertising"
                            >
                                #RadicalAdvertising
                            </NavLinks>
                            <NavLinks
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                                offset={0}
                                exact='true'
                                to="founders-section"
                                isbright={isNavFontBright}
                                title="Founders"
                            >
                                Founders
                            </NavLinks>
                            <NavLinks
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                                offset={0}
                                exact='true'
                                to="network-section"
                                isbright={isNavFontBright}
                                title="Network"
                            >
                                Network
                            </NavLinks>
                            <NavLinks
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                                offset={0}
                                exact='true'
                                to="three-sixty-section"
                                isbright={isNavFontBright}
                                title="ThreeSixty"
                            >
                                360&deg;
                            </NavLinks>
                            <NavLinks
                                // This ternary disables active when the bottom of the page is reached.
                                // active class is disabled when the contact menu link is anabled.
                                activeClass={`${footerInView ? "false" : "active"}`}
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                                offset={0}
                                exact='true'
                                to="experience-section"
                                isbright={isNavFontBright}
                                title="Experience"
                            >
                                Experience
                            </NavLinks>
                            <NavLinks
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                                offset={0}
                                exact='true'
                                to="contact-section"
                                isbright={isNavFontBright}
                                title="Contact"
                                className={`${footerInView ? "active" : ""}`}
                            >
                                Let's Go
                            </NavLinks>
                            <NavLinksG
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                                offset={0}
                                exact='true'
                                to="/en"
                                isbright={isNavFontBright}
                                title="Contact"
                                className={`${footerInView ? "active" : ""}`}
                            >
                                en
                            </NavLinksG>
                            <NavLinksG
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                                offset={0}
                                exact='true'
                                to="/fr"
                                isbright={isNavFontBright}
                                title="Contact"
                                className={`${footerInView ? "active" : ""}`}
                            >
                                fr
                            </NavLinksG>
                            <NavLinksG
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                                offset={0}
                                exact='true'
                                to="/de"
                                isbright={isNavFontBright}
                                title="Contact"
                                className={`${footerInView ? "active" : ""}`}
                            >
                                de
                            </NavLinksG>
                            <NavLinksG
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                                offset={0}
                                exact='true'
                                to="/"
                                isbright={isNavFontBright}
                                title="Contact"
                                className={`${footerInView ? "active" : ""}`}
                            >
                                pl
                            </NavLinksG>
                            <LangaugeToggle
                                isbright={isNavFontBright}
                            />
                        </NavItem>
                    </NavMenu>
                    <MobileIcon
                        isbright={isNavFontBright}
                    >
                        <Hamb isOpen={isOpen} toggle={toggle} footerInView={footerInView}/>
                    </MobileIcon>
                </NavBarContainer>
            </Nav>
        </>
    );
};

export default Navbar;