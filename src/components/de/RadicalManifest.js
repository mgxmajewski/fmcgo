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
                <div className={manifestPointBullet}>Radikale Empathie</div>
                <p className={manifestPointCopy}>
                    Wir sehen die Verbraucher als Menschen. Wir erkennen ihre Bedürfnisse und Spannungen und gehen
                    darauf ein.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Radikales Fachwissen</div>
                <p className={manifestPointCopy}>
                    Wir wenden uns an die erfahrensten Fachleute und stellen das&nbsp;aktuellste Marketingwissen zur
                    Verfügung.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Radikale Kreativität</div>
                <p className={manifestPointCopy}>
                    Wir schaffen Kommunikationslösungen und&nbsp;Marketinginnovationen, von denen die spezifischen Medien und
                    das Potenzial der neuen Technologien optimal genutzt werden.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Radikale Ehrlichkeit</div>
                <p className={manifestPointCopy}>
                    Wir überprüfen kontinuierlich die Wirksamkeit unserer Aktivitäten, reagieren laufend auf die "Marktantwort" und können unsere eigene Arbeit ehrlich bewerten.
                </p>
            </div>
        </section>
    );
};

export default RadicalManifest;