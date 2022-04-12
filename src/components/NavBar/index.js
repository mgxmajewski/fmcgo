import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa'
import {MobileIcon, Nav, NavBarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavMenu} from "./NavbarElements";

const Navbar = ({toggle}) => {
    const [isNavFontBright, setIsNavFontBright] = useState('false');

    const toggleNavFontColor = () => {
        // This is offset which makes the font to change the color when it exceeds half of its height into new section.
        const navBarFontBottomEdge = 38

        // Calculations to get the right context for navBar font changes.
        const goSectionHeight = document.getElementById('go-section').clientHeight;
        const radicalSectionTopEdge = goSectionHeight + navBarFontBottomEdge
        const radicalSectionHeight = document.getElementById('radical-section').clientHeight;
        const radicalSectionBottomEdge = radicalSectionTopEdge + radicalSectionHeight
        const coSectionHeight = document.getElementById('co-section').clientHeight;
        const boardSectionTopEdge = radicalSectionBottomEdge + coSectionHeight
        const boardSectionHeight = document.getElementById('board-section').clientHeight;
        const boardSectionBottemEdge = boardSectionTopEdge + boardSectionHeight

        // Booleans checking if NavBar is over dark sections to change font color to white
        const navBarIsOverRadicalSection = window.scrollY >= radicalSectionTopEdge && window.scrollY <= radicalSectionBottomEdge
        const navBarIsOverBoardSection = window.scrollY >= boardSectionTopEdge && window.scrollY <= boardSectionBottemEdge

        if (navBarIsOverRadicalSection || navBarIsOverBoardSection) {
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
                    <MobileIcon onClick={toggle}>
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
                                offset={-80}
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