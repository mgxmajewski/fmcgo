import React from 'react';
import {newsSection, newsTagline, newsArticlesContainer, newsArticle, newsDate, newsCopy} from '../styles/news-section.module.css'


const NewsSection = () => {
    return (
        <section className={newsSection}>
            <div className={newsTagline}>So, let's GO!</div>
            <div className={newsArticlesContainer}>
                <div className={newsArticle}>
                    <div className={newsDate}>11.11.22</div>
                    <p className={newsCopy}>CorWave to set up its<br/>manufacturing facility and<br/>
                    expand to a new site next<br/>to Paris</p>
                </div>
                <div className={newsArticle}>
                    <div className={newsDate}>11.11.22</div>
                    <p className={newsCopy}>CorWave to set up its<br/>manufacturing facility and<br/>
                    expand to a new site next<br/>to Paris</p>
                </div>
                <div className={newsArticle}>
                    <div className={newsDate}>11.11.22</div>
                    <p className={newsCopy}>CorWave to set up its<br/>manufacturing facility and<br/>
                    expand to a new site next<br/>to Paris</p>
                </div>
                <div className={newsArticle}>
                    <div className={newsDate}>11.11.22</div>
                    <p className={newsCopy}>CorWave to set up its<br/>manufacturing facility and<br/>
                    expand to a new site next<br/>to Paris</p>
                </div>
                <div className={newsArticle}>
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