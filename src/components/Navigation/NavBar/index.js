import React, {useEffect} from 'react';
import {MobileIcon, Nav, NavBarContainer, NavItem, NavLinks, NavMenu} from "./NavbarElements";
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
            {/*{isLoading*/}
            {/*    ? <NavLoadingPlaceHolder/>*/}
            {/*    : */}
            <Nav id='nav-bar'>
                <NavBarContainer>
                    {/*<NavLogo to='/'>*/}
                    {/*    LANGUAGE*/}
                    {/*</NavLogo>*/}
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
                                go
                            </NavLinks>
                            <NavLinks
                                // data-aos="fade-down"
                                // data-aos-once="true"
                                // data-aos-delay="50"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                                offset={0}
                                // offset={getNavBarHeight()}
                                exact='true'
                                to="radical-section"
                                isbright={isNavFontBright}
                                title="RadicalAdvertising"
                            >
                                RadicalAdvertising
                            </NavLinks>
                            <NavLinks
                                // data-aos="fade-down"
                                // data-aos-once="true"
                                // data-aos-delay="100"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                                offset={0}
                                // offset={10}
                                // offset={getNavBarHeight()}
                                exact='true'
                                to="founders-section"
                                isbright={isNavFontBright}
                                title="Founders"
                            >
                                Founders
                            </NavLinks>
                            <NavLinks
                                // data-aos="fade-down"
                                // data-aos-once="true"
                                // data-aos-delay="150"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                                offset={0}
                                // offset={-10}
                                // offset={getNavBarHeight()}
                                // exact='true'
                                to="founders-experience"
                                isbright={isNavFontBright}
                                title="Experience"
                            >
                                Experience
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
                                // offset={-10}
                                // offset={getNavBarHeight()}
                                // exact='true'
                                to="network-section"
                                isbright={isNavFontBright}
                                title="Network"
                            >
                                Network
                            </NavLinks>
                            <NavLinks
                                // data-aos="fade-down"
                                // data-aos-once="true"
                                // data-aos-delay="200"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                                offset={0}
                                // offset={50}
                                // offset={getNavBarHeight()}
                                // exact='true'
                                to="contact-section"
                                isbright={isNavFontBright}
                                title="Contact"
                                className={`${footerInView ? "active" : ""}`}
                            >
                                Contact
                            </NavLinks>
                            <LangaugeToggle
                                // data-aos="fade-down"
                                // data-aos-once="true"
                                // data-aos-delay="250"
                                isbright={isNavFontBright}
                            />
                        </NavItem>
                    </NavMenu>
                    <MobileIcon
                        // onClick={() => toggle()}
                        isbright={isNavFontBright}
                    >
                        <Hamb isOpen={isOpen} toggle={toggle}/>
                    </MobileIcon>
                </NavBarContainer>
            </Nav>
            {/*}*/}
        </>
    );
};

export default Navbar;