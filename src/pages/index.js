import * as React from "react"
import {useEffect, useState} from "react"
import Layout from "../components/Layout";
// import DrawersContainer from "../components/DrawersContainer";
import GoHero from "../components/GoHero";
// import Index from "../components/Radical";
import CoSection from "../components/CoSection";
import BoardSection from "../components/BoardSection";
import NewsSection from "../components/NewsSection";
import ContactSection from "../components/ContactSection";
import Radical from "../components/Radical"
import {useInView} from "react-intersection-observer";


// markup
const IndexPage = ({ref}) => {


    // console.log(`children.props: ` + JSON.stringify(children));

    // const toggleRadicalIcons = () => {
    //
    //     const getElementHeight = name => document.getElementById(name).clientHeight;
    //
    //     // This is offset which makes the font to change the color when it exceeds half of its height into new section.
    //
    //     // NavBar edge offset adjustment
    //     const navBarFontBottomEdge = window.innerWidth >= 900 ? window.innerWidth * .01 : -window.innerWidth * .04
    //
    //     // This is offset for contact form pseudo-element (gradient background)
    //     const contactFormPseudoElementOffset = window.innerWidth * .145 - window.innerWidth * .01
    //
    //     // Calculations to get the right context for navBar font changes.
    //     const goSectionHeight = getElementHeight('go-section');
    //     const radicalSectionTopEdge = goSectionHeight + navBarFontBottomEdge
    //     const radicalSectionHeight = getElementHeight('radical-section');
    //     const radicalSectionBottomEdge = radicalSectionTopEdge + radicalSectionHeight
    //     const navBarIsOverRadicalSection = window.scrollY >= radicalSectionTopEdge && window.scrollY <= radicalSectionBottomEdge
    //
    //     if (navBarIsOverRadicalSection) {
    //         setAreSocialIconsVisible('false')
    //     } else {
    //         setAreSocialIconsVisible('true')
    //     }
    //
    // }


    // const scrollPostionHandler = () => {

    // const getElementHeight = name => document.getElementById(name).clientHeight;
    //
    // // This is offset which makes the font to change the color when it exceeds half of its height into new section.
    //
    // // NavBar edge offset adjustment
    // const navBarFontBottomEdge = window.innerWidth >= 900 ? window.innerWidth * .01 : -window.innerWidth * .04
    //
    // // This is offset for contact form pseudo-element (gradient background)
    // const contactFormPseudoElementOffset = window.innerWidth * .145 - window.innerWidth * .01
    //
    // // Calculations to get the right context for navBar font changes.
    // const goSectionHeight = getElementHeight('go-section');
    // const radicalSectionTopEdge = goSectionHeight + navBarFontBottomEdge
    // const radicalSectionHeight = getElementHeight('radical-section');
    // const radicalSectionBottomEdge = radicalSectionTopEdge + radicalSectionHeight
    // const coSectionHeight = getElementHeight('co-section');
    // const boardSectionTopEdge = radicalSectionBottomEdge + coSectionHeight
    // const sliderPictureHeight = getElementHeight('slider-picture')
    // const sliderContainerHeight = getElementHeight('slider-container')
    // const sliderTopEdge = boardSectionTopEdge - sliderContainerHeight - window.innerWidth * .06
    // const sliderBottomEdge = sliderTopEdge + sliderPictureHeight
    // const boardSectionHeight = getElementHeight('board-section');
    // const boardSectionBottemEdge = boardSectionTopEdge + boardSectionHeight
    // const newsSectionHeight = getElementHeight('news-section');
    // const contactSectionTopEdge = boardSectionBottemEdge + newsSectionHeight;
    // const contactSectionFormEdge = contactSectionTopEdge + contactFormPseudoElementOffset
    //
    //
    // // Booleans checking if NavBar is over dark sections to change font color to white
    // const navBarIsOverRadicalSection = window.scrollY >= radicalSectionTopEdge && window.scrollY <= radicalSectionBottomEdge
    // const navBarIsOverSlider = window.scrollY >= sliderTopEdge && window.scrollY <= sliderBottomEdge
    // const navBarIsOverBoardSection = window.scrollY >= boardSectionTopEdge && window.scrollY <= boardSectionBottemEdge
    // const navBarIsOverContactForm = window.scrollY >= contactSectionFormEdge
    //
    // if (navBarIsOverRadicalSection) {
    //     setAreSocialIconsVisible('false')
    // } else {
    //     setAreSocialIconsVisible('true')
    // }
    //
    // if (navBarIsOverRadicalSection || navBarIsOverBoardSection || navBarIsOverContactForm || navBarIsOverSlider) {
    //     // setAreSocialIconsVisible('false')
    //     setIsNavFontBright('true')
    // } else {
    //     // setAreSocialIconsVisible('true')
    //     setIsNavFontBright('false')
    // }
    // }


    // useEffect(() => {
    //     window.addEventListener('scroll', scrollPostionHandler)
    //     // window.addEventListener('scroll', toggleRadicalIcons)
    // }, []);


    const [heroSectionRef, heroSectionInView] = useInView({rootMargin: '-36px'});
    const [radicalSectionRef, radicalSectionInView] = useInView();
    const [coSectionRef, coSectionInView] = useInView({rootMargin: '-36px'});
    const [coAboveSliderRef, coAboveSliderInView] = useInView();
    const [coSliderRef, coSliderInView] = useInView();
    const [boardSectionRef, boardSectionInView] = useInView({rootMargin: '-36px'});
    const [newsSectionRef, newsSectionInView] = useInView({rootMargin: '-36px'});
    const [contactSectionRef, contactSectionInView] = useInView();


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const [isNavFontBright, setIsNavFontBright] = useState('false');
    const [areSocialIconsVisible, setAreSocialIconsVisible] = useState('true');

    console.log(`inView: ` + JSON.stringify(radicalSectionInView));

    useEffect(() => {
        if (
            (!heroSectionInView && radicalSectionInView) ||
            (!coAboveSliderInView && coSliderInView) ||
            (!coSectionInView && boardSectionInView) ||
            (!newsSectionInView && contactSectionInView)
        ) {
            setIsNavFontBright('true')
            setAreSocialIconsVisible('false')
        } else {
            setIsNavFontBright('false')
            setAreSocialIconsVisible('true')
        }

    }, [heroSectionInView, radicalSectionInView, coSectionInView, coAboveSliderInView, coSliderInView, newsSectionInView, contactSectionInView])

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
            <BoardSection boardSectionRef={boardSectionRef}/>
            <NewsSection newsSectionRef={newsSectionRef}/>
            <ContactSection contactSectionRef={contactSectionRef}/>
        </Layout>
    )
}

export default IndexPage
