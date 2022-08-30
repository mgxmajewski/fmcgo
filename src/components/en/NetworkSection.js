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
                We develop strategic recommendations and creative solutions based on the market-unique knowledge and
                experience of our experts – strategists, researchers, semioticians, media specialists, digital
                communication specialists. Our experts include owners of top research and strategy companies, as well as
                lecturers from top universities.
            </div>
            <div className={networkPictures}>
                <div
                    data-aos="fade-up"
                    data-aos-once="true"
                    className={networkPersonContainer}>
                    <div className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Ana Maria Szutowicz Photo'}
                            src="../images/01annamaria.png"
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>Anna Maria Szutowicz</b>
                        <br/>
                        CEO & Founder of Y&LOVERS research and&nbsp;strategy agency. A strategist, researcher,
                        ethnographer of the consumer life, expert on&nbsp;generational change and marketing
                        to&nbsp;the&nbsp;young. Effie Juror. PTBRiO member.
                    </p>
                </div>
                <div className={networkPersonContainer}>
                    <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Klaudyna Kamińska Photo'}
                            src="../images/02klaudyna.png"
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        <b>Klaudyna Kamińska</b>
                        <br/>
                        Research Director at Y&LOVERS agency. Researcher, ethnographer and linguist. She specializes in
                        exploratory research – seeking effective consumer insights and innovative solutions for the FMCG
                        industry.
                    </p>
                </div>
                <div className={networkPersonContainer}>
                    <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        className={networkPersonPictureLeft}>
                        <StaticImage
                            alt={'Henryk Klawe Photo'}
                            src="../images/03henryk.png"
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        {isShowMore
                            ? <>
                                <b>Henryk Klawe</b>
                                <br/>
                                Co-founder of Together consulting agency. Strategist, brand consultant. He leads
                                the&nbsp;innovation, goal-seeking and digital transformation processes of major
                                corporations and non-profit organizations.
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
                            src="../images/04bartosz.png"
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-once="true">
                        {isShowMore
                            ? <>
                                <b>Bartosz Balewski</b>
                                <br/>
                                Co-founder of Together consulting agency. UX expert, customer experience strategist.
                                Mentor at Google for Startup Accelerator. He&nbsp;teaches design processes at SWPS
                                and&nbsp;other universities.
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
                                    src="../images/05lukasz.png"
                                />
                            </div>
                            <p data-aos="fade-up" data-aos-once="true">
                                <b>Łukasz Kępiński</b>
                                <br/>
                                CEO & Founder of Tears of Joy agency.
                                Expert in influencer marketing, social media and gaming. Organizer of the largest
                                recurring event for creators – Środa,&nbsp;#dzienbloga.
                            </p>
                        </div>

                        <div className={networkPersonContainer}>
                            <div
                                data-aos="fade-up"
                                data-aos-once="true"
                                className={networkPersonPictureLeft}>
                                <StaticImage
                                    alt={'Wojciech Morawski Photo'}
                                    src="../images/06wojtek.png"
                                />
                            </div>
                            <p data-aos="fade-up" data-aos-once="true">
                                <b>Wojciech Morawski</b>
                                <br/>
                                Founder of AdPeak media agency and Google Certified Trainer. SEM specialist, provides
                                training as part of Google Partners Academy, SEMcamp University or Marketing Masters.
                            </p>
                        </div>
                        <div className={networkPersonContainer}>
                            <div
                                data-aos="fade-up"
                                data-aos-once="true"
                                className={networkPersonPictureLeft}>
                                <StaticImage
                                    alt={'Kacper Kaźmierowicz Photo'}
                                    src="../images/07kacper.png"
                                />
                            </div>
                            <p data-aos="fade-up" data-aos-once="true">
                                <b>Kacper Kaźmierowicz</b>
                                <br/>
                                Co-owner of AdPeak media agency. He runs Google Ads campaigns. A proponent
                                of&nbsp;simple and
                                effective performance solutions. He tests and optimizes to achieve the best possible
                                ROAS.
                            </p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-once="true"
                            className={networkPersonContainer}>
                            <div className={networkPersonPictureLeft}>
                                <StaticImage
                                    alt={'Professor Mirosław Filiciak Photo'}
                                    src="../images/08miroslaw.png"
                                />
                            </div>
                            <p data-aos="fade-up" data-aos-once="true">
                                <b>
                                    Mirosław Filiciak</b>
                                <br/>
                                Professor at SWPS University, cultural expert, head of the Department of Culture
                                and&nbsp;Media. Researcher of media, games, smartphones and streaming platforms. Future
                                Studies
                                Specialist.
                            </p>
                        </div>
                        <div className={networkPersonContainer}>
                            <div
                                data-aos="fade-up"
                                data-aos-once="true"
                                className={networkPersonPictureLeft}>
                                <StaticImage
                                    alt={'Karolina Semiotyczka Photo'}
                                    src="../images/09karolina.png"
                                />
                            </div>
                            <p data-aos="fade-up" data-aos-once="true">
                                <b>Karolina Balmas</b>
                                <br/>
                                Semiotician, anthropologist, researcher. She&nbsp;analyzes online, media and pop culture
                                consumer discourse and brand communication. She looks for cultural codes studying
                                linguistic and visual signs. She&nbsp;catches trends and directions of change.
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