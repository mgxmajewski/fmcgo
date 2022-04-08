import React from 'react';
import {FaBars} from 'react-icons/fa'
import {
    MobileIcon,
    Nav,
    NavBarContainer,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
    NavBtn,
    NavBtnLink
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to='/'>
                        LANGUAGE
                    </NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="#go-section">
                                go
                            </NavLinks>
                            <NavLinks to="#radical-section">
                                Radical
                            </NavLinks>
                            <NavLinks to="#co-section">
                                Co
                            </NavLinks>
                            <NavLinks to="#board-section">
                                Board
                            </NavLinks>
                            <NavLinks to="#contact-section">
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    );
};

export default Navbar;