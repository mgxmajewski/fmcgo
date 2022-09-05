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
                    Nous comprenons et aimons les produits, les magasins et les services. Nous savons fouiller dans les
                    données du marché, les études de consommation et les tendances culturelles pour trouver les idées
                    qui présentent le plus grand potentiel commercial et formuler des objectifs de marque appropriés.
                    Nos solutions créatives sont appuyées sur une base solide de positionnement des prix, soutenues par
                    les promotions et bien préparées aux turbulences saisonnières.
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