import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {
    goOrbit,
    threeSixtyDrawers,
    threeSixtySection,
    threeSixtyTagline
} from '../../styles/three-sixty-section.module.css'
import DrawerCuboidZAnimation from "./Drawers/DrawerCuboidZAnimation";
import "aos/dist/aos.css";
import {usePageVisibility} from '../../hooks/useVisibilityHook'


const ThreeSixtySection = ({threeSixtySectionRef, experienceDrawersRef, experienceInView}) => {

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
    const [isRunningEleven, setIsRunningEleven] = useState('paused')

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

    const flipEleven = useCallback(() => {
        setIsRunningEleven(isRunningEleven === 'paused' ? 'running' : 'paused')
    }, [isRunningEleven])

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
        flipEleven,
        flipBlankFrame,
        flipBlankFrame
    ]

    const intervalsArray = useMemo(createIntervalsArray,
        [flipOne, flipTwo, flipThree, flipFour, flipFive, flipSix, flipSeven, flipEight, flipNine, flipTen, flipEleven]
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
        flipEleven()
    }, [flipOne, flipTwo, flipThree, flipFour, flipFive, flipSix, flipSeven, flipEight, flipNine, flipTen, flipEleven]);

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
            id="three-sixty-section"
            ref={threeSixtySectionRef}
            className={threeSixtySection}
        >
            <div
                className={threeSixtyTagline}
            >
                <div
                    data-aos="fade-down"
                    data-aos-once="true"
                    ref={experienceDrawersRef}
                >
                    Go&nbsp;360&deg;
                </div>
                <div className={goOrbit}>
                    <StaticImage
                        alt={'star graphic'}
                        src="../images/goorbit.png"
                    />
                </div>

            </div>
            {isVisibleAndActiveTab && experienceInView ?
                <div
                    className={threeSixtyDrawers}
                >
                    <DrawerCuboidZAnimation
                        brand='rd'
                        section='co-section'
                        // drawerDelay='0s'
                        pause={isRunningOne}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        R&D
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='product-innovation'
                        section='co-section'
                        pause={isRunningTwo}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                       innovation produit
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='marketing-innovation'
                        section='co-section'
                        pause={isRunningThree}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        innovation marketing
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='brand-design'
                        section='co-section'
                        pause={isRunningFour}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        design de marque
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='marketing-strategies'
                        section='co-section'
                        pause={isRunningFive}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        stratégies marketing
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='communication-strategies'
                        section='co-section'
                        pause={isRunningSix}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        stratégies de communication
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='communication-platforms'
                        section='co-section'
                        pause={isRunningSeven}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        plateformes de communication
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='tv-campaigns'
                        section='co-section'
                        pause={isRunningEight}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        campagnes TV/radio/RHD
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='digital-communication'
                        section='co-section'
                        pause={isRunningNine}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        médias numériques et sociaux
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='consumer-activations'
                        section='co-section'
                        pause={isRunningTen}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        activation marketing
                    </DrawerCuboidZAnimation>
                    <DrawerCuboidZAnimation
                        brand='in-store'
                        section='co-section'
                        pause={isRunningEleven}
                        cubeColor={cubeColor}
                        fontColor={fontColor}
                    >
                        communication en magasin
                    </DrawerCuboidZAnimation>
                </div>
                :
                <></>
            }
        </section>
    )
        ;
};

export default ThreeSixtySection;