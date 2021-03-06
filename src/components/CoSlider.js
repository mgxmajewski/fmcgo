import React, {useState} from 'react';
import DrawerCuboidStaticWithHover from "./Drawers/DrawerCuboidStaticWithHover";
import SliderArrowLeft from '../assets/slider-arrow-left.svg'
import SliderArrowRight from '../assets/slider-arrow-right.svg'
import {StaticImage} from "gatsby-plugin-image";
import "aos/dist/aos.css";
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

const CoSlider = ({data, coSliderRef}) => {


    // const [sliderStateOne, setSliderStateOne] = useState(true);
    // const [sliderStateTwo, setSliderStateTwo] = useState(false);
    const [sliderState, setSliderState] = useState('filip');
    const [touchPosition, setTouchPosition] = useState(null)

    // useEffect(() => {
    //
    // }, [sliderStateOne, sliderStateTwo, setSliderState])

    const toggleSlider = () => {
        // setSliderStateOne(!sliderStateOne);
        // setSliderStateTwo(!sliderStateTwo);
        setSliderState(sliderState === 'filip' ? 'marcel' : 'filip');
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
        <div
            data-aos="fade-up"
            data-aos-once="true"
            id="slider-container"
            className={coSlider}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div ref={coSliderRef} id="slider-picture" className={sliderPictureContainer}>
                {sliderState === 'filip'
                    ?
                    <StaticImage
                        data-aos="fade-in" data-aos-duration="4000"
                        className={sliderImage}
                        alt={'Filip Szperl Photo'}
                        src="../images/filip.jpg"
                    />
                    :
                    <StaticImage
                        data-aos="fade-in" data-aos-duration="4000"
                        className={sliderImage}
                        alt={'Marcel Cegli??ski Photo'}
                        src="../images/marcel.jpg"
                    />
                }
                {/*<SliderImageContainer className={sliderImage} sliderState={false}>*/}
                {/*    {sliderState &&*/}
                {/*        <StaticImage*/}
                {/*        alt={'Filip Szperl Photo'}*/}
                {/*        src={`../images/marcel.jpg`}*/}
                {/*        />*/}
                {/*    }*/}
                {/*</SliderImageContainer>*/}
            </div>
            {sliderState === 'filip'
                ? <div className={sliderName}>Filip<sup>Szperl</sup></div>
                : <div className={sliderName}>Marcel<sup>Cegli??ski</sup></div>
            }
            <div
                className={sliderLeftArrow}
                onClick={() => toggleSlider()}
                onKeyDown={(e) => handleKeyDown(e)}
                role="button"
                tabIndex="-1"
            >
                <DrawerCuboidStaticWithHover
                    section='co-section'
                    brand='slider'
                >
                    <SliderArrowLeft className={arrow}/>
                </DrawerCuboidStaticWithHover>
            </div>
            <div className={sliderCopy}>
                <b>There???s 40 years of experience in advertising between us.</b> We???ve served as heads of departments,
                creative directors, senior creatives.<br/>
                For last 7 years we???ve been working together on hundreds of campaigns for brands from all categories
                imaginable. Along this
                way, we???ve discovered that what really turns us on is adverting that is meant to sell.
            </div>
            <div
                className={sliderRightArrow}
                onClick={() => toggleSlider()}
                onKeyDown={(e) => handleKeyDown(e)}
                role="button"
                tabIndex="-1"
            >
                <DrawerCuboidStaticWithHover
                    section='co-section'
                    brand='slider'
                >
                    <SliderArrowRight className={arrow}/>
                </DrawerCuboidStaticWithHover>
            </div>
            <div className={sliderDots}>
                {sliderState === 'filip'
                    ?
                    <>
                        <div
                            className={whiteDot}
                        >
                        </div>
                        <div
                            className={emptyDot}
                            onClick={() => toggleSlider()}
                            onKeyDown={(e) => handleKeyDown(e)}
                            role="button"
                            tabIndex="-1"
                        >
                        </div>
                    </>
                    :
                    <>
                        <div
                            className={emptyDot}
                            onClick={() => toggleSlider()}
                            onKeyDown={(e) => handleKeyDown(e)}
                            role="button"
                            tabIndex="-1"
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