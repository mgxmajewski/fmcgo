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
                Wir sind FMCgo! Wir&nbsp;sind die&nbsp;Full-Service-Werbeagentur, die&nbsp;sich auf&nbsp;die&nbsp;Gestaltung der&nbsp;Kommunikation
                für&nbsp;Marken in&nbsp;den&nbsp;Bereichen FMCG, Retail i&nbsp;Commodity Services spezialisiert. Wir&nbsp;kreieren
                Marketingkommunikation, die&nbsp;ihre&nbsp;verkaufsfördernde Wirkung sowohl aus&nbsp;dem&nbsp;sozialen Engagement
                der&nbsp;Marke als auch aus&nbsp;dem&nbsp;Alleinstellungsmerkmal des&nbsp;Produkts oder der&nbsp;Dienstleistung ableitet.
                Wir von&nbsp;FMCgo sind der&nbsp;Meinung, dass sich die&nbsp;Werbung nicht nur&nbsp;aus&nbsp;Mission und&nbsp;Lifestyle speisen muss.
                Sonst wäre es&nbsp;einfach eine Religion.
            </div>
        </section>
    );
};

export default GoHero;