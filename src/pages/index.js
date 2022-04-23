import * as React from "react"
import {useEffect, useState} from "react"
import Layout from "../components/Layout";
import GoHero from "../components/GoHero";
import CoSection from "../components/CoSection";
import BoardSection from "../components/BoardSection";
import NewsSection from "../components/NewsSection";
import ContactSection from "../components/ContactSection";
import Radical from "../components/Radical"
import {useInView} from "react-intersection-observer";

const IndexPage = ({ref}) => {

    const [heroSectionRef, heroSectionInView] = useInView({rootMargin: '-36px'});
    const [radicalSectionRef, radicalSectionInView] = useInView({rootMargin: '-36px'});
    const [coSectionRef, coSectionInView] = useInView({rootMargin: '-36px'});
    const [coAboveSliderRef, coAboveSliderInView] = useInView({rootMargin: '-36px'});
    const [coSliderRef, coSliderInView] = useInView();
    const [boardSectionRef, boardSectionInView] = useInView();
    const [newsSectionRef, newsSectionInView] = useInView({rootMargin: '-36px'});
    const [contactSectionRef, contactSectionInView] = useInView();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
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
            (!coAboveSliderInView && coSliderInView) ||
            (!coSectionInView && boardSectionInView) ||
            (!newsSectionInView && contactSectionInView)
        ) {
            setIsNavFontBright('true')
        } else {
            setIsNavFontBright('false')
        }

    }, [
        heroSectionInView,
        radicalSectionInView,
        coSectionInView,
        coAboveSliderInView,
        coSliderInView,
        newsSectionInView,
        contactSectionInView])

    return (
        <Layout
            isNavFontBright={isNavFontBright}
            isOpen={isOpen}
            toggle={toggle}
        >
            <GoHero heroSectionRef={heroSectionRef}/>
            <Radical
                radicalRef={radicalSectionRef}
                areSocialIconsVisible={areSocialIconsVisible}
            />
            <CoSection
                coSectionRef={coSectionRef}
                coAboveSliderRef={coAboveSliderRef}
                coSliderRef={coSliderRef}
            />
            {coSectionInView
                ? <BoardSection boardSectionRef={boardSectionRef}/>
                : <></>

            }
            {boardSectionInView
                ? <NewsSection newsSectionRef={newsSectionRef}/>
                : <></>
            }
            {newsSectionInView
                ? <ContactSection contactSectionRef={contactSectionRef}/>
                : <></>
            }
        </Layout>
    )
}

export default IndexPage
