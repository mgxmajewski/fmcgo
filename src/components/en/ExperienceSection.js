import React from 'react';
import {experienceCopy, experienceSection, experienceTagline} from '../../styles/experience-section.module.css'
import "aos/dist/aos.css";
import ExperienceClientsLogos from "../common/ExperienceClientsLogos";


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
            <ExperienceClientsLogos/>
        </section>
    )
        ;
};

export default ExperienceSection;