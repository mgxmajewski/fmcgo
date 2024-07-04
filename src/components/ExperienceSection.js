import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {
    experienceClients,
    experienceCopy,
    experienceSection,
    experienceTagline,
    experienceLogos,
    experienceLogosCenteredRow,
    // plusStar
} from '../styles/experience-section.module.css'
import "aos/dist/aos.css";


const ExperienceSection = ({experienceSectionRef}) => {


    return (
        <section
            className={experienceSection}
            ref={experienceSectionRef}
            id="experience-section"
        >
            <div
                data-aos="fade-down"
                data-aos-once="true"
                className={experienceTagline}
            >
                <div>Go&nbsp;experience!</div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-once="true"
                className={experienceCopy}
            >
                Każda platforma komunikacji, każda kampania może "przekręcić licznik", jeśli&nbsp;tylko kreatywność połączy
                się <br/>z ekspertyzą marketingową, produktową i&nbsp;strategiczną.
            </div>
            <div className={experienceClients}>
                <div className={experienceLogos}>
                    <StaticImage
                        alt={'Develey logo'}
                        src="../images/develey.png"
                        objectFit="contain"
                    />
                    <StaticImage
                        alt={'Tchibo logo'}
                        src="../images/tchibo.png"
                        objectFit="contain"
                    />
                    <StaticImage
                        alt={'Travelist.pl logo'}
                        src="../images/travelist.png"
                        objectFit="contain"
                    />
                </div>
                <div className={experienceLogosCenteredRow}>
                    <StaticImage
                        alt={'Archicom logo'}
                        src="../images/archicom.jpeg"
                        objectFit="contain"
                    />
                    <StaticImage
                        alt={'Triverna logo'}
                        src="../images/triverna.jpeg"
                        objectFit="contain"
                    />
                </div>
            </div>
        </section>
    )
        ;
};

export default ExperienceSection;