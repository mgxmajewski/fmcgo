import React from 'react';
import {
    BackSide,
    Cube,
    DefaultDrawerDimensionsProvider,
    DrawerContainer,
    FrontSide,
    LeftSide,
    RightSide
} from "../DrawerCuboidElements"

const DrawerCuboidZAnimation = (props) => {

    const {width, height, depth, brand, children, section, pause} = props

    return (
        <DefaultDrawerDimensionsProvider>
            <DrawerContainer
                brand={brand}
                width={width}
                height={height}
                section={section}
                depth={depth}
                pause={pause}
            >
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