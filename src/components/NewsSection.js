import React, {useEffect} from 'react';
import {
    desktopOnlyNews,
    newsArticle,
    newsArticlesContainer,
    newsCopy,
    newsDate,
    newsSection,
    newsTagline,
    newsTaglineGradient
} from '../styles/news-section.module.css'
import AOS from "aos";
import "aos/dist/aos.css";

const NewsSection = ({newsSectionRef}) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <section ref={newsSectionRef} className={newsSection} id="news-section">
            <div className={newsTagline}>So, <span className={newsTaglineGradient}>let's GO!</span></div>
            <div className={newsArticlesContainer}>
                <div
                    data-aos="fade-up"
                    data-aos-once="true"
                    className={newsArticle}
                >
                    <div className={newsDate}>11.11.22</div>
                    <p className={newsCopy}>CorWave to set up its<br/>manufacturing facility and<br/>
                        expand to a new site next<br/>to Paris</p>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-once="true"
                    className={`${newsArticle} ${desktopOnlyNews}`}>
                    <div className={newsDate}>11.11.22</div>
                    <p className={newsCopy}>CorWave to set up its<br/>manufacturing facility and<br/>
                        expand to a new site next<br/>to Paris</p>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-once="true"
                    className={`${newsArticle} ${desktopOnlyNews}`}>
                    <div className={newsDate}>11.11.22</div>
                    <p className={newsCopy}>CorWave to set up its<br/>manufacturing facility and<br/>
                        expand to a new site next<br/>to Paris</p>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-once="true"
                    className={newsArticle}>
                    <div className={newsDate}>11.11.22</div>
                    <p className={newsCopy}>
                        Catamaran Bio expands<br/>
                        collaboration for CAR-NK<br/>
                        cell engineering with the<br/>
                        University of Minnesota<br/>
                        and secures an exclusive<br/>
                        patent license to next<br/>
                        generation manufacturing<br/>
                        technologies
                    </p>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-once="true"
                    className={`${newsArticle} ${desktopOnlyNews}`}>
                    <div className={newsDate}>11.11.22</div>
                    <p className={newsCopy}>CorWave to set up its<br/>manufacturing facility and<br/>
                        expand to a new site next<br/>to Paris</p>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-once="true"
                    className={newsArticle}>
                    <div className={newsDate}>11.11.22</div>
                    <p className={newsCopy}>CorWave to set up its<br/>manufacturing facility and<br/>
                        expand to a new site next<br/>to Paris</p>
                </div>
            </div>

        </section>
    );
};

export default NewsSection;