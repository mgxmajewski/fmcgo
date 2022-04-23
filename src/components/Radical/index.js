import React, {useEffect} from 'react';
import MouseIcon from '../../assets/mouse-icon.svg'
import RadicalDrawersRow from "../RadicalDrawersRow";
import {
    MouseGo,
    MouseIconDiv,
    RadicalCopy,
    RadicalDrawersContainer,
    RadicalIcons,
    RadicalSection,
    RadicalTagline,
    SocialIcons,
    SocialMediaIconBox
} from "./RadicalElements";
import AOS from "aos";
import "aos/dist/aos.css";

const Index = ({areSocialIconsVisible, radicalRef}) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <RadicalSection ref={radicalRef} id="radical-section">
            <RadicalIcons>
                <MouseGo isvisible={areSocialIconsVisible}>
                    <MouseIconDiv><MouseIcon/></MouseIconDiv>
                    go
                </MouseGo>
                <SocialIcons>
                    <a href="https://www.facebook.com/fmcgoagencja" target="_blank" rel="noreferrer"
                       style={{textDecoration: "none"}}>
                        <SocialMediaIconBox isvisible={areSocialIconsVisible}>f</SocialMediaIconBox>
                    </a>
                    <a href="mailto:go@fmcgo.pl" style={{textDecoration: "none"}}>
                        <SocialMediaIconBox isvisible={areSocialIconsVisible}>@</SocialMediaIconBox>
                    </a>
                </SocialIcons>
            </RadicalIcons>
            <RadicalTagline>#Radical Advertising</RadicalTagline>
            <RadicalCopy
                data-aos="fade-up"
            >
                If a creative idea can’t be fit into an e&#8209;commerce banner, it’s not advertising.<br/>
                We are here to sell your products not just our services. We love our pack-shots and price-tags, and
                we’ll never hesitate <br/>
                to use them. We believe that the only true measurement for successful advertising is sales.
            </RadicalCopy>
            <RadicalDrawersContainer data-aos="fade-right">
                <RadicalDrawersRow  />
            </RadicalDrawersContainer>
        </RadicalSection>
    );
};

export default Index;