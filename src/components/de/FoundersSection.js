import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import "aos/dist/aos.css";
import {
    founderContainer,
    founderCopy,
    founderImage,
    founderPictureContainer,
    foundersSection,
    founderTagline,
    founderTaglineName,
    founderTaglinePrefix,
    topPaddingDiv
} from '../../styles/founders-section.module.css'

const FoundersSection = ({data, aboveFounderOneRef, aboveFounderTwoRef, founderOneRef, founderTwoRef}) => {

    return (
        <>
            <section
                className={foundersSection}
                id="founders-section"
            >
                <div data-aos="fade-up" data-aos-once="true" id="slider-container" className={founderContainer}>
                    <div className={topPaddingDiv} ref={aboveFounderOneRef}></div>
                    <div className={founderPictureContainer} ref={founderOneRef}>
                        <StaticImage
                            className={founderImage}
                            objectPosition="75%"
                            data-aos="fade-in" data-aos-duration="4000"
                            alt={'Marcel Cegliński Photo'}
                            src="../images/marcel.jpg"
                        />
                    </div>
                    <div className={founderTagline}>
                        <span className={founderTaglinePrefix}>Go</span>
                        &nbsp;
                        <span className={founderTaglineName}>Marcel Cegliński!</span>
                    </div>
                    <div className={founderCopy}>
                        Designer, Art Director mit 12 Jahren Erfahrung <br/>
                        in großen Werbeagenturen. Autor von Hunderten <br/>
                        von Image- und Verkaufskampagnen. <br/>
                        Er hat Dutzende von kreativen Projekten für die sozialen <br/>
                        Kanäle durchgeführt. Schöpfer von visuellen Identitätssystemen, <br/>
                        UX/UI-Architektur, Experte für Design-to-Print <br/>
                        und Design-to-Digital.
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-once="true" className={founderContainer}>
                    <div className={topPaddingDiv} ref={aboveFounderTwoRef}></div>
                    <div className={founderPictureContainer} ref={founderTwoRef}>
                        <StaticImage
                            className={founderImage}
                            objectPosition="75%"
                            data-aos="fade-in" data-aos-duration="4000"
                            alt={'Filip Szperl Photo'}
                            src="../images/filip.jpg"
                        />
                    </div>
                    <div className={founderTagline}>
                        <span className={founderTaglinePrefix}>Go</span>
                        &nbsp;
                        <span className={founderTaglineName}>Filip Szperl!</span>
                    </div>
                    <div
                        className={founderCopy}
                    >
                        Copywriter mit 18 Jahren Erfahrung in der Arbeit <br/>
                        für große Marken in den Bereichen FMCG, Retail <br/>
                        und Commodity Services. Autor von Hunderten <br/>
                        von Werbekampagnen für die beliebtesten <br/>
                        Produkte und Dienstleistungen. <br/>
                        Schöpfer von Kommunikationsstrategien, <br/>
                        kreativen Plattformen und Produktinnovationen.
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-once="true" className={founderContainer}>
                    <div className={topPaddingDiv} ref={aboveFounderTwoRef}></div>
                    <div className={founderPictureContainer} ref={founderTwoRef}>
                        <StaticImage
                            className={founderImage}
                            objectPosition="75%"
                            data-aos="fade-in" data-aos-duration="4000"
                            alt={'Anna Turek Photo'}
                            src="../images/aniaturek.png"
                        />
                    </div>
                    <div className={founderTagline}>
                        <span className={founderTaglinePrefix}>Go</span>
                        &nbsp;
                        <span className={founderTaglineName}>Anna Turek!</span>
                    </div>
                    <div className={founderCopy}>
                        Account, Client Service Director mit über 10 Jahren Erfahrung <br/>
                        in der Arbeit&nbsp;für&nbsp;die&nbsp;anspruchsvollsten polnischen <br/>
                        internationalen Kunden. Verantwortlich für&nbsp;das&nbsp;Management <br/>
                        von&nbsp;360-Grad-Kampagnen&nbsp;und&nbsp;den&nbsp;Aufbau langfristiger <br/>
                        Beziehungen zu&nbsp;den&nbsp;Kunden der&nbsp;Agentur. Experte <br/>
                        für&nbsp;komplexe Marketingprozesse - Lotterien, <br/>
                        Produktinnovation und&nbsp;technologische Innovation.
                    </div>
                </div>
            </section>
        </>
    );
};

export default FoundersSection;