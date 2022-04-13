import React from 'react';


import {coCopy, coDrawers, coSection, coTagline} from '../styles/co-section.module.css'
import CoSlider from "./CoSlider";
import DrawerCuboidZAnimation from "./Drawers/DrawerCuboidZAnimation";

const CoSection = () => {

    // Check if window is defined (so if in the browser or in node.js).
    const isBrowser = typeof window !== "undefined"

    let breakPoint;

    if (isBrowser) {
        breakPoint = window.innerWidth
    }

    const drawerHeight = breakPoint > 900 ? '4.2vw' : '9vw'
    const drawerDepth = breakPoint > 900 ? '4vw' : '10vw'

    const CarrefourWidth = breakPoint > 900 ? '11.5vw' : '24vw'
    const PepsiWidth = breakPoint > 900 ? '8.2vw' : '17vw'
    const DesperadosWidth = breakPoint > 900 ? '11.2vw' : '28vw'
    const HeinekenWidth = breakPoint > 900 ? '11.1vw' : '24vw'
    const DeveleyWidth = breakPoint > 900 ? '11vw' : '22vw'
    const CostaCoffeeWidth = breakPoint > 900 ? '14vw' : '32vw'
    const TchiboWidth = breakPoint > 900 ? '10vw' : '20vw'
    const StockWidth = breakPoint > 900 ? '8.2vw' : '17vw'
    const SephoraWidth = breakPoint > 900 ? '11vw' : '22vw'
    const ClarinsWidth = breakPoint > 900 ? '10.5vw' : '21vw'

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
                <DrawerCuboidZAnimation
                    height={drawerHeight}
                    depth={drawerDepth}
                    width={CarrefourWidth}
                >
                    Carrefour
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    height={drawerHeight}
                    depth={drawerDepth}
                    width={PepsiWidth}
                >
                    Pepsi
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    height={drawerHeight}
                    depth={drawerDepth}
                    width={DesperadosWidth}
                >
                    Desperados
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    height={drawerHeight}
                    depth={drawerDepth}
                    width={HeinekenWidth}
                >
                    Heineken
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    height={drawerHeight}
                    depth={drawerDepth}
                    width={DeveleyWidth}
                >
                    Develey
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    height={drawerHeight}
                    depth={drawerDepth}
                    width={CostaCoffeeWidth}
                >
                    Costa Coffee
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    height={drawerHeight}
                    depth={drawerDepth}
                    width={TchiboWidth}
                >
                    Tchibo
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    height={drawerHeight}
                    depth={drawerDepth}
                    width={StockWidth}
                >
                    Stock
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    height={drawerHeight}
                    depth={drawerDepth}
                    width={SephoraWidth}
                >
                    Sephora
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    height={drawerHeight}
                    depth={drawerDepth}
                    width={ClarinsWidth}
                >
                    Clarins
                </DrawerCuboidZAnimation>
            </div>
            <CoSlider/>
        </section>
    );
};

export default CoSection;