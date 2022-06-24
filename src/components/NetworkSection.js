import React, {useEffect, useState} from 'react';
import {
    networkCopy,
    networkPersonContainer,
    networkPersonPictureLeft,
    networkPictures,
    networkSection,
    networkTagline,
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
                Go <span>Network!</span>
            </div>
            <div
                data-aos="fade-up"
                data-aos-once="true"
                className={networkCopy}>
                Rekomendacje strategiczne i rozwiązania kreatywne tworzymy w oparciu o unikalną na rynku wiedzę i
                doświadczenie naszych ekspertów - strategów, badaczy, semiotyków, mediowców, specjalistów od komunikacji
                digital. W gronie naszych ekspertów są zarówno właściciele topowych firm badawczych i strategicznych,
                jak i profesorowie i wykładowcy najlepszych uniwersytetów.
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
                        <b>Ana Maria Szutowicz<br/>Y&Lovers</b><br/>
                        CEO&Founder agencji badawczo-strategicznej Y&LOVERS
                        Strateżka, badaczka, etnografka konsumenckiego życia naszych, ekspertka zmiany pokoleniowej i
                        marketingu do młodych. Jurorka Effie. Członkini PTBRiO.
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
                        <b>Klaudyna Kamińska<br/>Y&Lovers</b><br/>
                        Copywriter, Dyrektor Kreatywny,
                        Założyciel agencji reklamowej FMC_Go,
                        Twórca strategii i platform komunikacji
                        dla branży FMCG, retail i commodity services.

                    </p>
                </div>
                <div className={networkPersonContainer}>
                    <div
                        // data-aos="fade-up"
                        // data-aos-once="true"
                        className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Henryk Klawe Photo'}
                            src="../images/henrykklawe.png"
                        />
                    </div>
                    <p>
                        {isShowMore
                            ? <>
                                <b>Henryk Klawe<br/>TGTH</b><br/>
                                Copywriter, Dyrektor Kreatywny,
                                Założyciel agencji reklamowej FMC_Go,
                                Twórca strategii i platform komunikacji
                                dla branży FMCG, retail i commodity services.
                            </>
                            : <></>
                        }
                    </p>
                </div>
                <div
                    className={networkPersonContainer}>
                    <div
                        // data-aos="fade-up"
                        // data-aos-once="true"
                        className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={''}
                            src="../images/bartoszbalewski.png"
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        {isShowMore
                            ? <>
                                <b>Bartosz Balewski<br/>TGTH</b><br/>
                                Copywriter, Dyrektor Kreatywny,
                                Założyciel agencji reklamowej FMC_Go,
                                Twórca strategii i platform komunikacji
                                dla branży FMCG, retail i commodity services.
                            </>
                            : <></>
                        }
                    </p>
                </div>
                {isShowMore
                    ? <>
                        {/*<div className={networkPersonContainer}>*/}
                        {/*    <div*/}
                        {/*        data-aos="fade-up"*/}
                        {/*        data-aos-once="true"*/}
                        {/*        className={networkPersonPictureLeft}>*/}
                        {/*        <StaticImage*/}
                        {/*            alt={'Miłosz Jacyna Photo'}*/}
                        {/*            src="../images/miloszjacyna.png"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*    <p data-aos="fade-up" data-aos-once="true">*/}
                        {/*        <b>Miłosz Jacyna<br/>Social...</b><br/>*/}
                        {/*    </p>*/}
                        {/*</div>*/}
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
                                <b>Łukasz Kępiński<br/>Tears of Joy / influencer&gaming</b><br/>
                                Copywriter, Dyrektor Kreatywny,
                                Założyciel agencji reklamowej FMC_Go,
                                Twórca strategii i platform komunikacji
                                dla branży FMCG, retail i commodity services.
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
                                <b>Wojciech Morawski<br/>AdPeak</b><br/>
                                Założyciel agencji mediowej AdPeak i Certyfikowany Trener Google. Specjalista SEM,
                                Prowadzi szkolenia w ramach Akademii Google Partners, SEMcamp University czy Marketing
                                Masters.
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
                                <b>Kacper Kaźmierowicz<br/>AdPeak</b><br/>
                                Współwłaściciel agencji mediowej AdPeak. Prowadzi kampanie Google Ads. Zwolennik
                                prostych i skutecznych rozwiązań performanceowych. Testuje i optymalizuje, aby
                                osiągnąć jak najlepszy ROAS.
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
                                <b>dr hab., prof. Uniwersytetu SWPS<br/>Mirosław Filiciak</b><br/>
                                Profesor Uniwersytetu SWPS, kulturoznawca, zajmuje się badaniami mediów.
                            </p>
                        </div>

                        {/*<div className={networkPersonContainer}>*/}
                        {/*    <div*/}
                        {/*        data-aos="fade-up"*/}
                        {/*        data-aos-once="true"*/}
                        {/*        className={networkPersonPictureLeft}>*/}
                        {/*        <StaticImage*/}
                        {/*            alt={'Daria Afeltowicz Photo'}*/}
                        {/*            src="../images/dariaafeltowicz.png"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*    <p data-aos="fade-up" data-aos-once="true">*/}
                        {/*        <b>Daria Afeltowicz</b><br/>Psycholog, badacz z wykształcenia i zamiłowania. Z badaniami*/}
                        {/*        marketingowymi związana od 2006 roku. Przez 7 lat pracowała jako badacz w Domu Badawczym*/}
                        {/*        Maison*/}
                        {/*        wspierając firmy w budowaniu i rozwijaniu ich marek. Od 2013 roku pracowała jako*/}
                        {/*        specjalista*/}
                        {/*        badań wspierając wiedzą na temat </p>*/}
                        {/*</div>*/}
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
                                <b>Karolina<br/>Semiotyczka</b><br/>
                                Semiotyczka, antropolożka, badaczka. Analizuje internetowy, medialny i popkulturowy
                                dyskurs konsumencki oraz komunikację marek. Badając znaki językowe i wizualne, szuka
                                kodów kulturowych. Łowi trendy i kierunki zmian.
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