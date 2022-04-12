import React from 'react';
import {AdjustedDrawer} from './DrawerCuboidZAnimationElements'
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

    const {width, height, depth, children} = props

    return (
        <div className={defaultDrawerDimension}>
            <AdjustedDrawer width={width} height={height} depth={depth}>
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