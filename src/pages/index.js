import * as React from "react"
import {useEffect, useState} from "react"
import Layout from "../components/Layout";
import GoHero from "../components/GoHero";
import Radical from "../components/Radical"
import FoundersSection from "../components/FoundersSection";
import ExperienceSection from "../components/ExperienceSection";
import NetworkSection from "../components/NetworkSection";
import GoContactSection from "../components/GoContactSection";
import {useInView} from "react-intersection-observer";

const IndexPage = ({ref}) => {

    const [heroSectionRef, heroSectionInView] = useInView({rootMargin: '-36px'});
    const [radicalSectionRef, radicalSectionInView] = useInView({rootMargin: '-36px'});
    const [foundersSectionRef, foundersSectionInView] = useInView({rootMargin: '-36px'});
    const [foundersExperienceRef, foundersExperienceInView] = useInView({rootMargin: '400px'});
    const [aboveFounderOneRef, aboveFounderOneInView] = useInView({rootMargin: '-36px'});
    const [aboveFounderTwoRef, aboveFounderTwoInView] = useInView({rootMargin: '-36px'});
    const [founderOneRef, founderOneInView] = useInView({rootMargin: '-36px'});
    const [founderTwoRef, founderTwoInView] = useInView({rootMargin: '-36px'});
    const [networkSectionRef, networkSectionInView] = useInView({rootMargin: '-36px'});

    const [networkOneRef, networkOneInView] = useInView({rootMargin: '-36px'});
    const [networkTwoRef, networkTwoInView] = useInView({rootMargin: '-36px'});
    const [networkThreeRef, networkThreeInView] = useInView({rootMargin: '-36px'});
    const [networkFourRef, networkFourInView] = useInView({rootMargin: '-36px'});
    const [networkFiveRef, networkFiveInView] = useInView({rootMargin: '-36px'});
    const [networkSixRef, networkSixInView] = useInView({rootMargin: '-36px'});
    const [networkSevenRef, networkSevenInView] = useInView({rootMargin: '-36px'});
    const [networkEightRef, networkEightInView] = useInView({rootMargin: '-36px'});
    const [networkNineRef, networkNineInView] = useInView({rootMargin: '-36px'});
    const [networkTenRef, networkTenInView] = useInView({rootMargin: '-36px'});
    const [networkElevenRef, networkElevenInView] = useInView({rootMargin: '-36px'});


    const [contactSectionRef, contactSectionInView] = useInView();

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavState = () => {
        setIsOpen(!isOpen);
    }

    const [isNavFontBright, setIsNavFontBright] = useState('false');
    const [areSocialIconsVisible, setAreSocialIconsVisible] = useState('true');

    useEffect(() => {

        console.log(`aboveFounderOneInView: ` + JSON.stringify(aboveFounderOneInView));
        console.log(`founderOneInView: ` + JSON.stringify(founderOneInView));


        if (!heroSectionInView && radicalSectionInView) {
            setAreSocialIconsVisible('false')
        } else {
            setAreSocialIconsVisible('true')
        }

        if (
            (!heroSectionInView && radicalSectionInView)
            || (!aboveFounderOneInView && founderOneInView)
            || (!aboveFounderTwoInView && founderTwoInView)
            // || (founderTwoInView)
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
        aboveFounderOneInView,
        aboveFounderTwoInView,
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
                aboveFounderOneRef={aboveFounderOneRef}
                aboveFounderTwoRef={aboveFounderTwoRef}
                founderOneRef={founderOneRef}
                founderTwoRef={founderTwoRef}
            />
            <ExperienceSection
                foundersSectionRef={foundersSectionRef}
                aboveFounderOneRef={aboveFounderOneRef}
                aboveFounderTwoRef={aboveFounderTwoRef}
                founderOneRef={founderOneRef}
                founderTwoRef={founderTwoRef}
                foundersExperienceRef={foundersExperienceRef}
                foundersExperienceInView={foundersExperienceInView}
            />
            <NetworkSection
                boardSectionRef={networkSectionRef}
                networkOneRef={networkOneRef}
                networkTwoRef={networkTwoRef}
                networkThreeRef={networkThreeRef}
                networkFourRef={networkFourRef}
                networkFiveRef={networkFiveRef}
                networkSixRef={networkSixRef}
                networkSevenRef={networkSevenRef}
                networkEightRef={networkEightRef}
                networkNineRef={networkNineRef}
                networkTenRef={networkTenRef}
                networkElevenRef={networkElevenRef}
            />
            {/*<NewsSection newsSectionRef={newsSectionRef}/>*/}
            <GoContactSection contactSectionRef={contactSectionRef}/>
        </Layout>
    )
}

export default IndexPage
