import React from 'react';
import {hamb, hambCheckbox, hambLine} from '../styles/hamb.module.css'
import SideBar from "./Navigation/MobileNav";
const Hamb = ({isOpen, toggle, footerInView}) => {


    return (
        <>
            <input
                className={hambCheckbox}
                checked={isOpen}
                onChange={toggle}
                type="checkbox"
                id="hamb-checkbox"
            />
            <label
                className={hamb}
                htmlFor="hamb-checkbox"
            >
                <span
                    className={hambLine}
                    role="button"
                >
                </span>
            </label>
            <SideBar isOpen={isOpen} toggle={toggle} footerInView={footerInView}/>
        </>
    );
};

export default Hamb;