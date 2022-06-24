import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {experienceCopy, experienceSection, experienceTagline, plusStar} from '../styles/experience-section.module.css'
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
                <div>Go&nbsp;with&nbsp;experience!</div>
                <StaticImage
                    className={plusStar}
                    data-aos="fade-in" data-aos-duration="4000"
                    alt={'star graphic'}
                    src="../images/starplus.png"
                />
            </div>
            <div
                data-aos="fade-up"
                data-aos-once="true"
                className={experienceCopy}
            >
                Każda platforma komunikacji, każda kampania może „przekręcić licznik’, jeśli tylko kreatywność połączy
                się <br/>z ekspertyzą marketingową, produktową i strategiczną.
            </div>
        </section>
    )
        ;
};

export default ExperienceSection;