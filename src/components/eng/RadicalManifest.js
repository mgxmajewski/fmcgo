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
                <div className={manifestPointBullet}>Radical Empathy</div>
                <p className={manifestPointCopy}>
                    We see consumers as people. We recognize and address their needs and tensions.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Radical Expertise</div>
                <p className={manifestPointCopy}>
                    {/*Docieramy do najbardziej doświadczonych specjalistów*/}
                    {/*i&nbsp;dostarczamy najbardziej aktualną wiedzę marketingową.*/}
                    We reach out to the most experienced professionals and provide the most up-to-date marketing
                    knowledge.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Radical Creativity</div>
                <p className={manifestPointCopy}>
                    We create communication solutions and marketing innovations that make the most effective use of
                    specific media and&nbsp;the&nbsp;potential of new technologies.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-once="true" className={manifestPoint}>
                <div className={manifestPointBullet}>Radical Honesty</div>
                <p className={manifestPointCopy}>
                    We constantly monitor the effectiveness of our activities, respond to the "market feedback" on an
                    ongoing basis, and are able to&nbsp;honestly evaluate our own work.
                </p>
            </div>
        </section>
    );
};

export default RadicalManifest;