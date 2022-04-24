import React, {useEffect} from 'react';
import Logo from '../assets/fmcgologo.svg'

import {
    fmcgoCopy,
    fmcgoLogo,
    fmcgoTagline,
    fmcgoTaglineGradientSecondary,
    fmcgoTaglineGradientTricolor,
    fmcgoVectorLogo,
    goHeroSection
} from "../styles/go-hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const GoHero = ({heroSectionRef}) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <section ref={heroSectionRef} className={goHeroSection} id="go-section">
            <div
                data-aos="fade-right"
                data-aos-once="true"
                className={fmcgoLogo}>
                <Logo className={fmcgoVectorLogo}/>
            </div>
            <div
                data-aos="fade-left"
                data-aos-once="true"
                className={fmcgoTagline}>
                We <sup className={fmcgoTaglineGradientTricolor}>move</sup> as fast <br/> as goods we <sup
                className={fmcgoTaglineGradientSecondary}>move</sup>
            </div>
            <div
                data-aos="fade-up"
                data-aos-once="true"
                className={fmcgoCopy}>We are FMC_Go – newly established advertising agency specialized in work for FMCG
                and retail brands.<br/>
                We are a team of specialists and managers with many years of experience gathered in the biggest
                international and local agencies.<br/> Our mission is to deliver high-end strategic and creative
                thinking
                into everyday advertising for
                everyday brands.
            </div>
        </section>
    );
};

export default GoHero;