import React from 'react';
import {
    manifestPoint,
    manifestPointBullet,
    manifestPointCopy,
    radicalManifestContainer,
} from '../styles/radical-manifest-section.module.css'

const RadicalManifest = () => {

    return (
        <section className={radicalManifestContainer}>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Radykalna Empatia</div>
                <p className={manifestPointCopy}>
                    Dostrzegamy najbardziej podstawowe motywacje, napięcia,<br/>
                    paradoksy poznawcze.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Radykalna Ekspertyza</div>
                <p className={manifestPointCopy}>
                    Docieramy do najbardziej doświadczonych specjalistów <br/>
                    i dostarczamy najbardziej aktualną wiedzę marketingową.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Radykalna Kreatywność</div>
                <p className={manifestPointCopy}>Tworzymy rozwiązania komunikacyjne i innowacje marketingowe,<br/>
                    które najefektywniej wykorzystują specyfikę konkretnych mediów,<br/>
                    potencjał najnowocześniejszych technologii<br/>
                    oraz możliwości budżetowych.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Radykalna Szczerość</div>
                <p className={manifestPointCopy}>
                    Prowadzimy nieustanny monitoring efektywności prowadzonych<br/>
                    działań, na bierząco reagujemy na „zwrot z rynku” i potrafimy<br/>
                    uczciwie ocenić własną pracę.
                </p>
            </div>
        </section>
    );
};

export default RadicalManifest;