import React from 'react';
// import {Link} from "gatsby";
// import {handleLogout} from "../utils/LogoutHandler";
// import {navigate} from 'gatsby';
import {navbarGo, navbarGoGradient} from "../styles/navbar.module.css";



const NavBar = () => {

    return (
        <nav className={navbarGo}>
            <ul>
                <li>ContactUs</li>
                <li>Board</li>
                <li>Co</li>
                <li>Radical</li>
                <li className={navbarGoGradient}>go</li>
            </ul>
        </nav>
    );
};

export default NavBar;
