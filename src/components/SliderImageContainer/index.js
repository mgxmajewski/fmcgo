import React from 'react';
import {ImageContainer} from "./SliderImageContainerElements";

const SliderImageContainer = ({sliderState, children}) => {

    // const {sliderState} = props

    return (
        <ImageContainer sliderState={sliderState} >
            {children}
        </ImageContainer>
    );
};

export default SliderImageContainer;