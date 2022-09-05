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
                    Rozumiemy i&nbsp;lubimy produkty, sklepy i&nbsp;usługi. Potrafimy wgryźć się w dane rynkowe, badania
                    konsumenckie i&nbsp;trendy kulturowe, by&nbsp;znaleźć insighty o&nbsp;największym potencjale
                    biznesowym i&nbsp;formułować adekwatne brand purpose. Kreatywne rozwiązania wylewamy na&nbsp;mocnych
                    fundamentach pozycjonowania cenowego, wspieramy promocjami i&nbsp;przygotowujemy na&nbsp;sezonowe
                    zawirowania.
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