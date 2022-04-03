import React from 'react';
import Logo from '../assets/fmcgologo.svg'

import {goHeroSection, fmcgoLogo, fmcgoTagline, fmcgoCopy, fmcgoTaglineGradient} from "../styles/go-hero.module.css";

const GoHero = () => {
    return (
        <section className={goHeroSection}>
                <Logo className={fmcgoLogo}/>
            <div className={fmcgoTagline}>
                We <sup className={fmcgoTaglineGradient}>move</sup> as fast <br/> as goods we <sup className={fmcgoTaglineGradient}>move</sup>
            </div>
            <div className={fmcgoCopy}>We are FMC_Go – newly established advertising agency specialized in work for FMCG and retail brands.<br/>
                We are a team of specialists and managers with many years of experience gathered in the biggest
                international and local agencies.<br/> Our mission is to deliver high-end strategic and creative thinking
                into everyday advertising for
                everyday brands.
            </div>
        </section>
    );
};

export default GoHero;