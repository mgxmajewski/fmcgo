// import React, {useEffect, useState} from 'react';
// import Layout from "./Layout";
//
//
//
//
// const ScrollStateProvider = () => {
//
//     const [isOpen, setIsOpen] = useState(false);
//
//     const toggle = () => {
//         setIsOpen(!isOpen);
//     }
//
//     const [isNavFontBright, setIsNavFontBright] = useState('false');
//     const [areSocialIconsVisible, setAreSocialIconsVisible] = useState('true');
//
//     // console.log(`children.props: ` + JSON.stringify(children));
//
//     const toggleNavFontColor = () => {
//
//         const getElementHeight = name => document.getElementById(name).clientHeight;
//
//         // This is offset which makes the font to change the color when it exceeds half of its height into new section.
//
//         // NavBar edge offset adjustment
//         const navBarFontBottomEdge = - window.innerWidth * .01
//
//         // This is offset for contact form pseudo-element (gradient background)
//         const contactFormPseudoElementOffset = window.innerWidth * .145 + window.innerWidth * .03
//
//         // Calculations to get the right context for navBar font changes.
//         const goSectionHeight = getElementHeight('go-section');
//         const radicalSectionTopEdge = goSectionHeight + navBarFontBottomEdge
//         const radicalSectionHeight = getElementHeight('radical-section');
//         const radicalSectionBottomEdge = radicalSectionTopEdge + radicalSectionHeight
//         const coSectionHeight = getElementHeight('co-section');
//         const boardSectionTopEdge = radicalSectionBottomEdge + coSectionHeight
//         const boardSectionHeight = getElementHeight('board-section');
//         const boardSectionBottemEdge = boardSectionTopEdge + boardSectionHeight
//         const newsSectionHeight = getElementHeight('news-section');
//         const contactSectionTopEdge = boardSectionBottemEdge + newsSectionHeight;
//         const contactSectionFormEdge = contactSectionTopEdge + contactFormPseudoElementOffset
//
//
//         // Booleans checking if NavBar is over dark sections to change font color to white
//         const navBarIsOverRadicalSection = window.scrollY >= radicalSectionTopEdge && window.scrollY <= radicalSectionBottomEdge
//         const navBarIsOverBoardSection = window.scrollY >= boardSectionTopEdge && window.scrollY <= boardSectionBottemEdge
//         const navBarIsOverContactForm = window.scrollY >= contactSectionFormEdge
//
//         if (navBarIsOverRadicalSection || navBarIsOverBoardSection || navBarIsOverContactForm) {
//             setAreSocialIconsVisible('false')
//             setIsNavFontBright('true')
//         } else {
//             setIsNavFontBright('false')
//         }
//     }
//
//
//     useEffect(() => {
//         window.addEventListener('scroll', toggleNavFontColor)
//     }, []);
//
//     return (
//         <>
//          <Layout isNavFontBright={isNavFontBright} areSocialIconsVisible={areSocialIconsVisible} toggle={toggle} isOpen={isOpen}/>
//         </>
//     );
// };
//
// export default ScrollStateProvider;