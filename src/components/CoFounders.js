import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import "aos/dist/aos.css";
import {
    coFounder,
    coFoundersContainer,
    founderCopy,
    founderImage,
    founderName,
    founderPictureContainer
} from '../styles/co-founders.module.css'

const CoFounders = ({data, coSliderRef}) => {

    return (<>
            <div className={coFoundersContainer}>
                <div data-aos="fade-up" data-aos-once="true" id="slider-container" className={coFounder}>
                    <div className={founderPictureContainer}>
                        <StaticImage
                            className={founderImage}
                            objectPosition="75%"
                            data-aos="fade-in" data-aos-duration="4000"
                            alt={'Marcel Cegliński Photo'}
                            src="../images/marcel.jpg"
                        />
                    </div>
                    <div className={founderName}><span>Go</span> Marcel!</div>
                    <div className={founderCopy}>
                        Designer, art director z 12-letnim doświadczeniem<br/>
                        w największych agencjach reklamowych.<br/>
                        Autor setek kampanii wizerunkowych i sprzedażowych. <br/>
                        Zrealizował dziesiątki projektów kreatywnych dedykowanych <br/>
                        kanałom społecznościowym. Twórca systemów identyfikacji <br/>
                        wizualnej, architektury UX/UI, ekspert design-to-print <br/>
                        i design-to-digital.
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-once="true" className={coFounder}>
                    <div className={founderPictureContainer}>
                        <StaticImage
                            className={founderImage}
                            objectPosition="75%"
                            data-aos="fade-in" data-aos-duration="4000"
                            alt={'Filip Szperl Photo'}
                            src="../images/filip.jpg"
                        />
                    </div>
                    <div className={founderName}><span>Go</span> Filip!</div>
                    <div className={founderCopy}>
                        Copywriter z 18-letnim doświadczeniem w pracy <br/>
                        dla największych marek FMCG, retail <br/>
                        i commodity services. <br/>
                        Autor setek kampanii reklamowych <br/>
                        dla najpopularniejszych produktów i usług. <br/>
                        Twórca strategii komunikacji, platform kreatywnych <br/>
                        i innowacji produktowych
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoFounders;