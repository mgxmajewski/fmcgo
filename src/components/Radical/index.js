import React from 'react';
import MouseIcon from '../../assets/mouse-icon.svg'
import {
    mouseGo,
    mouseIcon,
    radicalCopy,
    radicalDrawers,
    radicalIcons,
    radicalSection,
    radicalTagline,
    socialIcons
} from "../../styles/radical.module.css";
import RadicalDrawersRow from "../RadicalDrawersRow";
import {SocialMediaIconBox} from "./RadicalElements";


const Index = ({areSocialIconsVisible}) => {

    return (
        <section className={radicalSection} id="radical-section">
            <div className={radicalIcons}>
                <div className={mouseGo}>
                    <MouseIcon className={mouseIcon}/>
                    go
                </div>
                <div className={socialIcons}>
                    <a href="https://www.facebook.com/fmcgoagencja" target="_blank" rel="noopener" style={{textDecoration: "none"}}>
                        <SocialMediaIconBox isvisible={areSocialIconsVisible}>f</SocialMediaIconBox>
                    </a>
                    <a href="mailto: go@fmcgo.pl" style={{textDecoration: "none"}}>
                        <SocialMediaIconBox isvisible={areSocialIconsVisible}>@</SocialMediaIconBox>
                    </a>
                </div>
            </div>
            <div className={radicalTagline}>#Radical Advertising</div>
            <div className={radicalCopy}>
                If a creative idea can’t be fit into an e&#8209;commerce banner, it’s not advertising.<br/>
                We are here to sell your products not just our services. We love our pack-shots and price-tags, and
                we’ll never hesitate <br/>
                to use them. We believe that the only true measurement for successful advertising is sales.
            </div>
            <div className={radicalDrawers}>
                <RadicalDrawersRow/>
            </div>
        </section>
    );
};

export default Index;