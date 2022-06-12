import * as React from "react"
import {useEffect, useState} from "react"
import Layout from "../components/Layout";
import GoHero from "../components/GoHero";
import FoundersSection from "../components/FoundersSection";
import NetworkSection from "../components/NetworkSection";
import NewsSection from "../components/NewsSection";
import GoContactSection from "../components/GoContactSection";
import Radical from "../components/Radical"
import {useInView} from "react-intersection-observer";

const IndexPage = ({ref}) => {

    const [heroSectionRef, heroSectionInView] = useInView({rootMargin: '-36px'});
    const [radicalSectionRef, radicalSectionInView] = useInView({rootMargin: '-36px'});
    const [foundersSectionRef, foundersSectionInView] = useInView({rootMargin: '-36px'});
    const [foundersExperienceRef, foundersExperienceInView] = useInView({rootMargin: '400px'});
    const [founderOneRef, founderOneInView] = useInView({rootMargin: '-36px'});
    const [founderTwoRef, founderTwoInView] = useInView({rootMargin: '-36px'});
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
            (founderOneInView) ||
            (founderTwoInView)
            // (founderTwoInView)
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
        foundersSectionInView,
        foundersExperienceInView,
        founderOneInView,
        founderTwoInView,
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
            <FoundersSection
                foundersSectionRef={foundersSectionRef}
                foundersExperienceRef={foundersExperienceRef}
                founderOneRef={founderOneRef}
                founderTwoRef={founderTwoRef}
                foundersExperienceInView={foundersExperienceInView}
            />
            <NetworkSection boardSectionRef={networkSectionRef}/>
            {/*<NewsSection newsSectionRef={newsSectionRef}/>*/}
            <GoContactSection contactSectionRef={contactSectionRef}/>
        </Layout>
    )
}

export default IndexPage
