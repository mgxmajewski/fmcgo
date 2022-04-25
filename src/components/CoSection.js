import React, {useCallback, useEffect, useMemo, useState} from 'react';

import {coCopy, coDrawers, coSection, coTagline} from '../styles/co-section.module.css'
import CoSlider from "./CoSlider";
import DrawerCuboidZAnimation from "./Drawers/DrawerCuboidZAnimation";
import "aos/dist/aos.css";


const CoSection = ({coSectionRef, coAboveSliderRef, coSliderRef}) => {

    const [isRunningOne, setIsRunningOne] = useState('paused')
    const [isRunningTwo, setIsRunningTwo] = useState('paused')
    const [isRunningThree, setIsRunningThree] = useState('paused')
    const [isRunningFour, setIsRunningFour] = useState('paused')
    const [isRunningFive, setIsRunningFive] = useState('paused')
    const [isRunningSix, setIsRunningSix] = useState('paused')
    const [isRunningSeven, setIsRunningSeven] = useState('paused')
    const [isRunningEight, setIsRunningEight] = useState('paused')
    const [isRunningNine, setIsRunningNine] = useState('paused')
    const [isRunningTen, setIsRunningTen] = useState('paused')

    const flipStart = () => null
    const flipOne = useCallback(() => {setIsRunningOne(isRunningOne === 'paused' ? 'running' : 'paused')},[isRunningOne])
    const flipTwo = useCallback(() => {setIsRunningTwo(isRunningTwo === 'paused' ? 'running' : 'paused')     },[isRunningTwo])
    const flipThree = useCallback(() =>{ setIsRunningThree(isRunningThree === 'paused' ? 'running' : 'paused') },[isRunningThree])
    const flipFour = useCallback(() => {setIsRunningFour(isRunningFour === 'paused' ? 'running' : 'paused')   },[isRunningFour])
    const flipFive = useCallback(() => {setIsRunningFive(isRunningFive === 'paused' ? 'running' : 'paused')   },[isRunningFive])
    const flipSix = useCallback(() =>{ setIsRunningSix(isRunningSix === 'paused' ? 'running' : 'paused')     },[isRunningSix])
    const flipSeven = useCallback(() => {setIsRunningSeven(isRunningSeven === 'paused' ? 'running' : 'paused') },[isRunningSeven])
    const flipEight = useCallback(() => {setIsRunningEight(isRunningEight === 'paused' ? 'running' : 'paused') },[isRunningEight])
    const flipNine = useCallback(() =>{ setIsRunningNine(isRunningNine === 'paused' ? 'running' : 'paused')   },[isRunningNine])
    const flipTen = useCallback(() => {setIsRunningTen(isRunningTen === 'paused' ? 'running' : 'paused')}, [isRunningTen])
    const flipFinish = () => null

    const createIntervalsArray = () => [flipStart, flipOne, flipTwo, flipThree, flipFour, flipFive, flipSix, flipSeven, flipEight, flipNine, flipTen, flipFinish, flipFinish, flipFinish, flipFinish]

    const intervalsArray = useMemo(createIntervalsArray,[flipOne, flipTwo, flipThree, flipFour, flipFive, flipSix, flipSeven, flipEight, flipNine, flipTen])


    const flipAll = useCallback(() => {
        flipOne()
        flipTwo()
        flipThree()
        flipFour()
        flipFive()
        flipSix()
        flipSeven()
        flipEight()
        flipNine()
        flipTen()
    },[flipOne, flipTwo, flipThree, flipFour, flipFive, flipSix, flipSeven, flipEight, flipNine, flipTen]);

    // useEffect(() => {
    //     flipOne()
    // }, [])

    const [iterator, setIterator] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {

            console.log(iterator)
            const isInArray = iterator <= intervalsArray.length

            if (isInArray) {
                intervalsArray[iterator]()
                intervalsArray[iterator + 1]()
            }

            if (iterator === 11) {
                flipAll()
            }
            if (iterator === 12){
                flipAll()
                setIterator(0)
            }
            setIterator(iterator + 1)

            if (iterator === 13) {
                setIterator(0)
            }
        }, 2000)

        return () => clearTimeout(interval)
    }, [iterator, flipAll, intervalsArray])


    //
    // setTimeout(() => {
    //         flipTwo()
    //     }, 4000)
    //
    //     setTimeout(() => {
    //         flipThree()
    //     }, 6000)
    //
    //     setTimeout(() => {
    //         flipFour()
    //     }, 8000)
    //
    //     setTimeout(() => {
    //         flipFive()
    //     }, 10000)
    //
    //     setTimeout(() => {
    //         flipSix()
    //     }, 12000)
    //
    //     setTimeout(() => {
    //         flipSeven()
    //     }, 14000)
    //
    //     setTimeout(() => {
    //         flipEight()
    //     }, 16000)
    //
    //     setTimeout(() => {
    //         flipNine()
    //     }, 18000)
    //
    //     setTimeout(() => {
    //         flipTen()
    //     }, 20000)


    //
    // useEffect(() => {
    //     setTimeout(() => {
    //         flipThree()
    //     }, 8000)
    // }, [])
    //
    // useEffect(() => {
    //     setTimeout(() => {
    //         flipFour()
    //     }, 10000)
    // }, [])
    //
    // useEffect(() => {
    //     setTimeout(() => {
    //         flipFive()
    //     }, 2000)
    // }, [])


    // useEffect(() => {
    //     let interval
    //     setTimeout(() => {
    //         flipTwo()
    //     }, 8000)
    //     setTimeout(() => {
    //         flipOne()
    //         // interval = setInterval(() => {
    //         //     flipOne()
    //         // }, 18000);
    //     }, 16000)
    //
    //     return () => clearInterval(interval);
    // }, [isRunningTwo])

    // [isRunningOne, isRunningTwo, isRunningThree, isRunningFour, isRunningFive, isRunningSix, isRunningSeven, isRunningEight, isRunningNine, isRunningTen]

    return (
        <section ref={coSectionRef} className={coSection} id="co-section">
            <div
                data-aos="fade-down"
                data-aos-once="true"
                className={coTagline}
            >
                Filip<sup>&</sup>Marcel<sup>&</sup>Co<sup>Go</sup></div>
            <div
                data-aos="fade-up"
                data-aos-once="true"
                className={coCopy}>
                <b>There’s 40 years of experience in advertising between us.</b> We’ve served as heads of departments,
                creative directors, senior creatives. For last 7 years we’ve been working together on hundreds of
                campaigns for brands from all categories imaginable. Along this way, we’ve discovered that what really
                turns us on is adverting that is meant to sell.
            </div>
            <div
                data-aos="fade-right"
                data-aos-once="true"
                ref={coAboveSliderRef}
                className={coDrawers}
            >
                <DrawerCuboidZAnimation
                    brand='carrefour'
                    section='co-section'
                    drawerDelay='0s'
                    pause={isRunningOne}
                >
                    Carrefour
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='pepsi'
                    section='co-section'
                    // drawerDelay='4s'
                    pause={isRunningTwo}
                >
                    Pepsi
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='desperados'
                    section='co-section'
                    //drawerDelay='4s'
                    pause={isRunningThree}
                >
                    Desperados
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='heineken'
                    section='co-section'
                    //drawerDelay='6s'
                    pause={isRunningFour}
                >
                    Heineken
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='develey'
                    section='co-section'
                    //drawerDelay='8s'
                    pause={isRunningFive}
                >
                    Develey
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='costa'
                    section='co-section'
                    //drawerDelay='10s'
                    pause={isRunningSix}
                >
                    Costa Coffee
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='tchibo'
                    section='co-section'
                    //drawerDelay='12s'
                    pause={isRunningSeven}
                >
                    Tchibo
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='stock'
                    section='co-section'
                    //drawerDelay='14s'
                    pause={isRunningEight}
                >
                    Stock
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='sephora'
                    section='co-section'
                    //drawerDelay='16s'
                    pause={isRunningNine}
                >
                    Sephora
                </DrawerCuboidZAnimation>
                <DrawerCuboidZAnimation
                    brand='clarins'
                    section='co-section'
                    //drawerDelay='18s'
                    pause={isRunningTen}
                >
                    Clarins
                </DrawerCuboidZAnimation>
            </div>
            <CoSlider coSliderRef={coSliderRef}/>
        </section>
    );
};

export default CoSection;