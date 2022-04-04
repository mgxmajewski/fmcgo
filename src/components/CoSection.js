import React from 'react';


import {coCopy, coDrawers, coSection, coTagline} from '../styles/co-section.module.css'
import CoSlider from "./CoSlider";
import DrawerCuboid from "./DrawerCuboid";

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
                <DrawerCuboid width='9vw'>Carrefour</DrawerCuboid>
                <DrawerCuboid width='8.3vw'>Pepsi</DrawerCuboid>
                <DrawerCuboid width='11vw'>Desperados</DrawerCuboid>
                <DrawerCuboid width='10vw'>Heineken</DrawerCuboid>
                <DrawerCuboid width='9vw'>Develey</DrawerCuboid>
                <DrawerCuboid width='12vw'>Costa Coffee</DrawerCuboid>
                <DrawerCuboid width='8vw'>Tchibo</DrawerCuboid>
                <DrawerCuboid width='7vw'>Stock</DrawerCuboid>
                <DrawerCuboid width='9vw'>Sephora</DrawerCuboid>
                <DrawerCuboid width='8.3vw'>Clarins</DrawerCuboid>
            </div>
            <CoSlider/>
        </section>
    );
};

export default CoSection;