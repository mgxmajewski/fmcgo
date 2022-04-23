import React from 'react';

import {coCopy, coDrawers, coSection, coTagline} from '../styles/co-section.module.css'
import CoSlider from "./CoSlider";
import DrawerCuboidZAnimation from "./Drawers/DrawerCuboidZAnimation";

const CoSection = ({ coSectionRef, coAboveSliderRef, coSliderRef}) => {

    return (
        <section ref={coSectionRef} className={coSection} id="co-section">
            <div className={coTagline}>Filip<sup>&</sup>Marcel<sup>&</sup>Co<sup>Go</sup></div>
            <div className={coCopy}>
                <b>There’s 40 years of experience in advertising between us.</b> We’ve served as heads of departments,
                creative directors, senior creatives. For last 7 years we’ve been working together on hundreds of
                campaigns for brands from all categories imaginable. Along this way, we’ve discovered that what really
                turns us on is adverting that is meant to sell.
            </div>
            <div ref={coAboveSliderRef} className={coDrawers}>
                <DrawerCuboidZAnimation
                    brand='carrefour'
                    section='co-section'
                >
                    Carrefour
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='pepsi'
                    section='co-section'
                >
                    Pepsi
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='desperados'
                    section='co-section'
                >
                    Desperados
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='heineken'
                    section='co-section'
                >
                    Heineken
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='develey'
                    section='co-section'
                >
                    Develey
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='costa'
                    section='co-section'
                >
                    Costa Coffee
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='tchibo'
                    section='co-section'
                >
                    Tchibo
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='stock'
                    section='co-section'
                >
                    Stock
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='sephora'
                    section='co-section'
                >
                    Sephora
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='clarins'
                    section='co-section'
                >
                    Clarins
                </DrawerCuboidZAnimation>
            </div>
            <CoSlider coSliderRef={coSliderRef}/>
        </section>
    );
};

export default CoSection;