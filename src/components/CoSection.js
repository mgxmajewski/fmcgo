import React from 'react';


import {coCopy, coDrawers, coSection, coTagline} from '../styles/co-section.module.css'
import CoSlider from "./CoSlider";
import Index from "./Drawers/DrawerCuboidZAnimation";

const CoSection = () => {
    return (
        <section className={coSection} id="co-section">
            <div className={coTagline}>Filip<sup>&</sup>Marcel<sup>&</sup>Co<sup>Go</sup></div>
            <div className={coCopy}>
                <b>There’s 40 years of experience in advertising between us.</b> We’ve served as heads of departments,
                creative directors, senior creatives. For last 7 years we’ve been working together on hundreds of
                campaigns for brands from all categories imaginable. Along this way, we’ve discovered that what really
                turns us on is adverting that is meant to sell.
            </div>
            <div className={coDrawers}>
                <Index width='11.5vw'>Carrefour</Index>
                <Index width='8.2vw'>Pepsi</Index>
                <Index width='11.2vw'>Desperados</Index>
                <Index width='11.1vw'>Heineken</Index>
                <Index width='11vw'>Develey</Index>
                <Index width='14vw'>Costa Coffee</Index>
                <Index width='10vw'>Tchibo</Index>
                <Index width='8.2vw'>Stock</Index>
                <Index width='11vw'>Sephora</Index>
                <Index width='10.5vw'>Clarins</Index>
            </div>
            <CoSlider/>
        </section>
    );
};

export default CoSection;