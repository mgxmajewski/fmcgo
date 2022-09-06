import React, {useEffect} from 'react';
import {LanguageSelect, MobileIcon, Nav, NavBarContainer, NavItem, NavLinks, NavMenu} from "./NavbarElements";
import Hamb from "../../Hamb";
import AOS from "aos";
import "aos/dist/aos.css";
import {navigate} from "gatsby";

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
                            <LanguageSelect
                                isbright={isNavFontBright}
                                value="fr" onChange={e => {
                                navigate(`/${e.target.value}`)
                            }}>
                                <option disabled="true" value="fr" hidden={true}>fr</option>
                                <option value="en/">en</option>
                                <option value="">pl</option>
                                <option value="de/">de</option>
                            </LanguageSelect>
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