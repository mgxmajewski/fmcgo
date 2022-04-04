import React from 'react';
import styled from 'styled-components';
import {
    back,
    cube,
    defaultDrawerDimension,
    drawerContainer,
    front,
    left,
    right,
    side
} from "../styles/drawer-cuboid.module.css";



const DrawerCuboid = (props) => {

    const {text, width} = props

const AdjustedDrawer = styled.div`
    --cube-width: ${width};
`;
    return (
        <div className={defaultDrawerDimension}>
            <AdjustedDrawer>
                <div className={drawerContainer}>
                    <div className={cube}>
                        <div className={`${side} ${front}`}>{text}</div>
                        <div className={`${side} ${left}`}></div>
                        <div className={`${side} ${right}`}></div>
                        <div className={`${side} ${back}`}></div>
                    </div>
                </div>
            </AdjustedDrawer>
        </div>
    );
};

export default DrawerCuboid;