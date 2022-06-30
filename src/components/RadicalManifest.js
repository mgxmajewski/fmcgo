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
                    Widzimy w konsumentach ludzi. Dostrzegamy i&nbsp;adresujemy ich potrzeby i&nbsp;napięcia.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Radykalna Ekspertyza</div>
                <p className={manifestPointCopy}>
                    Docieramy do najbardziej doświadczonych specjalistów
                    i&nbsp;dostarczamy najbardziej aktualną wiedzę marketingową.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Radykalna Kreatywność</div>
                <p className={manifestPointCopy}>
                    Tworzymy rozwiązania komunikacyjne i&nbsp;innowacje marketingowe, które&nbsp;najefektywniej wykorzystują
                    specyfikę konkretnych mediów i&nbsp;potencjał nowych technologii.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Radykalna Szczerość</div>
                <p className={manifestPointCopy}>
                    Prowadzimy nieustanny monitoring efektywności prowadzonych
                    działań, na&nbsp;bieżąco reagujemy na&nbsp;„zwrot z rynku” i&nbsp;potrafimy
                    uczciwie ocenić własną pracę.
                </p>
            </div>
        </section>
    );
};

export default RadicalManifest;