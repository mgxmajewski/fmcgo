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

const filip = '../../images/filip_szperl.jpg'
const marcel = '../../images/marcel_ceglinski.jpg'
const ania = '../../images/anna_turek.png'

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
                            src={marcel}
                        />
                    </div>
                    <div className={founderTagline}>
                        <span className={founderTaglinePrefix}>Go</span>
                        &nbsp;
                        <span className={founderTaglineName}>Marcel Cegliński!</span>
                    </div>
                    <div className={founderCopy}>
                        Designer, art director with 12 years of experience <br/>
                        in major advertising agencies. <br/>
                        Author of hundreds of image and sales campaigns. <br/>
                        He has completed dozens of creative projects dedicated <br/>
                        to social channels. Creator of visual identity systems, <br/>
                        UX/UI architecture, design-to-print <br/>
                        and design-to-digital expert.
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
                    <div
                        className={founderCopy}
                    >
                        Copywriter with 18 years of experience working <br/>
                        for major FMCG, retail and commodity services brands. <br/>
                        Author of hundreds of advertising campaigns for the most <br/>
                        popular products and services. Creator of communication <br/>
                        strategies, creative platforms and product innovations.
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
                        Go Anna Turek! Account, Client Service Director <br/>
                        with over 10 years of experience working <br/>
                        for&nbsp;the&nbsp;most demanding Polish and&nbsp;international clients. <br/>
                        Responsible for&nbsp;managing 360-degree campaigns and&nbsp;building <br/>
                        long-term relationships with&nbsp;agency clients. She is&nbsp;familiar <br/>
                        with the&nbsp;issues of&nbsp;complex marketing processes – lotteries, <br/>
                        product innovation and&nbsp;technological innovation.
                    </div>
                </div>
            </section>
        </>
    );
};

export default FoundersSection;