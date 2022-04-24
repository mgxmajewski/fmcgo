import React, {useEffect} from 'react';
import {
    boardCopy,
    boardPersonContainer,
    boardPersonPictureLeft,
    boardPictures,
    boardSection,
    boardTagline
} from '../styles/board-section.module.css'
import {StaticImage} from "gatsby-plugin-image";
import AOS from "aos";
import "aos/dist/aos.css";


const BoardSection = ({boardSectionRef}) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <section ref={boardSectionRef} className={boardSection} id="board-section">
            <div
                data-aos="fade-down"
                data-aos-once="true"
                className={boardTagline}
            >
                Our Network<br/>
                and Board of Directors
            </div>
            <div
                data-aos="fade-up"
                data-aos-once="true"
                className={boardCopy}>
                We work along number or specialists from different fields of marketing and advertising. Each time we
                gather a tailor-made team of experts best suited with knowledge and experience for a given task. Our
                Board of Directors consists of founders and owners of renowned strategy and business consulting agencies
                and representatives from clients’ side .
            </div>
            <div className={boardPictures}>
                <div
                    data-aos="fade-right"
                    data-aos-once="true"
                    className={boardPersonContainer}>
                    <div className={boardPersonPictureLeft}>
                        <StaticImage
                            alt={'Ana Maria Szutowicz Photo'}
                            src="../images/director1.png"
                            transformOptions={{
                                fit: "cover",
                                // cropFocus: "attention"
                                // cropFocus: 90
                            }}
                        />
                    </div>
                </div>
                <div className={boardPersonContainer}>
                    <div
                        data-aos="fade-left"
                        data-aos-once="true"
                        className={boardPersonPictureLeft}>
                        <StaticImage
                            alt={'Henryk Klawe Photo'}
                            src="../images/director2.png"
                            transformOptions={{
                                fit: "cover",
                                // cropFocus: "attention"
                                // cropFocus: 90
                            }}
                        />
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-once="true"
                >
                    <b>Ana Maria Szutowicz<br/>TGTH</b><br/> We’ve served as heads of departments, creative
                    directors, senior creatives. <br/>For last 7 years we’ve been working together on hundreds of
                    campaigns for brands from all categories imaginable. Along this way, we’ve discovered that what
                    really turns us on is adverting that is meant to sell.
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-once="true"
                >
                    <b>Henryk Klawe<br/>Y&Lovers</b><br/>We’ve served as heads of departments, creative directors,
                    senior creatives. <br/>For last 7 years we’ve been working together on hundreds of campaigns for
                    brands from all categories imaginable. Along this way, we’ve discovered that what really turns us on
                    is adverting that is meant to sell.
                </div>

            </div>

        </section>
    );
};

export default BoardSection;