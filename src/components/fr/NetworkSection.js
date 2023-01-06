import React, {useEffect, useState} from 'react';
import {
    networkCopy,
    networkPersonContainer,
    networkPersonPictureLeft,
    networkPictures,
    networkSection,
    networkTagline,
    plusStar
} from '../../styles/network-section.module.css'
import {StaticImage} from "gatsby-plugin-image";
import "aos/dist/aos.css";
import NetworkPlusStub from "./NetworkPlusStub";
import {useWindowSize} from "../../hooks/useWindowSize";

const anna = '../images/anna_szutowicz.png'
const klaudyna = '../images/klaudyna_kaminska.png'
const henryk = '../images/henryk_klawe.png'
const bartosz = '../images/bartosz_balewski.png'
const artur = '../images/artur_kotowski.png'
const lukasz = '../images/lukasz_kepinski.png'
const wojtek = '../images/wojtek_morawski.png'
const kacper = '../images/kacper_kazmierowski.png'
const miroslaw = '../images/miroslaw_filiciak.png'
const karolina = '../images/karolina_balmas.png'

const NetworkSection = ({boardSectionRef}) => {

    const windowSize = useWindowSize();
    const [isShowMore, setIsShowMore] = useState(false);

    const toggleNetwork = () => {
        setIsShowMore(!isShowMore);
    }

    useEffect(() => {
        if (windowSize.width > 900) {
            setIsShowMore(true);
        } else if (windowSize.width <= 900) {
            setIsShowMore(false);
        }
    }, [windowSize.width])

    return (
        <section ref={boardSectionRef} className={networkSection} id="network-section">
            <div
                data-aos="fade-down"
                data-aos-once="true"
                className={networkTagline}
            >
                <div>Go <span>Network!</span></div>

            </div>
            <div className={plusStar}>
                <StaticImage
                    // data-aos="fade-in" data-aos-duration="4000"
                    alt={'star graphic'}
                    src="../images/starplus.png"
                />
            </div>
            <div
                data-aos="fade-up"
                data-aos-once="true"
                className={networkCopy}>
                Nous élaborons des recommandations stratégiques et des solutions créatives fondées sur les connaissances
                uniques du marché et l’expérience de nos experts - stratèges, chercheurs, sémioticiens, spécialistes des
                médias et de la communication numérique. Nos experts sont aussi bien des propriétaires de grandes
                entreprises de recherche et de stratégie que des professeurs d’universités de premier plan.
            </div>
            <div className={networkPictures}>
                <div
                    data-aos="fade-up"
                    data-aos-once="true"
                    className={networkPersonContainer}>
                    <div className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Ana Maria Szutowicz Photo'}
                            src={anna}
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>Anna Maria Szutowicz</b>
                        <br/>
                        PDG et fondateur de l’agence de recherche et de stratégie Y&LOVERS. Stratège, chercheuse,
                        ethnographe de notre vie de consommateur, expert du renouvellement des générations et du
                        marketing auprès des jeunes. Membre du jury d’Effie. Membre de l’association PTBRiO.
                    </p>
                </div>
                <div className={networkPersonContainer}>
                    <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Klaudyna Kamińska Photo'}
                            src={klaudyna}
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>Klaudyna Kamińska</b>
                        <br/>
                        Directeur de la recherche à l’agence Y&LOVERS. Chercheuse, ethnographe et linguiste. Elle se
                        spécialise dans la recherche exploratoire, elle cherche des informations efficaces sur les
                        consommateurs et des solutions innovantes pour l’industrie des biens de consommation courante.
                    </p>
                </div>
                <div className={networkPersonContainer}>
                    <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Henryk Klawe Photo'}
                            src={henryk}
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        {isShowMore
                            ? <>
                                <b>Henryk Klawe</b>
                                <br/>
                                Cofondateur de l’agence de conseil Together. Stratège, conseiller en marques. Il dirige
                                les processus d’innovation, de recherche d’objectifs et de transformation numérique de
                                grandes entreprises et d’organisations à but non lucratif.
                            </>
                            : <></>
                        }
                    </p>
                </div>
                <div
                    className={networkPersonContainer}>
                    <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Bartosz Balewski Photo'}
                            src={bartosz}
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        {isShowMore
                            ? <>
                                <b>Bartosz Balewski</b>
                                <br/>
                                Cofondateur de l’agence de conseil Together. Expert en expérience utilisateur (UX),
                                créateur de stratégies d’expérience client (customer experience). Mentor chez Google for
                                Startup Accelerator. Il enseigne les processus de conception à SWPS, entre autres.
                            </>
                            : <></>
                        }
                    </p>
                </div>
                {isShowMore
                    ? <>
                        <div className={networkPersonContainer}>
                            <div
                                data-aos="fade-up"
                                data-aos-once="true"
                                className={networkPersonPictureLeft}>
                                <StaticImage
                                    alt={'Artur Kotowski Photo'}
                                    src={artur}
                                />
                            </div>
                            <p data-aos="fade-up" data-aos-once="true">
                                <b>Artur Kotowski</b>
                                <br/>
                                Impliqué dans la&nbsp;production de&nbsp;longs métrages,
                                de&nbsp;documentaires et&nbsp;de&nbsp;publicités depuis 1996.
                                Il a&nbsp;longtemps dirigé le&nbsp;département de&nbsp;production
                                de&nbsp;l’École de&nbsp;cinéma Andrzej-Wajda et&nbsp;de CUT/CUT Production House.
                                Diplômé et&nbsp;chargée de&nbsp;cours à&nbsp;École nationale supérieure
                                de&nbsp;cinéma, télévision&nbsp;et théâtre de&nbsp;Łódź (PWSFTViT).
                            </p>
                        </div>
                        <div className={networkPersonContainer}>
                            <div
                                data-aos="fade-up"
                                data-aos-once="true"
                                className={networkPersonPictureLeft}>
                                <StaticImage
                                    alt={'Łukasz Kepiński Photo'}
                                    src={lukasz}
                                />
                            </div>
                            <p data-aos="fade-up" data-aos-once="true">
                                <b>Łukasz Kępiński</b>
                                <br/>
                                PDG et fondateur de l’agence Tears of Joy.
                                Expert en marketing d’influence, médias sociaux et jeux vidéo. Organisateur du plus
                                grand événement cyclique pour les créateurs - Środa, #dzienbloga.
                            </p>
                        </div>

                        <div className={networkPersonContainer}>
                            <div
                                data-aos="fade-up"
                                data-aos-once="true"
                                className={networkPersonPictureLeft}>
                                <StaticImage
                                    alt={'Wojciech Morawski Photo'}
                                    src={wojtek}
                                />
                            </div>
                            <p data-aos="fade-up" data-aos-once="true">
                                <b>Wojciech Morawski</b>
                                <br/>
                                Fondateur de l'agence média AdPeak et formateur certifié Google. Spécialiste SEM
                                (marketing des moteurs de recherche), il assure des formations dans le cadre de
                                l’Académie Google Partners, de l’université SEMcamp ou de Marketing Masters.
                            </p>
                        </div>
                        <div className={networkPersonContainer}>
                            <div
                                data-aos="fade-up"
                                data-aos-once="true"
                                className={networkPersonPictureLeft}>
                                <StaticImage
                                    alt={'Kacper Kaźmierowicz Photo'}
                                    src={kacper}
                                />
                            </div>
                            <p data-aos="fade-up" data-aos-once="true">
                                <b>Kacper Kaźmierowicz</b>
                                <br/>
                                Copropriétaire de l’agence média AdPeak. Il gère des campagnes Google Ads. Un partisan
                                des solutions simples et efficaces en matière de performance. Il teste et optimise pour
                                obtenir le meilleur objectif de retour sur les dépenses publicitaires (ROAS) possible.
                            </p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-once="true"
                            className={networkPersonContainer}>
                            <div className={networkPersonPictureLeft}>
                                <StaticImage
                                    alt={'Professor Mirosław Filiciak Photo'}
                                    src={miroslaw}
                                />
                            </div>
                            <p data-aos="fade-up" data-aos-once="true">
                                <b>
                                    Mirosław Filiciak</b>
                                <br/>
                                Professeur à l’Université SWPS, expert culturel, chef du Département de la culture et
                                des médias. Chercheur sur les médias, les jeux, les smartphones et les plateformes de
                                streaming. Spécialiste des études futures (future studies).
                            </p>
                        </div>
                        <div className={networkPersonContainer}>
                            <div
                                data-aos="fade-up"
                                data-aos-once="true"
                                className={networkPersonPictureLeft}>
                                <StaticImage
                                    alt={'Karolina Semiotyczka Photo'}
                                    src={karolina}
                                />
                            </div>
                            <p data-aos="fade-up" data-aos-once="true">
                                <b>Karolina Balmas</b>
                                <br/>
                                Sémioticienne, anthropologue, chercheuse. Elle analyse le discours des consommateurs en
                                ligne, dans les médias et dans la culture populaire et la communication des marques. En
                                examinant les signes linguistiques et visuels, elle recherche les codes culturels. Il
                                capte les tendances et les suggestions d’orientation.
                            </p>
                        </div>
                    </>
                    :
                    <></>
                }
            </div>
            <NetworkPlusStub isShowMore={isShowMore} toggleNetwork={toggleNetwork}/>
        </section>
    );
};

export default NetworkSection;