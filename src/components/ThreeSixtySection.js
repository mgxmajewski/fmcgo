import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {
    goOrbit,
    threeSixtyDrawers,
    threeSixtySection,
    threeSixtyTagline
} from '../styles/three-sixty-section.module.css'
import DrawerCuboidZAnimation from "./Drawers/DrawerCuboidZAnimation";
import "aos/dist/aos.css";
import {usePageVisibility} from './useVisibilityHook'


const ExperienceSection = ({experienceSectionRef, experienceDrawersRef, experienceInView}) => {

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

        const interval = setTimeout(() => {

            const isInArray = iterator <= 11

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

        if (!isVisibleAndActiveTab || !experienceInView) {
            intervalsArray[iterator]()
            setIterator(initialIteratorValue)
            clearTimeout(interval)
        }

        return () => {
            interval && clearTimeout(interval);
        }
    }, [iterator, flipAll, intervalsArray, isVisibleAndActiveTab, experienceInView])

    const fontColor = 'black'
    const cubeColor = 'white'

    return (
        <section
            ref={experienceSectionRef}
            className={threeSixtySection}
            id="founders-experience"
        >
            <div
                data-aos="fade-up"
                data-aos-once="true"
                className={threeSixtyTagline}
            >
                <div ref={experienceDrawersRef}>Go&nbsp;360&deg;!</div>
                <StaticImage
                    className={goOrbit}
                    data-aos="fade-in" data-aos-duration="4000"
                    alt={'star graphic'}
                    src="../images/goorbit.png"
                />
            </div>
            {/*<div*/}
            {/*    data-aos="fade-up"*/}
            {/*    data-aos-once="true"*/}
            {/*    className={threeSixtyCopy}*/}
            {/*    ref={experienceDrawersRef}*/}
            {/*>*/}
            {/*    Każda platforma komunikacji, każda kampania może „przekręcić licznik’, jeśli tylko kreatywność połączy*/}
            {/*    się <br/>z ekspertyzą marketingową, produktową i strategiczną.*/}
            {/*</div>*/}
            {/*<div className={coDrawersPlaceholder}>*/}
            {isVisibleAndActiveTab && experienceInView ?
                <div
                    className={threeSixtyDrawers}
                >
                    <DrawerCuboidZAnimation
                        brand='carrefour'
                        section='co-section'
                        drawerDelay='0s'
                        pause={isRunningOne}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        Carrefour
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='pepsi'
                        section='co-section'
                        // drawerDelay='4s'
                        pause={isRunningTwo}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        Pepsi
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='desperados'
                        section='co-section'
                        pause={isRunningThree}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        Desperados
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='heineken'
                        section='co-section'
                        pause={isRunningFour}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        Heineken
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='develey'
                        section='co-section'
                        pause={isRunningFive}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        Develey
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='costa'
                        section='co-section'
                        pause={isRunningSix}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        Costa Coffee
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='tchibo'
                        section='co-section'
                        pause={isRunningSeven}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        Tchibo
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='stock'
                        section='co-section'
                        pause={isRunningEight}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        Stock
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='sephora'
                        section='co-section'
                        pause={isRunningNine}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        Sephora
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='clarins'
                        section='co-section'
                        pause={isRunningTen}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        Clarins
                    </DrawerCuboidZAnimation>
                </div>
                :
                <></>
            }
        </section>
    )
        ;
};

export default ExperienceSection;