import React from 'react';
import DrawerCuboidStatic from "./Drawers/DrawerCuboidStatic";
import SliderArrowLeft from '../assets/slider-arrow-left.svg'
import SliderArrowRight from '../assets/slider-arrow-right.svg'
import {StaticImage} from "gatsby-plugin-image";


import {
    arrow,
    coSlider,
    emptyDot,
    sliderCopy,
    sliderDots,
    sliderLeftArrow,
    sliderName,
    sliderPictureContainer,
    sliderImage,
    sliderRightArrow,
    whiteDot
} from '../styles/co-slider.module.css'


// export const query = graphql`
//     query {
//         slideOne: file(relativePath: { eq: "images/filip.jpg" }) {
//             childImageSharp {
//                 gatsbyImageData(layout: FULL_WIDTH)
//             }
//         },
//         slideTwo: file(relativePath: { eq: "images/marcel.jpg" }) {
//             childImageSharp {
//                 gatsbyImageData(layout: FULL_WIDTH)
//             }
//         },
//     }
// `

//"cover" | "fill" | "inside" | "outside" | "contain";

const CoSlider = ({data}) => {

    return (
        <div className={coSlider}>
            <div className={sliderPictureContainer}>
                <StaticImage
                    className={sliderImage}
                    alt={'Filip Szperl Photo'}
                    src="../images/filip.jpg"
                    transformOptions= {{
                        // fit: "outside",
                        // cropFocus: "attention"
                        // cropFocus: 90
                    }}
                />
            </div>
            <div className={sliderName}>Filip<sup>Szperl</sup></div>
            <div className={sliderLeftArrow}>
                <DrawerCuboidStatic
                    section='co-section'
                    brand='slider'
                >
                    <SliderArrowLeft className={arrow}/>
                </DrawerCuboidStatic>
            </div>
            <div className={sliderCopy}>
                <b>There’s 40 years of experience in advertising between us.</b> We’ve served as heads of departments,
                creative directors, senior creatives.<br/>
                For last 7 years we’ve been working together on hundreds of campaigns for brands from all categories
                imaginable. Along this
                way, we’ve discovered that what really turns us on is adverting that is meant to sell.
            </div>
            <div className={sliderRightArrow}>
                <DrawerCuboidStatic
                    section='co-section'
                    brand='slider'
                >
                    <SliderArrowRight className={arrow}/>
                </DrawerCuboidStatic>
            </div>
            <div className={sliderDots}>
                <div className={whiteDot}></div>
                <div className={emptyDot}></div>
            </div>
        </div>
    );
};

export default CoSlider;