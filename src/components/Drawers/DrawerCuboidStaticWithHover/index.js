import React from 'react';
import {
    DefaultDrawerDimensionsProvider,
    DrawerContainer,
    Cube,
    LeftSide,
    RightSide,
    BackSide,
    FrontSideWithHover
} from "../DrawerCuboidElements"

const DrawerCuboidStaticWithHover = (props) => {

    const {width, height, depth,  cubeColor, fontColor, children, brand, section, hover} = props

    return (
        <DefaultDrawerDimensionsProvider>
                <DrawerContainer hover={hover} brand={brand} section={section} width={width} height={height} depth={depth} cubeColor={cubeColor} fontColor={fontColor}>
                    <Cube>
                        <FrontSideWithHover>{children}</FrontSideWithHover>
                        <LeftSide></LeftSide>
                        <RightSide></RightSide>
                        <BackSide></BackSide>
                    </Cube>
                </DrawerContainer>
        </DefaultDrawerDimensionsProvider>
    );
};

export default DrawerCuboidStaticWithHover;