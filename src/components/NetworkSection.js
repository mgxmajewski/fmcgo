import React, {useEffect} from 'react';
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


const NetworkSection = ({boardSectionRef}) => {

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
                    data-aos="fade-right"
                    data-aos-once="true"
                    className={networkPersonContainer}>
                    <div className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Ana Maria Szutowicz Photo'}
                            src="../images/anamariaszutowicz.png"
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>Ana Maria Szutowicz<br/>Y&Lovers</b><br/> Etnografka i antropolożka kultury. Założycielka
                        agencji specjalizującej się w projektowaniu i analizie badań młodych Polaków oraz doradztwie
                        strategicznym na bazie wyników badań. Pracuje z teamem egoistycznych, roszczeniowych,
                        uzależnionych od fidbeku i lajków badaczy.
                    </p>
                </div>
                <div className={networkPersonContainer}>
                    <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Henryk Klawe Photo'}
                            src="../images/kaludynakaminska.png"
                            transformOptions={{
                                fit: "cover",
                                // cropFocus: "attention"
                                // cropFocus: 90
                            }}
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>Klaudyna Kamińska<br/>Y&Lovers</b><br/>

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
                            transformOptions={{
                                fit: "cover",
                                // cropFocus: "attention"
                                // cropFocus: 90
                            }}
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>Henryk Klawe<br/>TGTH</b><br/>Współzałożyciel Together odpowiedzialny za strategię. Posiada
                        ponad 15-letnie doświadczenie w budowaniu marki i doradztwie w zakresie innowacji. Uważa, że
                        ​​najbardziej wartościowe rozwiązania pochodzą z pracy w zgranych, multidyscyplinarnych
                        zespołach.
                    </p>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-once="true"
                    className={networkPersonContainer}>
                    <div className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={''}
                            src="../images/bartoszbalewski.png"
                            transformOptions={{
                                fit: "cover",
                                // cropFocus: "attention"
                                // cropFocus: 90
                            }}
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>Bartosz Balewski<br/>TGTH</b><br/>Jest strategiem i projektantem user experience z 12-letnim
                        doświadczeniem, które zdobywał pracując dla klientów między innymi w USA, Hiszpanii i na Bliskim
                        Wschodzie. Swoje projekty prowadzi zgodnie z założeniami metodologii Design Thinking.
                    </p>
                </div>
                <div className={networkPersonContainer}>
                    <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Henryk Klawe Photo'}
                            src="../images/miloszjacyna.png"
                            transformOptions={{
                                fit: "cover",
                                // cropFocus: "attention"
                                // cropFocus: 90
                            }}
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>Miłosz Jacyna<br/>Social...</b><br/>
                    </p>
                </div>
                <div className={networkPersonContainer}>
                    <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Łukasz Kepiński Photo'}
                            src="../images/lukaszkepinski.png"
                            transformOptions={{
                                fit: "cover",
                                // cropFocus: "attention"
                                // cropFocus: 90
                            }}
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>Łukasz Kępiński<br/>Tears of Joy / influencer&gaming</b><br/>Założyciel kreatywnej agencji
                        influencerskiej – Tears of Joy. Dociera do TG klientów z influencer marketingiem....
                    </p>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-once="true"
                    className={networkPersonContainer}>
                    <div className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Professor Mirosław Filiciak Photo'}
                            src="../images/miroslawfiliciak.png"
                            transformOptions={{
                                fit: "cover",
                                // cropFocus: "attention"
                                // cropFocus: 90
                            }}
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>dr hab., prof. Uniwersytetu SWPS<br/>Mirosław Filiciak</b><br/>Kierownik Katedry Kultury i
                        Mediów.
                        Medioznawca. Zajmuje się wpływem mediów cyfrowych na uczestnictwo w kulturze. Bada internet, gry
                        komputerowe, przemiany telewizji oraz nieformalny obieg treści i kulturę współczesną.
                        Współtwórca techno-kulturowego projektu Kultura 2.0.
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
                            transformOptions={{
                                fit: "cover",
                                // cropFocus: "attention"
                                // cropFocus: 90
                            }}
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>Kacper Kaźmierowicz<br/>AdPeak</b><br/>Prowadzi kampanie Google Ads. Zwolennik prostych i
                        skutecznych rozwiązań. Testuje i optymalizuje, aby osiągnąć jak najlepszy ROAS. Jestem
                        zwolennikiem kampanii performanceowych, czyli tych nastawionych na efekt.
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
                            transformOptions={{
                                fit: "cover",
                                // cropFocus: "attention"
                                // cropFocus: 90
                            }}
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>Wojciech Morawski<br/>AdPeak</b><br/>Założyciel AdPeak i Certyfikowany Trener Google.
                        Specjalista SEM, który miał okazję optymalizować kampanie dla wielu topowych marek oraz
                        prowadzić dla nich szkolenia (również w takich inicjatywach jak: Akademia Google Partners,
                        SEMcamp University czy Marketing Masters).
                    </p>
                </div>
                <div className={networkPersonContainer}>
                    <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Daria Afeltowicz Photo'}
                            src="../images/dariaafeltowicz.png"
                            transformOptions={{
                                fit: "cover",
                                // cropFocus: "attention"
                                // cropFocus: 90
                            }}
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>Daria Afeltowicz</b><br/>Psycholog, badacz z wykształcenia i zamiłowania. Z badaniami
                        marketingowymi związana od 2006 roku. Przez 7 lat pracowała jako badacz w Domu Badawczym Maison
                        wspierając firmy w budowaniu i rozwijaniu ich marek. Od 2013 roku pracowała jako specjalista
                        badań wspierając wiedzą na temat </p>
                </div>
                <div className={networkPersonContainer}>
                    <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Karolina Semiotyczka Photo'}
                            src="../images/karolinasemiotyczka.png"
                            transformOptions={{
                                fit: "cover",
                                // cropFocus: "attention"
                                // cropFocus: 90
                            }}
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>Karolina<br/>Semiotyczka</b><br/> ..l.
                    </p>
                </div>
                <NetworkPlusStub/>
            </div>
        </section>
    );
};

export default NetworkSection;