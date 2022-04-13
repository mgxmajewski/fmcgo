import React from 'react';
import {AdjustedDrawer} from "../DrawerCuboidDynamicProps";
import {
    back,
    cube,
    defaultDrawerDimension,
    drawerContainer,
    front,
    left,
    right,
    side
} from "../../../styles/drawer-cuboid.module.css";

const DrawerCuboidStatic = (props) => {

    const {width, height, depth,  cubeColor, fontColor, children, brand, section} = props

    return (
        <div className={defaultDrawerDimension}>
            <AdjustedDrawer brand={brand} section={section} width={width} height={height} depth={depth} cubeColor={cubeColor} fontColor={fontColor}>
                <div className={drawerContainer}>
                    <div className={`${cube}`}>
                        <div className={`${side} ${front}`}>{children}</div>
                        <div className={`${side} ${left}`}></div>
                        <div className={`${side} ${right}`}></div>
                        <div className={`${side} ${back}`}></div>
                    </div>
                </div>
            </AdjustedDrawer>
        </div>
    );
};

export default DrawerCuboidStatic;