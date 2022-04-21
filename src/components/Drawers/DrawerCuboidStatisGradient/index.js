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

const DrawerCuboidStatisGradient = (props) => {
    const {brand, width, height, depth, cubeColor, fontColor, children, section} = props

    return (
        // <div className={defaultDrawerDimension}>
        //     <AdjustedDrawer width={width} height={height} depth={depth} section={section} cubeColor={cubeColor} fontColor={fontColor}>
        //         <div className={drawerContainer}>
        //             <div className={`${cube}`}>
        //                 <div className={`${side} ${front} ${gradientFront}`}>{children}</div>
        //                 <div className={`${side} ${left} ${gradientMatchLeft}`}></div>
        //                 <div className={`${side} ${right} ${gradientMatchRight}`}></div>
        //                 <div className={`${side} ${back} ${gradientBack}`}></div>
        //
        //                 {/*<div className={`${side} ${hackyDivGradientBackTop}`}></div>*/}
        //                 {/*<div className={`${side} ${hackyDivGradientBackBottom}`}></div>*/}
        //                 {/*<div className={`${side} ${hackyDivGradientBackLeft}`}></div>*/}
        //                 {/*<div className={`${side} ${hackyDivGradientBackRight}`}></div>*/}
        //             </div>
        //         </div>
        //     </AdjustedDrawer>
        // </div>
         <DefaultDrawerDimensionsProvider>
                <DrawerContainer brand={brand} section={section} width={width} height={height} depth={depth} cubeColor={cubeColor} fontColor={fontColor}>
                    <Cube>
                        <FrontSide className="gradient-front">{children}</FrontSide>
                        <LeftSide className="gradient-match-left"></LeftSide>
                        <RightSide className="gradient-match-right"></RightSide>
                        <BackSide className="gradient-back"></BackSide>
                    </Cube>
                </DrawerContainer>
        </DefaultDrawerDimensionsProvider>
    );
};

export default DrawerCuboidStatisGradient;