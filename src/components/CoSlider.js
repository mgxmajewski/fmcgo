import React from 'react';
import DrawerCuboidStatic from "./DrawerCuboidStatic";
import background from "../assets/slider1.png";



import {coSlider, sliderName, sliderLeftArrow, sliderCopy, sliderRightArrow, sliderDots, whiteDot, emptyDot} from '../styles/co-slider.module.css'

const CoSlider = () => {
    return (
        <div className={coSlider} style={Object.assign({backgroundImage: `url(${background})`}, {backgroundSize: `cover`})}>
            <div className={sliderName}>Filip<sup>Szperl</sup></div>
            <div className={sliderLeftArrow} ><DrawerCuboidStatic width='3vw'>&#60;</DrawerCuboidStatic></div>
            <div className={sliderCopy}><b>There’s 40 years of experience in advertising between <br/>us.</b> We’ve served as heads of departments, creative directors, <br/>senior creatives.<br/> For last 7 years we’ve been working together on hundreds of<br/> campaigns for brands from all categories imaginable. Along this <br/>way, we’ve discovered that what really turns us on is adverting<br/> that is meant to sell. </div>
            <div className={sliderRightArrow}><DrawerCuboidStatic width='3vw'>&#62;</DrawerCuboidStatic></div>
            <div className={sliderDots}>
                <div className={whiteDot}></div>
                <div className={emptyDot}></div>
            </div>
        </div>
    );
};

export default CoSlider;