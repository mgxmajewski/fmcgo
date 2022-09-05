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
                    Wir verstehen und mögen Produkte, Geschäfte und Dienstleistungen. Wir können uns in Marktdaten,
                    Verbraucherforschung und&nbsp;kulturelle Trends vertiefen, um die Erkenntnisse mit dem größten
                    Geschäftspotenzial zu finden und einen angemessenen Markenzweck zu formulieren. Wir gießen kreative
                    Lösungen auf ein starkes Fundament der Preispositionierung, unterstützen mit&nbsp;Sonderaktionen und
                    bereiten uns auf saisonale Turbulenzen vor.
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