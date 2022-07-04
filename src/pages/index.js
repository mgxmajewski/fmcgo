import * as React from "react"
import {useEffect, useState} from "react"
import Layout from "../components/Layout";
import GoHero from "../components/GoHero";
import Radical from "../components/Radical"
import FoundersSection from "../components/FoundersSection";
import ExperienceSection from "../components/ExperienceSection";
import NetworkSection from "../components/NetworkSection";
import GoContactSection from "../components/GoContactSection";
import ThreeSixtySection from "../components/ThreeSixtySection";
import {useInView} from "react-intersection-observer";
import {Helmet} from "react-helmet";

const IndexPage = ({ref}) => {

    const [heroSectionRef, heroSectionInView] = useInView({rootMargin: '-36px'});
    const [radicalSectionRef, radicalSectionInView] = useInView({rootMargin: '-36px'});
    const [experienceSectionRef, experienceSectionInView] = useInView({rootMargin: '-36px'});
    const [threeSixtySectionRef, threeSixtySectionInView] = useInView({rootMargin: '-36px'});
    const [experienceDrawersRef, experienceDrawersInView] = useInView({rootMargin: '600px'});
    const [aboveFounderOneRef, aboveFounderOneInView] = useInView({rootMargin: '-36px'});
    const [aboveFounderTwoRef, aboveFounderTwoInView] = useInView({rootMargin: '-36px'});
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
            (!heroSectionInView && radicalSectionInView)
            || (!aboveFounderOneInView && founderOneInView)
            || (!aboveFounderTwoInView && founderTwoInView)
            || (!networkSectionInView && threeSixtySectionInView)
        ) {
            setIsNavFontBright('true')
        } else {
            setIsNavFontBright('false')
        }

    }, [
        heroSectionInView,
        radicalSectionInView,
        experienceSectionInView,
        experienceDrawersInView,
        threeSixtySectionInView,
        founderOneInView,
        founderTwoInView,
        aboveFounderOneInView,
        aboveFounderTwoInView,
        networkSectionInView,
        contactSectionInView,
        areSocialIconsVisible])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>fmc_go - #RadicalAdvertising - FMCG/retail/commodity services</title>
                <meta
                    name="description"
                    content="Jesteśmy agencją reklamową full-service specjalizującą się w tworzeniu komunikacji dla marek z kategorii FMCG, retail i commodity services."
                />
                <meta property="og:url"
                      content="https://fmcgo.pl"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="fmc_go #RadicalAdvertising"/>
                <meta
                    property="og:description"
                    content="Jesteśmy agencją reklamową full-service specjalizującą się w tworzeniu komunikacji dla marek z kategorii FMCG, retail i commodity services."
                />
                <meta property="og:image" content="https://fmcgo.pl/gobadge.png"/>
                <meta property="og:site_name" content="fmc_go" />
                <link rel="canonical" href="https://fmcgo.pl" />
                <meta name='robots' content='index, follow'/>
            </Helmet>
            <Layout
                isNavFontBright={isNavFontBright}
                isOpen={isOpen}
                toggle={toggleNavState}
            >
                <GoHero
                    heroSectionRef={heroSectionRef}
                />
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
                <NetworkSection
                    boardSectionRef={networkSectionRef}
                />
                <ThreeSixtySection
                    threeSixtySectionRef={threeSixtySectionRef}
                    experienceDrawersRef={experienceDrawersRef}
                    experienceInView={experienceDrawersInView}
                />
                <ExperienceSection
                    experienceSectionRef={experienceSectionRef}
                />
                <GoContactSection
                    contactSectionRef={contactSectionRef}
                />
            </Layout>
        </>
    )
}

export default IndexPage
