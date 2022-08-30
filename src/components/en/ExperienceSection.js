import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {
    experienceClients,
    experienceCopy,
    experienceSection,
    experienceTagline,
} from '../../styles/experience-section.module.css'
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
                Every communication platform, every campaign can "boost the count" if only creativity is combined with
                marketing, <br/>product and strategic expertise.
            </div>
            <div className={experienceClients}>
                <div>
                    <StaticImage
                        alt={'Develey logo'}
                        src="../images/develey.png"
                    />
                </div>
                <div>
                    <StaticImage
                        alt={'Tchibo logo'}
                        src="../images/tchibo.png"
                    />
                </div>
                <div>
                    <StaticImage
                        alt={'Travelist.pl logo'}
                        src="../images/travelist.png"
                    />
                </div>
                <div>
                    <StaticImage
                        alt={'Echo Investment logo'}
                        src="../images/echoinvestment.png"
                    />
                </div>
            </div>
        </section>
    )
        ;
};

export default ExperienceSection;