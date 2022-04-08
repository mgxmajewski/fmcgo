import React from 'react';
import {Nav, NavBarContainer, NavLogo} from "./NavbarElements";

const Navbar = () => {
    return (
            <>
                <Nav>
                    <NavBarContainer>
                        <NavLogo>
                            LANGUAGE
                        </NavLogo>
                    </NavBarContainer>
                </Nav>
            </>
    );
};

export default Navbar;