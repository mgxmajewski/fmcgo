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

const DrawerCuboidStatic = (props) => {

    const {width, height, depth,  cubeColor, fontColor, children, brand, section} = props

    return (
        <DefaultDrawerDimensionsProvider>
                <DrawerContainer brand={brand} section={section} width={width} height={height} depth={depth} cubeColor={cubeColor} fontColor={fontColor}>
                    <Cube>
                        <FrontSide>{children}</FrontSide>
                        <LeftSide></LeftSide>
                        <RightSide></RightSide>
                        <BackSide></BackSide>
                    </Cube>
                </DrawerContainer>
        </DefaultDrawerDimensionsProvider>
    );
};

export default DrawerCuboidStatic;