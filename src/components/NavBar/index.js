import React, {useEffect, useState} from 'react';
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

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNAv] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNAv(true)
        } else {
            setScrollNAv(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', changeNav)
    }, []);

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    {/*<NavLogo to='/'>*/}
                    {/*    LANGUAGE*/}
                    {/*</NavLogo>*/}
                    <MobileIcon onClick={toggle}>
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
                        <NavBtnLink to="/">PL</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    );
};

export default Navbar;