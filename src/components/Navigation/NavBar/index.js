import React from 'react';
import {
    MobileIcon,
    Nav,
    NavBarContainer,
    NavItem,
    NavLinks,
    NavMenu
} from "./NavbarElements";
import Hamb from "../../Hamb";
import LangaugeToggle from "../LanguageToggle"

const Navbar = ({isOpen, toggle, isNavFontBright}) => {

    return (
        <>
            <Nav id='nav-bar'>
                <NavBarContainer>
                    {/*<NavLogo to='/'>*/}
                    {/*    LANGUAGE*/}
                    {/*</NavLogo>*/}
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-50}
                                // exact='true'
                                to="go-section"
                                isbright={isNavFontBright}
                            >
                                go
                            </NavLinks>
                            <NavLinks
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                // offset={getNavBarHeight()}
                                // exact='true'
                                to="radical-section"
                                isbright={isNavFontBright}
                            >
                                Radical
                            </NavLinks>
                            <NavLinks
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                // offset={getNavBarHeight()}
                                // exact='true'
                                to="co-section"
                                isbright={isNavFontBright}
                            >
                                Co
                            </NavLinks>
                            <NavLinks
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                // offset={getNavBarHeight()}
                                // exact='true'
                                to="board-section"
                                isbright={isNavFontBright}
                            >
                                Board
                            </NavLinks>
                            <NavLinks
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                // offset={getNavBarHeight()}
                                // exact='true'
                                to="contact-section"
                                isbright={isNavFontBright}
                            >
                                Contact
                            </NavLinks>
                            <LangaugeToggle
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
        </>
    );
};

export default Navbar;