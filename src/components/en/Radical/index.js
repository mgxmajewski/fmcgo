import React from 'react';
import MouseIcon from '../../../assets/mouse-icon.svg'
import RadicalDrawersRow from "../../RadicalDrawersRow";
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
} from "../../Radical/RadicalElements";
import "aos/dist/aos.css";
import RadicalManifest from "../RadicalManifest";

const Index = ({areSocialIconsVisible, radicalRef}) => {

    return (<>
            <RadicalIcons id="radical-icons">
                <MouseGo isvisible={areSocialIconsVisible}>
                    <MouseIconDiv><MouseIcon/></MouseIconDiv>
                    go
                </MouseGo>
                <SocialIcons isvisible={areSocialIconsVisible}>
                    <a href="mailto:go@fmcgo.pl" style={{textDecoration: "none"}}>
                        <SocialMediaIconBox isvisible={areSocialIconsVisible}>@</SocialMediaIconBox>
                    </a>
                </SocialIcons>
            </RadicalIcons>
            <RadicalSection ref={radicalRef} id="radical-section">
                <RadicalTagline
                    data-aos="fade-down"
                    data-aos-once="true"
                >
                    Go #RadicalAdvertising!
                </RadicalTagline>
                <RadicalCopy
                    data-aos="fade-up"
                    data-aos-once="true"
                >
                    We understand and like the products, stores and services. We know how to dig into market data,
                    consumer research and cultural trends to find insights with the greatest business potential and
                    formulate relevant brand purpose. We base our creative solutions on a strong foundation of price
                    positioning, support them with promotion campaigns and prepare for seasonal turbulence.
                </RadicalCopy>
                <RadicalDrawersContainer
                    data-aos="fade-right"
                    data-aos-once="true">
                    <RadicalDrawersRow/>
                </RadicalDrawersContainer>
                <RadicalManifest/>
            </RadicalSection>
        </>
    );
};

export default Index;