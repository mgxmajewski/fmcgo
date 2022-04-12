import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa'
import {MobileIcon, Nav, NavBarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavMenu} from "./NavbarElements";

const Navbar = ({toggle}) => {
    const [isNavFontBright, setIsNavFontBright] = useState('false');

    const toggleNavFontColor = () => {

        const getElementHeight = name => document.getElementById(name).clientHeight;
        // This is offset which makes the font to change the color when it exceeds half of its height into new section.
        const navBarFontBottomEdge = 38

        // This is offset for contact form pseudo-element (gradient background)
        const contactFormPseudoElementOffset = window.innerWidth * .0145 + window.innerWidth * .03

        // Calculations to get the right context for navBar font changes.
        const goSectionHeight = getElementHeight('go-section');
        const radicalSectionTopEdge = goSectionHeight + navBarFontBottomEdge
        const radicalSectionHeight = getElementHeight('radical-section');
        const radicalSectionBottomEdge = radicalSectionTopEdge + radicalSectionHeight
        const coSectionHeight = getElementHeight('co-section');
        const boardSectionTopEdge = radicalSectionBottomEdge + coSectionHeight
        const boardSectionHeight = getElementHeight('board-section');
        const boardSectionBottemEdge = boardSectionTopEdge + boardSectionHeight
        const newsSectionHeight = getElementHeight('news-section');
        const contactSectionTopEdge = boardSectionBottemEdge + newsSectionHeight;
        const contactSectionFormEdge = contactSectionTopEdge + contactFormPseudoElementOffset


        // Booleans checking if NavBar is over dark sections to change font color to white
        const navBarIsOverRadicalSection = window.scrollY >= radicalSectionTopEdge && window.scrollY <= radicalSectionBottomEdge
        const navBarIsOverBoardSection = window.scrollY >= boardSectionTopEdge && window.scrollY <= boardSectionBottemEdge
        const navBarIsOverContactForm =  window.scrollY >= contactSectionFormEdge

        if (navBarIsOverRadicalSection || navBarIsOverBoardSection || navBarIsOverContactForm) {
            setIsNavFontBright('true')
        } else {
            setIsNavFontBright('false')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleNavFontColor)
    }, []);

    return (
        <>
            <Nav>
                <NavBarContainer>
                    {/*<NavLogo to='/'>*/}
                    {/*    LANGUAGE*/}
                    {/*</NavLogo>*/}
                    <MobileIcon isbright={isNavFontBright} onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
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
                            >
                                go
                            </NavLinks>
                            <NavLinks
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-80}
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
                                offset={-80}
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
                                offset={-80}
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
                                offset={-60}
                                // exact='true'
                                to="contact-section"
                                isbright={isNavFontBright}
                            >
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/">PL</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    );
};

export default Navbar;