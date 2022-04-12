import React from 'react';
import {AdjustedDrawer} from "./DrawerCuboidStatisGradientElements";

import {
    back,
    gradientBack,
    cube,
    defaultDrawerDimension,
    drawerContainer,
    front,
    left,
    right,
    side,
    gradientFront,
    gradientMatchLeft,
    gradientMatchRight,
} from "../../../styles/drawer-cuboid.module.css";

const DrawerCuboidStatisGradient = (props) => {
    const {width, height, depth, cubeColor, fontColor, children} = props

    return (
        <div className={defaultDrawerDimension}>
            <AdjustedDrawer width={width} height={height} depth={depth} cubeColor={cubeColor} fontColor={fontColor}>
                <div className={drawerContainer}>
                    <div className={`${cube}`}>
                        <div className={`${side} ${front} ${gradientFront}`}>{children}</div>
                        <div className={`${side} ${left} ${gradientMatchLeft}`}></div>
                        <div className={`${side} ${right} ${gradientMatchRight}`}></div>
                        <div className={`${side} ${back} ${gradientBack}`}></div>

                        {/*<div className={`${side} ${hackyDivGradientBackTop}`}></div>*/}
                        {/*<div className={`${side} ${hackyDivGradientBackBottom}`}></div>*/}
                        {/*<div className={`${side} ${hackyDivGradientBackLeft}`}></div>*/}
                        {/*<div className={`${side} ${hackyDivGradientBackRight}`}></div>*/}
                    </div>
                </div>
            </AdjustedDrawer>
        </div>
    );
};

export default DrawerCuboidStatisGradient;