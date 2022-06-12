import * as React from "react"
import {useEffect, useState} from "react"
import Layout from "../components/Layout";
import GoHero from "../components/GoHero";
import CoSection from "../components/CoSection";
import NetworkSection from "../components/NetworkSection";
import NewsSection from "../components/NewsSection";
import GoContactSection from "../components/GoContactSection";
import Radical from "../components/Radical"
import {useInView} from "react-intersection-observer";

const IndexPage = ({ref}) => {

    const [heroSectionRef, heroSectionInView] = useInView({rootMargin: '-36px'});
    const [radicalSectionRef, radicalSectionInView] = useInView({rootMargin: '-36px'});
    const [coSectionRef, coSectionInView] = useInView({rootMargin: '-36px'});
    const [drawersInNetworkSectionRef, drawersInNetworkInView] = useInView({rootMargin: '400px'});
    const [coSliderRef, coSliderInView] = useInView();
    const [networkSectionRef, networkSectionInView] = useInView({rootMargin: '-36px'});
    const [contactSectionRef, contactSectionInView] = useInView();

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavState = () => {
        setIsOpen(!isOpen);
    }

    const [isNavFontBright, setIsNavFontBright] = useState('false');
    const [areSocialIconsVisible, setAreSocialIconsVisible] = useState('true');

    useEffect(() => {

        if (!heroSectionInView && radicalSectionInView) {
            setAreSocialIconsVisible('false')
        } else {
            setAreSocialIconsVisible('true')
        }

        if (
            (!heroSectionInView && radicalSectionInView) ||
            (!drawersInNetworkInView && coSliderInView)
            // (!coSectionInView && boardSectionInView)
            // (!newsSectionInView && contactSectionInView)
        ) {
            setIsNavFontBright('true')
        } else {
            setIsNavFontBright('false')
        }

    }, [
        heroSectionInView,
        radicalSectionInView,
        coSectionInView,
        drawersInNetworkInView,
        coSliderInView,
        // newsSectionInView,
        networkSectionInView,
        contactSectionInView,
        areSocialIconsVisible])

    return (
        <Layout
            isNavFontBright={isNavFontBright}
            isOpen={isOpen}
            toggle={toggleNavState}
        >
            <GoHero heroSectionRef={heroSectionRef}/>
            <Radical
                radicalRef={radicalSectionRef}
                areSocialIconsVisible={areSocialIconsVisible}
            />
            <CoSection
                coSectionRef={coSectionRef}
                coAboveSliderRef={drawersInNetworkSectionRef}
                coSliderRef={coSliderRef}
                drawersInNetworkSectionRef={drawersInNetworkSectionRef}
                coAboveSliderInView={drawersInNetworkInView}
            />
            <NetworkSection boardSectionRef={networkSectionRef}/>
            {/*<NewsSection newsSectionRef={newsSectionRef}/>*/}
            <GoContactSection contactSectionRef={contactSectionRef}/>
        </Layout>
    )
}

export default IndexPage
