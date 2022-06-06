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
                className={fmcgoCopy}>Jesteśmy agencją reklamową full-service specjalizującą się w tworzeniu komunikacji dla marek z kategorii FMCG, <br/>retail i commodity services. Tworzymy komunikację marketingową, która swoją moc wspierania sprzedaży czerpie <br/>w równym stopniu ze społecznego zaangażowania marki, jak i unikalnej propozycji produktu czy usługi. <br/>Advertising nie jest religią, żeby miał się karmić wyłącznie misją i lifestylem.
            </div>
        </section>
    );
};

export default GoHero;