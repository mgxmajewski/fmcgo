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
                We Are FMCgo! We are a&nbsp;full-service advertising agency specializing in&nbsp;creating communications
                for&nbsp;brands in&nbsp;the&nbsp;FMCG, retail and&nbsp;commodity services categories. We create marketing communication
                that derives its&nbsp;sales promotion power from both the&nbsp;social commitment of&nbsp;the brand and&nbsp;the&nbsp;unique
                product or&nbsp;service offer. At&nbsp;FMCgo, we&nbsp;believe that advertising must be&nbsp;fueled by&nbsp;more than just mission
                and&nbsp;lifestyle. Otherwise it&nbsp;would simply be&nbsp;a&nbsp;religion.
            </div>
        </section>
    );
};

export default GoHero;