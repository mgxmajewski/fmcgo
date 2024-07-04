import React from 'react';
import {experienceCopy, experienceSection, experienceTagline,} from '../styles/experience-section.module.css'
import "aos/dist/aos.css";
import ExperienceClientsLogos from "./common/ExperienceClientsLogos";


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
            <ExperienceClientsLogos/>
        </section>
    )
        ;
};

export default ExperienceSection;