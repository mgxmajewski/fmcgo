import React from 'react';
// import {Link} from "gatsby";
// import {handleLogout} from "../utils/LogoutHandler";
// import {navigate} from 'gatsby';
import {navbarGo} from "../styles/navbar.module.css";



const NavBar = () => {

    return (
        <nav className={navbarGo}>
            <ul>
                <li>ContactUs</li>
                <li>Board</li>
                <li>Co</li>
                <li>Radical</li>
                <li>go</li>
            </ul>
        </nav>
    );
};

export default NavBar;