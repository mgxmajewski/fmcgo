import React from 'react';

import {coSlider, sliderName, sliderLeftArrow, sliderCopy, sliderRightArrow, sliderDots} from '../styles/co-slider.module.css'

const CoSlider = () => {
    return (
        <div className={coSlider}>
            <div className={sliderName}>Filip<sup>Szperl</sup></div>
            <div className={sliderLeftArrow}>&#60;</div>
            <div className={sliderCopy}><b>There’s 40 years of experience in advertising between us.</b> We’ve served as heads of departments, creative directors, senior creatives. For last 7 years we’ve been working together on hundreds of campaigns for brands from all categories imaginable. Along this way, we’ve discovered that what really turns us on is adverting that is meant to sell. </div>
            <div className={sliderRightArrow}>&#62;</div>
            <div className={sliderDots}>. .</div>
        </div>
    );
};

export default CoSlider;