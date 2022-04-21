import React from 'react';
// import {AdjustedDrawer} from "../DrawerCuboidDynamicProps";
import {
    DefaultDrawerDimensionsProvider,
    DrawerContainer,
    Cube,
    FrontSide,
    LeftSide,
    RightSide,
    BackSide
} from "../DrawerCuboidElements"
// import {
//     back,
//     cube,
//     defaultDrawerDimension,
//     drawerContainer,
//     front,
//     frontZAnimation,
//     left,
//     leftZAnimation,
//     right,
//     rightZAnimation,
//     side
// } from "../../../styles/drawer-cuboid.module.css";

const DrawerCuboidZAnimation = (props) => {

    const {width, height, depth, brand, children, section} = props

    return (
        <DefaultDrawerDimensionsProvider>
                <DrawerContainer brand={brand} width={width} height={height} section={section} depth={depth}>
                    <Cube >
                        {/*<FrontSide className="front-z-animation">{children}</FrontSide>*/}
                        {/*<LeftSide className="left-z-animation"></LeftSide>*/}
                        {/*<RightSide className="right-z-animation"></RightSide>*/}
                        <FrontSide className="front-z-animation">{children}</FrontSide>
                        <LeftSide className="left-z-animation"></LeftSide>
                        <RightSide className="right-z-animation"></RightSide>
                        <BackSide></BackSide>
                    </Cube>
                </DrawerContainer>
        </DefaultDrawerDimensionsProvider>
    );
};

export default DrawerCuboidZAnimation;