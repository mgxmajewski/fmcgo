import React, {useEffect, useState} from 'react';
import {
    networkCopy,
    networkPersonContainer,
    networkPersonPictureLeft,
    networkPictures,
    networkSection,
    networkTagline,
    plusStar,
    rwdBr
} from '../styles/network-section.module.css'
import {StaticImage} from "gatsby-plugin-image";
import "aos/dist/aos.css";
import NetworkPlusStub from "./NetworkPlusStub";
import {useWindowSize} from "./useWindowSize";


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
                Rekomendacje strategiczne i&nbsp;rozwiązania kreatywne tworzymy w oparciu o unikalną na rynku wiedzę i
                doświadczenie naszych ekspertów - strategów, badaczy, semiotyków, mediowców, specjalistów od&nbsp;komunikacji
                digital. W gronie naszych ekspertów są zarówno właściciele topowych firm badawczych
                i&nbsp;strategicznych,
                jak&nbsp;i&nbsp;wykładowcy najlepszych uniwersytetów.
            </div>
            <div className={networkPictures}>
                <div
                    data-aos="fade-up"
                    data-aos-once="true"
                    className={networkPersonContainer}>
                    <div className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Ana Maria Szutowicz Photo'}
                            src="../images/anamariaszutowicz.png"
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>Ana Maria Szutowicz</b>
                        <br/>
                        CEO & Founder agencji badawczo-strategicznej Y&LOVERS.
                        Strateżka, badaczka, etnografka konsumenckiego życia naszych, ekspertka zmiany pokoleniowej
                        i&nbsp;marketingu do&nbsp;młodych. Jurorka Effie. Członkini PTBRiO.
                    </p>
                </div>
                <div className={networkPersonContainer}>
                    <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Klaudyna Kamińska Photo'}
                            src="../images/kaludynakaminska.png"
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>Klaudyna Kamińska</b>
                        <br/>
                        Dyrektorka Badań w&nbsp;agencji Y&LOVERS.
                        Badaczka, etnografka i&nbsp;lingwistka. Specjalizuje się w badaniach eksploracyjnych - poszukuje
                        efektywnych insightów konsumenckich oraz&nbsp;innowacyjnych rozwiązań dla branży FMCG.
                    </p>
                </div>
                <div className={networkPersonContainer}>
                    <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Henryk Klawe Photo'}
                            src="../images/henrykklawe.png"
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        {isShowMore
                            ? <>
                                <b>Henryk Klawe</b>
                                <br/>
                                Współzałożyciel agencji consultingowej Together.
                                Strateg, brand consultant.
                                Prowadzi procesy innowacji, poszukiwania celów
                                i&nbsp;transformacji cyfrowej największych korporacji
                                i&nbsp;organizacji non-profit.
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
                            alt={''}
                            src="../images/bartoszbalewski.png"
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        {isShowMore
                            ? <>
                                <b>Bartosz Balewski</b>
                                <br/>
                                Współzałożyciel agencji consultingowej Together.
                                UX expert, twórca strategii customer experience
                                Mentor w Google for&nbsp;Startup Accelerator.
                                Uczy procesów design m.in na&nbsp;SWPS.
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
                                    alt={'Łukasz Kepiński Photo'}
                                    src="../images/lukaszkepinski.png"
                                />
                            </div>
                            <p data-aos="fade-up" data-aos-once="true">
                                <b>Łukasz Kępiński</b>
                                <br/>
                                CEO & Founder agencji Tears of Joy. <br className={rwdBr}/>
                                Ekspert w&nbsp;sprawach influencer marketingu,
                                social mediów i gamingu.
                                Organizator największego cyklicznego
                                wydarzenia dla&nbsp;twórców - Środa, #dzienbloga.
                            </p>
                        </div>

                        <div className={networkPersonContainer}>
                            <div
                                data-aos="fade-up"
                                data-aos-once="true"
                                className={networkPersonPictureLeft}>
                                <StaticImage
                                    alt={'Wojciech Morawski Photo'}
                                    src="../images/wojciechmorawski.png"
                                />
                            </div>
                            <p data-aos="fade-up" data-aos-once="true">
                                <b>Wojciech Morawski</b>
                                <br/>
                                Założyciel agencji mediowej AdPeak i&nbsp;Certyfikowany Trener Google. Specjalista SEM,
                                Prowadzi szkolenia w&nbsp;ramach Akademii Google Partners, SEMcamp University
                                czy&nbsp;Marketing Masters.
                            </p>
                        </div>
                        <div className={networkPersonContainer}>
                            <div
                                data-aos="fade-up"
                                data-aos-once="true"
                                className={networkPersonPictureLeft}>
                                <StaticImage
                                    alt={'Kacper Kaźmierowicz Photo'}
                                    src="../images/kacperkazmierowicz.png"
                                />
                            </div>
                            <p data-aos="fade-up" data-aos-once="true">
                                <b>Kacper Kaźmierowicz</b>
                                <br/>
                                Współwłaściciel agencji mediowej AdPeak. Prowadzi kampanie Google Ads. Zwolennik
                                prostych i skutecznych rozwiązań performanceowych. Testuje i optymalizuje,
                                aby&nbsp;osiągnąć jak najlepszy ROAS.
                            </p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-once="true"
                            className={networkPersonContainer}>
                            <div className={networkPersonPictureLeft}>
                                <StaticImage
                                    alt={'Professor Mirosław Filiciak Photo'}
                                    src="../images/miroslawfiliciak.png"
                                />
                            </div>
                            <p data-aos="fade-up" data-aos-once="true">
                                <b>
                                    Mirosław Filiciak</b>
                                <br/>
                                Profesor Uniwersytetu SWPS, kulturoznawca, zajmuje się badaniami mediów.
                            </p>
                        </div>
                        <div className={networkPersonContainer}>
                            <div
                                data-aos="fade-up"
                                data-aos-once="true"
                                className={networkPersonPictureLeft}>
                                <StaticImage
                                    alt={'Karolina Semiotyczka Photo'}
                                    src="../images/karolinasemiotyczka.png"
                                />
                            </div>
                            <p data-aos="fade-up" data-aos-once="true">
                                <b>Karolina Balmas</b>
                                <br/>
                                Semiotyczka, antropolożka, badaczka. Analizuje internetowy, medialny i&nbsp;popkulturowy
                                dyskurs konsumencki oraz komunikację marek. Badając znaki językowe i&nbsp;wizualne,
                                szuka
                                kodów kulturowych. Łowi trendy i&nbsp;kierunki zmian.
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