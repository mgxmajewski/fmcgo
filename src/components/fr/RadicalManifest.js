import React from 'react';
import {
    manifestPoint,
    manifestPointBullet,
    manifestPointCopy,
    radicalManifestContainer,
} from '../../styles/radical-manifest-section.module.css'

const RadicalManifest = () => {

    return (
        <section className={radicalManifestContainer}>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Empathie radicale</div>
                <p className={manifestPointCopy}>
                    Nous considérons les consommateurs comme des individus. Nous reconnaissons leurs besoins et leurs
                    tensions et y répondons.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Expertise radicale</div>
                <p className={manifestPointCopy}>
                    Nous atteignons des professionnels les plus expérimentés et leur fournissons les connaissances
                    marketing les plus récentes.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Créativité radicale</div>
                <p className={manifestPointCopy}>
                    Nous créons des solutions de communication et des innovations marketing qui exploitent au mieux la
                    spécificité des médias et le potentiel des nouvelles technologies.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Honnêteté radicale</div>
                <p className={manifestPointCopy}>
                    Nous surveillons en permanence l’efficacité des activités que nous entreprenons, nous réagissons en
                    continu au «retour d’informations du marché» et nous sommes en mesure d’évaluer honnêtement notre
                    propre travail.
                </p>
            </div>
        </section>
    );
};

export default RadicalManifest;