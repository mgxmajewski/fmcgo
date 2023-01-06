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
                Wir entwickeln strategische Empfehlungen und kreative Lösungen auf der Grundlage des einzigartigen
                Wissens und der Erfahrung unserer Experten - Strategen, Forscher, Semiotiker, Medienspezialisten und
                Spezialisten für digitale Kommunikation. Unsere Experten reichen von&nbsp;Inhabern führender Forschungs-
                und
                Strategieunternehmen bis hin zu Lehrern an Spitzenuniversitäten.
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
                        CEO und Gründerin der Forschungs- und Strategieagentur Y&LOVERS. Strategin, Forscherin,
                        Ethnografin unseres Konsumlebens, Expertin für Generationswechsel und Marketing für junge
                        Menschen. Jurorin von Effie. Mitglied von PTBRiO.
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
                        Direktorin für Forschung bei der Agentur Y&LOVERS. Forscherin, Ethnographin und Linguistin. Sie
                        hat sich auf explorative Forschung spezialisiert - auf der Suche nach effektiven
                        Verbrauchererkenntnissen und innovativen Lösungen für die FMCG-Branche.
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
                                Mitbegründer der Beratungsagentur Together. Stratege, Brand Consultant. Er leitet die
                                Prozesse der Innovation, der Zielfindung und der digitalen Transformation bei
                                Großunternehmen und gemeinnützigen Organisationen.
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
                                Mitbegründer der Beratungsagentur Together. UX-Experte, Schöpfer von
                                Kundenerfahrungsstrategien. Mentor bei Google für Startup Accelerator. Er unterrichtet
                                Designprozesse unter anderem an der SWPS.
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
                                Er ist seit 1996 in&nbsp;der&nbsp;Spielfilm-,
                                Dokumentarfilm- und&nbsp;Werbeproduktion tätig.
                                Langjähriger Leiter der&nbsp;Produktionsabteilung
                                in&nbsp;Mistrzowska Szkoła Reżyserii Filmowej A.Wajdy
                                und&nbsp;CUT/CUT Production House. Absolvent und&nbsp;Lehrer
                                an&nbsp;PWSFTViT in&nbsp;Lodz.
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
                                CEO und Gründer der Agentur Tears of Joy.
                                Experte für Influencer Marketing, Sozialmedien und Gaming. Organisator der größten
                                zyklischen Veranstaltung für Schöpfer - Środa, #dzienbloga.
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
                                Gründer der Medienagentur AdPeak und zertifizierter Google-Trainer. SEM-Spezialist,
                                führt Schulungen im Rahmen von Google Partners Academy, SEMcamp University oder
                                Marketing Masters durch.
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
                                Miteigentümer der Medienagentur AdPeak. Er führt Google Ads-Kampagnen durch. Befürworter
                                einfacher und wirksamer Performance-Lösungen. Er testet und optimiert, um den
                                bestmöglichen ROAS zu erreichen.
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
                                Professor an der Universität SWPS, Kulturwissenschaftler, Leiter des Fachbereichs Kultur
                                und Medien. Forscher von Medien, Spielen, Smartphones und Streaming-Plattformen.
                                Spezialist für Future Studies.
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
                                Semiotikerin, Anthropologin, Forscherin. Sie analysiert Online-, Medien- und Popkultur-
                                und Verbraucherdiskurse sowie Markenkommunikation. Durch die Untersuchung von
                                sprachlichen und visuellen Zeichen sucht sie nach kulturellen Codes. Sie fängt Trends
                                und Richtungen des Wandels ein.
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