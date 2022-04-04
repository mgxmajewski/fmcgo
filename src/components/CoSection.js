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
                <DrawerCuboid width='9vw' brand='Carrefour'/>
                <DrawerCuboid width='8vw' brand='Pepsi'/>
                <DrawerCuboid width='11vw' brand='Desperados'/>
                <DrawerCuboid width='10vw' brand='Heineken'/>
                <DrawerCuboid width='9vw' brand='Develey'/>
                <DrawerCuboid width='12vw' brand='Costa Coffee'/>
                <DrawerCuboid width='8vw' brand='Tchibo'/>
                <DrawerCuboid width='7vw' brand='Stock'/>
                <DrawerCuboid width='9vw' brand='Sephora'/>
                <DrawerCuboid width='8vw' brand='Clarins'/>
            </div>
            <CoSlider/>
        </section>
    );
};

export default CoSection;