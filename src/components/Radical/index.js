import React from 'react';
import MouseIcon from '../../assets/mouse-icon.svg'
import RadicalDrawersRow from "../RadicalDrawersRow";
import {
    MouseGo,
    MouseIconDiv, RadicalCopy, RadicalDrawersContainer,
    RadicalIcons,
    RadicalSection,
    RadicalTagline,
    SocialIcons,
    SocialMediaIconBox
} from "./RadicalElements";


const Index = ({areSocialIconsVisible, radicalRef}) => {

    return (
        <RadicalSection ref={radicalRef} id="radical-section">
            <RadicalIcons>
                <MouseGo isvisible={areSocialIconsVisible}>
                    <MouseIconDiv><MouseIcon/></MouseIconDiv>
                    go
                </MouseGo>
                <SocialIcons>
                    <a href="https://www.facebook.com/fmcgoagencja" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                        <SocialMediaIconBox isvisible={areSocialIconsVisible}>f</SocialMediaIconBox>
                    </a>
                    <a href="mailto:go@fmcgo.pl" style={{textDecoration: "none"}}>
                        <SocialMediaIconBox isvisible={areSocialIconsVisible}>@</SocialMediaIconBox>
                    </a>
                </SocialIcons>
            </RadicalIcons>
            <RadicalTagline>#Radical Advertising</RadicalTagline>
            <RadicalCopy>
                If a creative idea can’t be fit into an e&#8209;commerce banner, it’s not advertising.<br/>
                We are here to sell your products not just our services. We love our pack-shots and price-tags, and
                we’ll never hesitate <br/>
                to use them. We believe that the only true measurement for successful advertising is sales.
            </RadicalCopy>
            <RadicalDrawersContainer>
                <RadicalDrawersRow/>
            </RadicalDrawersContainer>
        </RadicalSection>
    );
};

export default Index;