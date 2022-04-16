import React from 'react';
import {hamb, hambCheckbox, hambLine} from '../styles/hamb.module.css'
import SideBar from "./SideBar";
const Hamb = ({isOpen, toggle}) => {


    return (
        <>
            <input
                className={hambCheckbox}
                checked={isOpen}
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
                    onClick={() => toggle()}
                >
                </span>
            </label>
            <SideBar isOpen={isOpen} toggle={toggle}/>
        </>
    );
};

export default Hamb;