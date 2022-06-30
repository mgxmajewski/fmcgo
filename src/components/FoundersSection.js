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

const FoundersSection = ({data, aboveFounderOneRef, aboveFounderTwoRef, founderOneRef, founderTwoRef}) => {

    return (
        <>
            <section
                className={foundersSection}
                id="founders-section"
            >
                <div
                    data-aos="fade-up"
                    data-aos-once="true"
                    id="slider-container"
                    className={founderContainer}
                >
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
                        Copywriter z 18-letnim doświadczeniem w&nbsp;pracy <br/>
                        dla największych marek FMCG, retail <br/>
                        i&nbsp;commodity services. Autor setek kampanii reklamowych <br/>
                        dla&nbsp;najpopularniejszych produktów oraz&nbsp;usług. <br/>
                        Twórca strategii komunikacji, platform kreatywnych <br/>
                        i&nbsp;innowacji produktowych.
                    </div>
                </div>
            </section>
        </>
    );
};

export default FoundersSection;