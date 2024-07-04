import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {experienceClients, spanCols2, spanCols2Skip1} from '../../styles/experience-section.module.css'

const ExperienceClientsLogos = () => {
    return (
        <div className={experienceClients}>
                <StaticImage
                    alt={'Develey logo'}
                    src="../../images/develey.png"
                    objectFit="contain"
                    className={spanCols2}
                />
                <StaticImage
                    alt={'Tchibo logo'}
                    src="../../images/tchibo.png"
                    objectFit="contain"
                    className={spanCols2}
                />
                <StaticImage
                    alt={'Travelist.pl logo'}
                    src="../../images/travelist.png"
                    objectFit="contain"
                    className={spanCols2}
                />
                <StaticImage
                    alt={'Archicom logo'}
                    src="../../images/archicom.jpeg"
                    objectFit="contain"
                    className={spanCols2Skip1}
                />
                <StaticImage
                    alt={'Triverna logo'}
                    src="../../images/triverna.jpeg"
                    objectFit="contain"
                    className={spanCols2}
                />
        </div>
    );
};

export default ExperienceClientsLogos;