import React from 'react';
import {
    newsArticle,
    newsArticlesContainer,
    newsCopy,
    newsDate,
    newsSection,
    newsTagline,
    newsTaglineGradient,
    desktopOnlyNews
} from '../styles/news-section.module.css'


const NewsSection = () => {
    return (
        <section className={newsSection} id="news-section">
            <div className={newsTagline}>So, <span className={newsTaglineGradient}>let's GO!</span></div>
            <div className={newsArticlesContainer}>
                <div className={newsArticle}>
                    <div className={newsDate}>11.11.22</div>
                    <p className={newsCopy}>CorWave to set up its<br/>manufacturing facility and<br/>
                        expand to a new site next<br/>to Paris</p>
                </div>
                <div className={`${newsArticle} ${desktopOnlyNews}`}>
                    <div className={newsDate}>11.11.22</div>
                    <p className={newsCopy}>CorWave to set up its<br/>manufacturing facility and<br/>
                        expand to a new site next<br/>to Paris</p>
                </div>
                <div className={`${newsArticle} ${desktopOnlyNews}`}>
                    <div className={newsDate}>11.11.22</div>
                    <p className={newsCopy}>CorWave to set up its<br/>manufacturing facility and<br/>
                        expand to a new site next<br/>to Paris</p>
                </div>
                <div className={newsArticle}>
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
                <div className={`${newsArticle} ${desktopOnlyNews}`}>
                    <div className={newsDate}>11.11.22</div>
                    <p className={newsCopy}>CorWave to set up its<br/>manufacturing facility and<br/>
                        expand to a new site next<br/>to Paris</p>
                </div>
                <div className={newsArticle}>
                    <div className={newsDate}>11.11.22</div>
                    <p className={newsCopy}>CorWave to set up its<br/>manufacturing facility and<br/>
                        expand to a new site next<br/>to Paris</p>
                </div>
            </div>

        </section>
    );
};

export default NewsSection;