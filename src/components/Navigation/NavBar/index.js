import React, {useEffect, useState} from 'react';
import {MobileIcon, Nav, NavBarContainer, NavItem, NavLinks, NavLoadingPlaceHolder, NavMenu} from "./NavbarElements";
import Hamb from "../../Hamb";
import LangaugeToggle from "../LanguageToggle"

const Navbar = ({isOpen, toggle, isNavFontBright}) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <>
            {isLoading
                ? <NavLoadingPlaceHolder/>
                : <Nav id='nav-bar'>
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
                                    offset={-80}
                                    // exact='true'
                                    to="go-section"
                                    isbright={isNavFontBright}
                                    title="go"
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
                                    title="Radical"
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
                                    title="Co"
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
                                    title="Board"
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
                                    title="Contact"
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
            }
        </>
    );
};

export default Navbar;