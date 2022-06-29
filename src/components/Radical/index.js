import React from 'react';
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
                    <a href="https://www.facebook.com/fmcgoagencja" target="_blank" rel="noreferrer"
                       style={{textDecoration: "none"}}>
                        <SocialMediaIconBox isvisible={areSocialIconsVisible}>f</SocialMediaIconBox>
                    </a>
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
                    Rozumiemy i&nbsp;lubimy produkty, sklepy i&nbsp;usługi, które reklamujemy. Potrafimy wgryźć się
                    w&nbsp;dane,
                    etnografie, badania,
                    by&nbsp;znaleźć insighty o&nbsp;największym potencjale biznesowym i formułować adekwatne brand purpose.
                    Równocześnie potrafimy docenić rolę, która w komunikacji marketingowej odgrywa cena,&nbsp;promocja,
                    sezon.
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