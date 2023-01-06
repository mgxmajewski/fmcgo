import React from 'react';
import Logo from '../assets/fmcgologo.svg'

import {
    fmcgoCopy,
    fmcgoLogo,
    fmcgoTaglineDesktop,
    fmcgoTaglineGradientSecondary,
    fmcgoTaglineGradientTricolor,
    fmcgoTaglineMobile,
    fmcgoVectorLogo,
    goHeroSection
} from "../styles/go-hero.module.css";
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
                We Are FMCgo! Jesteśmy agencją reklamową full-service specjalizującą się w&nbsp;tworzeniu komunikacji
                dla marek z&nbsp;kategorii FMCG, retail i&nbsp;commodity services. Tworzymy komunikację marketingową, która
                swoją moc wspierania sprzedaży czerpie w równym stopniu ze społecznego zaangażowania marki,
                jak i&nbsp;unikalnej propozycji produktu czy usługi. W FMCgo wierzymy, że&nbsp;advertising musi karmić się
                czymś więcej niż wyłącznie misją i&nbsp;lifestylem. Inaczej byłby po prostu religią.
            </div>
        </section>
    );
};

export default GoHero;