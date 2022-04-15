import React from 'react';
import {hamb, hambCheckbox, hambLine} from '../styles/hamb.module.css'

const Hamb = () => {
    return (
        <>
            <input className={hambCheckbox} type="checkbox" id="hamb-checkbox"/>
            <label className={hamb} htmlFor="hamb-checkbox"><span className={hambLine}></span></label>
        </>
    );
};

export default Hamb;