import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {
    experienceClients,
    experienceLogos,
    experienceLogosCenteredRow
} from '../../styles/experience-section.module.css'

const ExperienceClientsLogos = () => {
    return (
        <div className={experienceClients}>
            <div className={experienceLogos}>
                <StaticImage
                    alt={'Develey logo'}
                    src="../../images/develey.png"
                    objectFit="contain"
                />
                <StaticImage
                    alt={'Tchibo logo'}
                    src="../../images/tchibo.png"
                    objectFit="contain"
                />
                <StaticImage
                    alt={'Travelist.pl logo'}
                    src="../../images/travelist.png"
                    objectFit="contain"
                />
            </div>
            <div className={experienceLogosCenteredRow}>
                <StaticImage
                    alt={'Archicom logo'}
                    src="../../images/archicom.jpeg"
                    objectFit="contain"
                />
                <StaticImage
                    alt={'Triverna logo'}
                    src="../../images/triverna.jpeg"
                    objectFit="contain"
                />
            </div>
        </div>
    );
};

export default ExperienceClientsLogos;