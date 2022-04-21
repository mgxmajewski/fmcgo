import React from 'react';
import {
    DefaultDrawerDimensionsProvider,
    DrawerContainer,
    Cube,
    FrontSide,
    LeftSide,
    RightSide,
    BackSide
} from "../DrawerCuboidElements"

const DrawerCuboidZAnimation = (props) => {

    const {width, height, depth, brand, children, section} = props

    return (
        <DefaultDrawerDimensionsProvider>
                <DrawerContainer brand={brand} width={width} height={height} section={section} depth={depth}>
                    <Cube>
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