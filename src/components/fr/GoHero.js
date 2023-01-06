import React from 'react';
import Logo from '../../assets/fmcgologo.svg'

import {
    fmcgoCopy,
    fmcgoLogo,
    fmcgoTaglineDesktop,
    fmcgoTaglineGradientSecondary,
    fmcgoTaglineGradientTricolor,
    fmcgoTaglineMobile,
    fmcgoVectorLogo,
    goHeroSection
} from "../../styles/go-hero.module.css";
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
                We Are FMCgo! Nous sommes une&nbsp;agence de&nbsp;publicité à&nbsp;service complet, spécialisée
                dans la&nbsp;création de&nbsp;communications pour&nbsp;des&nbsp;marques dans les&nbsp;catégories suivantes:
                biens de&nbsp;consommation courante (FMCG, pour&nbsp;fast-moving consumer goods), commerce&nbsp;de
                détail et&nbsp;services interchangeables. Nous créons des&nbsp;communications marketing qui &nbsp;tirent leur pouvoir
                de&nbsp;soutien aux&nbsp;ventes autant de&nbsp;l’engagement social de&nbsp;la&nbsp;marque que&nbsp;de&nbsp;la&nbsp;proposition
                unique du&nbsp;produit ou&nbsp;du&nbsp;service. Chez FMCgo, nous&nbsp;sommes d’avis que&nbsp;la&nbsp;publicité
                doit se&nbsp;nourrir de&nbsp;plus que&nbsp;de&nbsp;la&nbsp;mission et&nbsp;du style de&nbsp;vie. Sinon, il&nbsp;s’agirait
                simplement d’une&nbsp;religion.
            </div>
        </section>
    );
};

export default GoHero;