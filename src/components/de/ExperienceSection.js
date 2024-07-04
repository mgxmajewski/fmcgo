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
                Jede Kommunikationsplattform, jede Kampagne kann den "Zähler drehen", wenn Kreativität mit
                Marketing-, <br/>
                Produkt- und Strategiekompetenz kombiniert wird.
            </div>
            <ExperienceClientsLogos/>
        </section>
    )
        ;
};

export default ExperienceSection;