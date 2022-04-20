import React, {useState} from 'react';
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
    sliderImage,
    sliderLeftArrow,
    sliderName,
    sliderPictureContainer,
    sliderRightArrow,
    whiteDot
} from '../styles/co-slider.module.css'

const CoSlider = ({data}) => {

    const [sliderState, setSliderState] = useState(true);
    const [touchPosition, setTouchPosition] = useState(null)

    const toggleSlider = () => {
        setSliderState(!sliderState);
    }

    const handleKeyDown = (e) => {
          // check keys if you want
        if (e.keyCode === 39 || e.keyCode === 37) {
            toggleSlider()
         }
      }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            toggleSlider()
        }

        if (diff < -5) {
            toggleSlider()
        }

        setTouchPosition(null)
    }

    return (
        <div id="slider-container" className={coSlider}
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
        >
            <div id="slider-picture" className={sliderPictureContainer}>
                {sliderState
                    ?
                    <StaticImage
                        className={sliderImage}
                        alt={'Filip Szperl Photo'}
                        src="../images/filip.jpg"
                    />
                    :
                    <StaticImage
                        className={sliderImage}
                        alt={'Marcel Cegliński Photo'}
                        src="../images/marcel.jpg"
                    />
                }
            </div>
            {sliderState
                ? <div className={sliderName}>Filip<sup>Szperl</sup></div>
                : <div className={sliderName}>Marcel<sup>Cegliński</sup></div>
            }
            <div
                className={sliderLeftArrow}
                onClick={() => toggleSlider()}
                onKeyDown={(e)=> handleKeyDown(e)}
                role="button"
                tabIndex="0"
            >
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
            <div
                className={sliderRightArrow}
                onClick={() => toggleSlider()}
                onKeyDown={(e)=> handleKeyDown(e)}
                role="button"
                tabIndex="0"
            >
                <DrawerCuboidStatic
                    section='co-section'
                    brand='slider'

                >
                    <SliderArrowRight className={arrow}/>
                </DrawerCuboidStatic>
            </div>
            <div className={sliderDots}>
                {sliderState
                    ?
                    <>
                        <div
                            className={whiteDot}
                        >
                        </div>
                        <div
                            className={emptyDot}
                            onClick={() => toggleSlider()}
                            onKeyDown={(e)=> handleKeyDown(e)}
                            role="button"
                            tabIndex="0"
                        >
                        </div>
                    </>
                    :
                    <>
                        <div
                            className={emptyDot}
                            onClick={() => toggleSlider()}
                            onKeyDown={(e)=> handleKeyDown(e)}
                            role="button"
                            tabIndex="0"
                        >
                        </div>
                        <div
                            className={whiteDot}
                        >
                        </div>
                    </>
                }

            </div>
        </div>
    );
};

export default CoSlider;