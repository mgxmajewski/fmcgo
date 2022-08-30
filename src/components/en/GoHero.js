import React from 'react';
import Logo from '../../assets/fmcgologo.svg'

import {
    fmcgoCopy,
    fmcgoLogo,
    fmcgoTaglineDesktop,
    fmcgoTaglineGradientSecondary,
    fmcgoTaglineGradientTricolor,
    fmcgoTaglineMobile,
    fmcgoVectorLogo,
    goHeroSection
} from "../../styles/go-hero.module.css";
import "aos/dist/aos.css";

const GoHero = ({heroSectionRef}) => {

    return (
        <section
            ref={heroSectionRef}
            className={goHeroSection}
            id="go-section"
        >
            <div
                data-aos="fade-right"
                data-aos-once="true"
                className={fmcgoLogo}>
                <Logo className={fmcgoVectorLogo}/>
            </div>
            <div
                data-aos="fade-left"
                data-aos-once="true"
                className={fmcgoTaglineMobile}
            >
                We <sup className={fmcgoTaglineGradientTricolor}>move</sup><br/>
                as fast <br/>
                as goods<br/>
                we <sup className={fmcgoTaglineGradientSecondary}>move</sup>
            </div>
            <div
                data-aos="fade-left"
                data-aos-once="true"
                className={fmcgoTaglineDesktop}>
                We <sup className={fmcgoTaglineGradientTricolor}>move</sup> as fast <br/> as goods we <sup
                className={fmcgoTaglineGradientSecondary}>move</sup>
            </div>
            <div
                data-aos="fade-up"
                data-aos-once="true"
                className={fmcgoCopy}
            >
                <h2>Go FMC_Go!</h2>
                We are a full-service advertising agency specializing in creating communications for brands in the FMCG,<br/>
                retail and commodity services categories. We create marketing communication that derives its sales<br/>
                promotion power from both the social commitment of the brand and the unique product or service offer.<br/>
                Advertising is not a religion to have to draw solely from mission and lifestyle.
            </div>
        </section>
    );
};

export default GoHero;