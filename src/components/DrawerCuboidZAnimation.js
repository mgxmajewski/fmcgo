import React from 'react';
import styled from 'styled-components';
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
} from "../styles/drawer-cuboid.module.css";

const DrawerCuboidZAnimation = (props) => {

    const {width, children} = props

    const AdjustedDrawer = styled.div`
    --cube-width: ${width};
`;

    return (
        <div className={defaultDrawerDimension}>
            <AdjustedDrawer>
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