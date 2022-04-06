import React from 'react';
import styled from 'styled-components';
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
} from "../styles/drawer-cuboid.module.css";

const DrawerCuboidStaticGradient = (props) => {
    const {width, cubeColor, fontColor, children} = props

    const AdjustedDrawer = styled.div`
    --cube-width: ${width};
    --cube-color: ${cubeColor};
    --font-color: ${fontColor};
`;

    return (
        <div className={defaultDrawerDimension}>
            <AdjustedDrawer>
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

export default DrawerCuboidStaticGradient;