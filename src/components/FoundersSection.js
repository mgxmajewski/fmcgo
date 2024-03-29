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
} from '../styles/founders-section.module.css'

const filip = '../images/filip_szperl.jpg'
const marcel = '../images/marcel_ceglinski.jpg'
const ania = '../images/anna_turek.png'

const FoundersSection = ({data, aboveFounderOneRef, aboveFounderTwoRef, founderOneRef, founderTwoRef}) => {

    return (
        <>
            <section
                className={foundersSection}
                id="founders-section"
            >
                <div id="slider-container" data-aos="fade-up" data-aos-once="true"  className={founderContainer}>
                    <div className={topPaddingDiv} ref={aboveFounderOneRef}></div>
                    <div className={founderPictureContainer} ref={founderOneRef}>
                        <StaticImage
                            className={founderImage}
                            objectPosition="75%"
                            data-aos="fade-in" data-aos-duration="4000"
                            alt={'Marcel Cegliński Photo'}
                            src={marcel}
                        />
                    </div>
                    <div className={founderTagline}>
                        <span className={founderTaglinePrefix}>Go</span>
                        &nbsp;
                        <span className={founderTaglineName}>Marcel Cegliński!</span>
                    </div>
                    <div className={founderCopy}>
                        Designer, art director z 12-letnim doświadczeniem <br/>
                        w największych agencjach reklamowych. <br/>
                        Autor setek kampanii wizerunkowych i sprzedażowych. <br/>
                        Zrealizował dziesiątki projektów kreatywnych dedykowanych <br/>
                        kanałom społecznościowym. Twórca systemów identyfikacji <br/>
                        wizualnej, architektury UX/UI, ekspert design-to-print <br/>
                        i design-to-digital.
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
                            src={filip}
                        />
                    </div>
                    <div className={founderTagline}>
                        <span className={founderTaglinePrefix}>Go</span>
                        &nbsp;
                        <span className={founderTaglineName}>Filip Szperl!</span>
                    </div>
                    <div className={founderCopy}>
                        Copywriter z 18-letnim doświadczeniem w&nbsp;pracy <br/>
                        dla największych marek FMCG, retail <br/>
                        i&nbsp;commodity services. Autor setek kampanii reklamowych <br/>
                        dla&nbsp;najpopularniejszych produktów oraz&nbsp;usług. <br/>
                        Twórca strategii komunikacji, platform kreatywnych <br/>
                        i&nbsp;innowacji produktowych.
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
                            src={ania}
                        />
                    </div>
                    <div className={founderTagline}>
                        <span className={founderTaglinePrefix}>Go</span>
                        &nbsp;
                        <span className={founderTaglineName}>Anna Turek!</span>
                    </div>
                    <div className={founderCopy}>
                        Account, Client Service Director z&nbsp;ponad 10 letnim <br/>
                        doświadczeniem w&nbsp;pracy dla&nbsp;najbardziej wymagających polskich <br/>
                        i&nbsp;międzynarodowych Klientów. Odpowiedzialna za&nbsp;zarządzanie <br/>
                        kampaniami 360 stopni oraz za budowanie długotrwałych relacji <br/>
                        z&nbsp;Klientami agencji. Znawczyni problematyki złożonych procesów <br/>
                        marketingowych - loterii, innowacji produktowych <br/>
                        i&nbsp;innowacji technologicznych.
                    </div>
                </div>
            </section>
        </>
    );
};

export default FoundersSection;