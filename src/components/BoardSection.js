import React from 'react';
import {
    boardCopy,
    boardPersonContainer,
    boardPersonPictureLeft,
    boardPictures,
    boardSection,
    boardTagline
} from '../styles/board-section.module.css'
import {StaticImage} from "gatsby-plugin-image";

const BoardSection = () => {
    return (
        <section className={boardSection} id="board-section">
            <div className={boardTagline}>
                Our Network<br/>
                and Board of Directors
            </div>
            <div className={boardCopy}>
                We work along number or specialists from different fields of marketing and advertising. Each time we
                gather a tailor-made team of experts best suited with knowledge and experience for a given task. Our
                Board of Directors consists of founders and owners of renowned strategy and business consulting agencies
                and representatives from clients’ side .
            </div>
            <div className={boardPictures}>
                <div className={boardPersonContainer}>
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
                    <div className={boardPersonPictureLeft}>
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
                <div>
                    <b>Ana Maria Szutowicz<br/>TGTH</b><br/> We’ve served as heads of departments, creative
                    directors, senior creatives. <br/>For last 7 years we’ve been working together on hundreds of
                    campaigns for brands from all categories imaginable. Along this way, we’ve discovered that what
                    really turns us on is adverting that is meant to sell.
                </div>
                <div>
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