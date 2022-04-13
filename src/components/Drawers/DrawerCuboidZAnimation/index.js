import React from 'react';
import {AdjustedDrawer} from "../DrawerCuboidDynamicProps";
import {
    back,
    cube,
    defaultDrawerDimension,
    drawerContainer,
    front,
    frontZAnimation,
    left,
    leftZAnimation,
    right,
    rightZAnimation,
    side
} from "../../../styles/drawer-cuboid.module.css";

const DrawerCuboidZAnimation = (props) => {

    const {width, height, depth, brand, children, section} = props

    return (
        <div className={defaultDrawerDimension}>
            <AdjustedDrawer width={width} height={height} section={section} depth={depth} brand={brand}>
                <div className={drawerContainer}>
                    <div className={cube}>
                        <div className={`${side} ${front} ${frontZAnimation}`}>{children}</div>
                        <div className={`${side} ${left} ${leftZAnimation}`}></div>
                        <div className={`${side} ${right} ${rightZAnimation}`}></div>
                        <div className={`${side} ${back}`}></div>
                    </div>
                </div>
            </AdjustedDrawer>
        </div>
    );
};

export default DrawerCuboidZAnimation;