import React from 'react';


import {coCopy, coDrawers, coSection, coTagline} from '../styles/co-section.module.css'
import CoSlider from "./CoSlider";
import DrawerCuboidZAnimation from "./DrawerCuboidZAnimation";

const CoSection = () => {
    return (
        <section className={coSection}>
            <div className={coTagline}>Filip<sup>&</sup>Marcel<sup>&</sup>Co<sup>Go</sup></div>
            <div className={coCopy}>
                <b>There’s 40 years of experience in advertising between us.</b> We’ve served as heads of departments,
                creative directors, senior creatives. For last 7 years we’ve been working together on hundreds of
                campaigns for brands from all categories imaginable. Along this way, we’ve discovered that what really
                turns us on is adverting that is meant to sell.
            </div>
            <div className={coDrawers}>
                <DrawerCuboidZAnimation width='11.5vw'>Carrefour</DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation width='8.2vw'>Pepsi</DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation width='11.2vw'>Desperados</DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation width='11.1vw'>Heineken</DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation width='11vw'>Develey</DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation width='14vw'>Costa Coffee</DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation width='10vw'>Tchibo</DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation width='8.2vw'>Stock</DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation width='11vw'>Sephora</DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation width='10.5vw'>Clarins</DrawerCuboidZAnimation>
            </div>
            <CoSlider/>
        </section>
    );
};

export default CoSection;