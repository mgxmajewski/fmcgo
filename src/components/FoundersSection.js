import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {coCopy, coDrawers, coSection, coTagline, plusStar} from '../styles/co-section.module.css'
import FoundersPictures from "./FoundersPictures";
import DrawerCuboidZAnimation from "./Drawers/DrawerCuboidZAnimation";
import "aos/dist/aos.css";
import {usePageVisibility} from './useVisibilityHook'


const FoundersSection = ({foundersSectionRef, foundersExperienceRef, founderOneRef, founderTwoRef, foundersExperienceInView}) => {

    const isVisibleAndActiveTab = usePageVisibility()

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

    const flipBlankFrame = () => null

    const flipOne = useCallback(() => {
        setIsRunningOne(isRunningOne === 'paused' ? 'running' : 'paused')
    }, [isRunningOne])

    const flipTwo = useCallback(() => {
        setIsRunningTwo(isRunningTwo === 'paused' ? 'running' : 'paused')
    }, [isRunningTwo])

    const flipThree = useCallback(() => {
        setIsRunningThree(isRunningThree === 'paused' ? 'running' : 'paused')
    }, [isRunningThree])

    const flipFour = useCallback(() => {
        setIsRunningFour(isRunningFour === 'paused' ? 'running' : 'paused')
    }, [isRunningFour])

    const flipFive = useCallback(() => {
        setIsRunningFive(isRunningFive === 'paused' ? 'running' : 'paused')
    }, [isRunningFive])

    const flipSix = useCallback(() => {
        setIsRunningSix(isRunningSix === 'paused' ? 'running' : 'paused')
    }, [isRunningSix])

    const flipSeven = useCallback(() => {
        setIsRunningSeven(isRunningSeven === 'paused' ? 'running' : 'paused')
    }, [isRunningSeven])

    const flipEight = useCallback(() => {
        setIsRunningEight(isRunningEight === 'paused' ? 'running' : 'paused')
    }, [isRunningEight])

    const flipNine = useCallback(() => {
        setIsRunningNine(isRunningNine === 'paused' ? 'running' : 'paused')
    }, [isRunningNine])

    const flipTen = useCallback(() => {
        setIsRunningTen(isRunningTen === 'paused' ? 'running' : 'paused')
    }, [isRunningTen])

    const createIntervalsArray = () => [
        flipBlankFrame,
        flipOne,
        flipTwo,
        flipThree,
        flipFour,
        flipFive,
        flipSix,
        flipSeven,
        flipEight,
        flipNine,
        flipTen,
        flipBlankFrame,
        flipBlankFrame
    ]

    const intervalsArray = useMemo(createIntervalsArray,
        [flipOne, flipTwo, flipThree, flipFour, flipFive, flipSix, flipSeven, flipEight, flipNine, flipTen]
    )

    const initialIteratorValue = 0

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
    }, [flipOne, flipTwo, flipThree, flipFour, flipFive, flipSix, flipSeven, flipEight, flipNine, flipTen]);

    const [iterator, setIterator] = useState(0)

    useEffect(() => {

        console.log(foundersExperienceInView)

        const interval = setTimeout(() => {

            // console.log(iterator)
            const isInArray = iterator <= 11
            // console.log(isInArray)

            if (isInArray) {
                intervalsArray[iterator]()
                intervalsArray[iterator + 1]()
            } else {
                flipAll()
            }

            setIterator(prevIterator => prevIterator + 1)

            if (iterator > 12) {
                setIterator(initialIteratorValue)
            }

        }, 1000)

        if (!isVisibleAndActiveTab || !foundersExperienceInView) {
            intervalsArray[iterator]()
            setIterator(initialIteratorValue)
            clearTimeout(interval)
        }

        return () => {
            interval && clearTimeout(interval);
        }
    }, [iterator, flipAll, intervalsArray, isVisibleAndActiveTab, foundersExperienceInView])

    return (
        <section ref={foundersSectionRef} className={coSection}>
            <FoundersPictures
                founderOneRef={founderOneRef}
                founderTwoRef={founderTwoRef}
            />
            <div
                data-aos="fade-down"
                data-aos-once="true"
                className={coTagline}
            >
                <div>Go&nbsp;with&nbsp;experience!</div>
                <StaticImage
                    className={plusStar}
                    data-aos="fade-in" data-aos-duration="4000"
                    alt={'star graphic'}
                    src="../images/starplus.png"
                />
            </div>
            <div
                data-aos="fade-up"
                data-aos-once="true"
                className={coCopy}
                ref={foundersExperienceRef}
                id="founders-experience"
            >
                Każda platforma komunikacji, każda kampania może „przekręcić licznik’, jeśli tylko kreatywność połączy
                się <br/>z ekspertyzą marketingową, produktową i strategiczną.
            </div>
            {/*<div className={coDrawersPlaceholder}>*/}
            {isVisibleAndActiveTab && foundersExperienceInView ?
                <div
                    // data-aos="fade-right"
                    // data-aos-once="true"
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
                :
                <></>
            }
        </section>
    );
};

export default FoundersSection;