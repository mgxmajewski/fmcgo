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
                        Designer, directeur artistique avec 12ans <br/>
                        d’expérience dans les plus grandes agences <br/>
                        de publicité. Auteur de centaines de campagnes <br/>
                        d’image et de vente. Il a réalisé des dizaines <br/>
                        de projets créatifs dédiés aux canaux des médias sociaux. <br/>
                        Créateur de systèmes d’identité visuelle, architecte UX/UI <br/>
                        (expérience utilisateur/interface utilisateur),<br/>
                        expert en design-to-print et design-to-digital.
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
                        Concepteur-rédacteur avec 18ans d’expérience <br/>
                        pour les plus grandes marques: biens de consommation <br/>
                        courante (FMCG, pour fast-moving consumer goods), <br/>
                        commerce de détail (retail) et services relatifs <br/>
                        aux marchandises (commodity services). <br/>
                        Auteur de centaines de campagnes publicitaires<br/>
                        pour les produits et services les plus populaires. <br/>
                        Créateur de stratégies de communication, <br/>
                        de plateformes créatives et d’innovations <br/>
                        en matière de produit.
                    </div>
                </div>
            </section>
        </>
    );
};

export default FoundersSection;